#!/usr/bin/env python3
"""Public-only HackerOne program crawler.

Goals:
- Use only publicly accessible endpoints (no login, no cookies).
- Be polite: caching (ETag/Last-Modified), rate limiting, per-run fetch caps.
- Produce a stable, diffable JSON snapshot and a human-readable markdown page.

Data source:
- https://hackerone.com/sitemap.xml (explicitly advertised in robots.txt)
- Individual public program pages like https://hackerone.com/uber

We classify a handle as a program when the public HTML contains meta tags that
include "Bug Bounty Program" or "Vulnerability Disclosure Program".

This script intentionally does NOT attempt to enumerate in-scope assets behind
authentication (scope/rewards typically require login for many programs).
"""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import io
import json
import os
import random
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

H1_SITEMAP_INDEX = "https://hackerone.com/sitemap.xml"
H1_BASE = "https://hackerone.com"

NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}

PROGRAM_MARKERS = (
    "- Bug Bounty Program | HackerOne",
    "- Vulnerability Disclosure Program | HackerOne",
    "Bug Bounty Program",
    "Vulnerability Disclosure Program",
)


def utc_now_iso() -> str:
    return dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()


def sha256_bytes(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


def safe_mkdir(p: str) -> None:
    os.makedirs(p, exist_ok=True)


class HttpCache:
    """A tiny on-disk cache keyed by URL.

    Stores:
      - body bytes
      - headers (ETag, Last-Modified)
      - fetched_at
      - status

    Note: We still respect per-run rate limiting. The cache exists to reduce
    network load and produce stable diffs.
    """

    def __init__(self, cache_dir: str):
        self.cache_dir = cache_dir
        safe_mkdir(cache_dir)

    def _key(self, url: str) -> str:
        return hashlib.sha256(url.encode("utf-8")).hexdigest()

    def path_for(self, url: str) -> str:
        return os.path.join(self.cache_dir, self._key(url) + ".json")

    def get(self, url: str) -> dict | None:
        p = self.path_for(url)
        if not os.path.exists(p):
            return None
        try:
            with open(p, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return None

    def put(self, url: str, status: int, headers: dict, body: bytes) -> None:
        rec = {
            "url": url,
            "status": status,
            "headers": {
                "etag": headers.get("ETag"),
                "last_modified": headers.get("Last-Modified"),
                "content_type": headers.get("Content-Type"),
            },
            "fetched_at": utc_now_iso(),
            "sha256": sha256_bytes(body),
            "body_b64": body.decode("utf-8", errors="replace"),
        }
        # Store as UTF-8 text instead of base64 to keep things simple; these are
        # HTML/XML responses. If H1 ever serves binary, it will be lossy.
        with open(self.path_for(url), "w", encoding="utf-8") as f:
            json.dump(rec, f, indent=2, sort_keys=True)


class PoliteFetcher:
    def __init__(
        self,
        cache: HttpCache,
        user_agent: str,
        min_delay_s: float,
        timeout_s: float,
        jitter_s: float,
        max_retries: int,
    ):
        self.cache = cache
        self.user_agent = user_agent
        self.min_delay_s = min_delay_s
        self.jitter_s = jitter_s
        self.timeout_s = timeout_s
        self.max_retries = max_retries
        self._last_fetch_t = 0.0

    def _sleep_if_needed(self) -> None:
        now = time.time()
        elapsed = now - self._last_fetch_t
        target = self.min_delay_s + random.random() * self.jitter_s
        if elapsed < target:
            time.sleep(target - elapsed)

    def fetch(self, url: str, force: bool = False) -> tuple[int, dict, bytes, bool]:
        """Fetch URL with cache revalidation.

        Returns: (status, headers, body, from_cache)
        """
        cached = self.cache.get(url)
        headers = {"User-Agent": self.user_agent, "Accept": "text/html,application/xml;q=0.9,*/*;q=0.8"}
        if cached and not force:
            etag = (cached.get("headers") or {}).get("etag")
            lm = (cached.get("headers") or {}).get("last_modified")
            if etag:
                headers["If-None-Match"] = etag
            if lm:
                headers["If-Modified-Since"] = lm

        req = urllib.request.Request(url, headers=headers, method="GET")

        attempt = 0
        while True:
            attempt += 1
            try:
                self._sleep_if_needed()
                with urllib.request.urlopen(req, timeout=self.timeout_s) as resp:
                    status = getattr(resp, "status", 200)
                    body = resp.read()
                    resp_headers = dict(resp.headers.items())
                    self.cache.put(url, status, resp_headers, body)
                    self._last_fetch_t = time.time()
                    return status, resp_headers, body, False
            except urllib.error.HTTPError as e:
                # 304 Not Modified: return cached body.
                if e.code == 304 and cached and not force:
                    body = (cached.get("body_b64") or "").encode("utf-8", errors="replace")
                    self._last_fetch_t = time.time()
                    return 304, cached.get("headers") or {}, body, True

                # Backoff on 429/5xx.
                if attempt <= self.max_retries and (e.code == 429 or 500 <= e.code < 600):
                    backoff = min(60.0, (2 ** (attempt - 1)) + random.random())
                    time.sleep(backoff)
                    continue

                raise
            except Exception:
                if attempt <= self.max_retries:
                    backoff = min(30.0, (2 ** (attempt - 1)) + random.random())
                    time.sleep(backoff)
                    continue
                raise


def parse_sitemap_xml(xml_bytes: bytes) -> list[dict]:
    """Parse sitemap XML using iterparse to handle large files."""
    items: list[dict] = []

    # Detect root tag by reading the first start event.
    bio = io.BytesIO(xml_bytes)
    it = ET.iterparse(bio, events=("start", "end"))

    root_tag = None
    for event, elem in it:
        if event == "start":
            root_tag = elem.tag
            break

    if root_tag is None:
        return items

    # Continue parsing from current state.
    # Note: iterparse doesn't let us rewind the generator, so we handle elements
    # based on end events going forward.
    for event, elem in it:
        if event != "end":
            continue

        tag = elem.tag
        if tag.endswith("sitemap") and root_tag.endswith("sitemapindex"):
            loc = elem.findtext("sm:loc", default="", namespaces=NS).strip()
            lastmod = elem.findtext("sm:lastmod", default="", namespaces=NS).strip()
            if loc:
                items.append({"loc": loc, "lastmod": lastmod})
            elem.clear()

        elif tag.endswith("url") and root_tag.endswith("urlset"):
            loc = elem.findtext("sm:loc", default="", namespaces=NS).strip()
            lastmod = elem.findtext("sm:lastmod", default="", namespaces=NS).strip()
            if loc:
                items.append({"loc": loc, "lastmod": lastmod})
            elem.clear()

    return items


_META_RE = re.compile(r"<meta[^>]+>", re.IGNORECASE)
_ATTR_RE = re.compile(r"(\w+)=(?:\"([^\"]*)\"|'([^']*)')")


def extract_meta(html: str) -> dict:
    metas: dict[str, str] = {}
    for tag in _META_RE.findall(html):
        attrs = {}
        for k, v1, v2 in _ATTR_RE.findall(tag):
            attrs[k.lower()] = v1 or v2
        # Capture common meta patterns.
        if "property" in attrs and "content" in attrs:
            metas[f"property:{attrs['property']}"] = attrs["content"]
        if "name" in attrs and "content" in attrs:
            metas[f"name:{attrs['name']}"] = attrs["content"]
    return metas


def classify_program(meta: dict) -> dict | None:
    og_title = meta.get("property:og:title") or ""
    desc = meta.get("name:description") or ""

    hay = (og_title + "\n" + desc).lower()

    is_program = any(m.lower() in hay for m in PROGRAM_MARKERS)
    if not is_program:
        return None

    program_type = "unknown"
    if "vulnerability disclosure program" in hay:
        program_type = "vdp"
    if "bug bounty program" in hay:
        program_type = "bug-bounty"

    # Try to extract a friendly program name.
    name = og_title
    if " - " in name:
        name = name.split(" - ", 1)[0].strip()

    return {
        "name": name,
        "program_type": program_type,
        "og_title": og_title,
        "description": desc,
    }


def handle_from_url(url: str) -> str | None:
    try:
        u = urllib.parse.urlparse(url)
        if u.netloc not in ("hackerone.com", "www.hackerone.com"):
            return None
        path = u.path.strip("/")
        if not path:
            return None
        if "/" in path:
            return None
        return path
    except Exception:
        return None


def load_json(path: str, default):
    if not os.path.exists(path):
        return default
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json(path: str, data) -> None:
    safe_mkdir(os.path.dirname(path))
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, sort_keys=True)
    os.replace(tmp, path)


def build_markdown(programs: list[dict], diff: dict, generated_at: str) -> str:
    total = len(programs)
    bug_bounty = sum(1 for p in programs if p.get("program_type") == "bug-bounty")
    vdp = sum(1 for p in programs if p.get("program_type") == "vdp")

    lines = []
    lines.append("# HackerOne Public Program Index (Auto-generated)")
    lines.append("")
    lines.append("> **Public-only automation**: generated from HackerOne's public sitemap + public program landing pages.\n")
    lines.append(f"- Generated at (UTC): **{generated_at}**")
    lines.append(f"- Total public programs detected: **{total}** (bug bounty: {bug_bounty}, VDP: {vdp})")
    lines.append("")

    lines.append("## Passive OSINT Notes (Non-invasive)")
    lines.append("- Do **not** log in or use private scope information.")
    lines.append("- For each program, consider checking publicly available artifacts such as:")
    lines.append("  - the program landing page for policy summaries")
    lines.append("  - organization security contact pages (e.g., `/.well-known/security.txt` when the primary domain is known)")
    lines.append("  - public write-ups / advisories (careful: may contain outdated scope)")
    lines.append("")

    if diff.get("added") or diff.get("changed") or diff.get("removed"):
        lines.append("## Changes Since Last Snapshot")
        if diff.get("added"):
            lines.append(f"- Added: {len(diff['added'])}")
        if diff.get("changed"):
            lines.append(f"- Updated: {len(diff['changed'])}")
        if diff.get("removed"):
            lines.append(f"- Removed/missing: {len(diff['removed'])}")
        lines.append("")

        def _list(title, key):
            items = diff.get(key) or []
            if not items:
                return
            lines.append(f"### {title}")
            for it in items[:50]:
                # keep it short
                lines.append(f"- `{it.get('handle')}` — {it.get('name','')} ({it.get('program_type','')})")
            if len(items) > 50:
                lines.append(f"- …and {len(items) - 50} more")
            lines.append("")

        _list("Added", "added")
        _list("Updated", "changed")
        _list("Removed/Missing", "removed")

    lines.append("## Program List")
    lines.append("| Program | Handle | Type | Lastmod (sitemap) | URL |")
    lines.append("|---|---|---|---|---|")

    for p in programs:
        name = (p.get("name") or "").replace("|", "\\|")
        handle = p.get("handle")
        ptype = p.get("program_type")
        lastmod = p.get("sitemap_lastmod") or ""
        url = p.get("url") or (H1_BASE + "/" + handle)
        lines.append(f"| {name} | `{handle}` | {ptype} | {lastmod} | {url} |")

    lines.append("")
    lines.append("---")
    lines.append("*This page is generated. Do not hand-edit; update the crawler instead.*")
    lines.append("")
    return "\n".join(lines)


def diff_snapshots(prev: dict, curr: dict) -> dict:
    prev_map = {p["handle"]: p for p in prev.get("programs", []) if p.get("handle")}
    curr_map = {p["handle"]: p for p in curr.get("programs", []) if p.get("handle")}

    added = []
    changed = []
    removed = []

    for h, p in curr_map.items():
        if h not in prev_map:
            added.append(p)
        else:
            # consider changed if sitemap lastmod changed or program_type/name changed
            prev_p = prev_map[h]
            keys = ("sitemap_lastmod", "program_type", "name", "og_title", "description")
            if any((prev_p.get(k) or "") != (p.get(k) or "") for k in keys):
                changed.append(p)

    for h, p in prev_map.items():
        if h not in curr_map:
            removed.append(p)

    # Stable ordering
    added.sort(key=lambda x: x.get("handle"))
    changed.sort(key=lambda x: x.get("handle"))
    removed.sort(key=lambda x: x.get("handle"))

    return {"added": added, "changed": changed, "removed": removed}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    ap.add_argument("--cache-dir", default=None)
    ap.add_argument("--data-dir", default=None)
    ap.add_argument("--output-md", default=None)
    ap.add_argument("--min-delay", type=float, default=1.0, help="Minimum delay between network requests")
    ap.add_argument("--jitter", type=float, default=0.25)
    ap.add_argument("--timeout", type=float, default=30.0)
    ap.add_argument("--max-page-fetches", type=int, default=200)
    ap.add_argument("--force", action="store_true", help="Force refresh even if cached")
    args = ap.parse_args()

    repo = args.repo
    cache_dir = args.cache_dir or os.path.join(repo, ".cache", "hackerone-public")
    data_dir = args.data_dir or os.path.join(repo, "data", "hackerone-public")
    output_md = args.output_md or os.path.join(repo, "docs", "programs", "hackerone-public.md")

    safe_mkdir(cache_dir)
    safe_mkdir(data_dir)

    cache = HttpCache(cache_dir)
    fetcher = PoliteFetcher(
        cache=cache,
        user_agent="bastet-targets-public-only/1.0 (+no-login; contact: see repo)",
        min_delay_s=args.min_delay,
        jitter_s=args.jitter,
        timeout_s=args.timeout,
        max_retries=3,
    )

    prev_snapshot_path = os.path.join(data_dir, "programs.json")
    prev_snapshot = load_json(prev_snapshot_path, {"generated_at": None, "programs": []})
    prev_programs = {p["handle"]: p for p in prev_snapshot.get("programs", []) if p.get("handle")}

    generated_at = utc_now_iso()

    # 1) Fetch sitemap index
    status, _, body, _ = fetcher.fetch(H1_SITEMAP_INDEX, force=args.force)
    if status not in (200, 304):
        raise RuntimeError(f"Unexpected sitemap index status {status}")

    sitemap_index = parse_sitemap_xml(body)
    sitemap_urls = [x["loc"] for x in sitemap_index if x.get("loc")]

    # 2) Fetch each sitemap segment
    all_handles: dict[str, str] = {}
    for sm_url in sitemap_urls:
        st, _, sm_body, _ = fetcher.fetch(sm_url, force=args.force)
        if st not in (200, 304):
            continue
        entries = parse_sitemap_xml(sm_body)
        for e in entries:
            h = handle_from_url(e.get("loc") or "")
            if not h:
                continue
            all_handles[h] = e.get("lastmod") or ""

    # 3) Decide which handles to (re)fetch
    to_fetch = []
    for h, lastmod in all_handles.items():
        prev = prev_programs.get(h)
        if not prev:
            to_fetch.append(h)
            continue
        if (prev.get("sitemap_lastmod") or "") != (lastmod or ""):
            to_fetch.append(h)

    # Be polite: cap page fetches; the sitemap scan itself is already cached.
    to_fetch.sort()
    to_fetch = to_fetch[: max(0, args.max_page_fetches)]

    programs: dict[str, dict] = {}
    # Start with previous known programs so we don't drop entries when capped.
    for h, p in prev_programs.items():
        programs[h] = dict(p)

    fetched_pages = 0

    for h in to_fetch:
        url = f"{H1_BASE}/{h}"
        try:
            st, _, page_body, _ = fetcher.fetch(url, force=args.force)
            if st not in (200, 304):
                continue
            html = page_body.decode("utf-8", errors="replace")
            meta = extract_meta(html)
            info = classify_program(meta)
            if not info:
                # Not a public program landing page.
                # If it was previously a program, keep it but mark as unverified.
                if h in programs:
                    programs[h]["last_seen_program"] = generated_at
                    programs[h]["verification"] = "not-confirmed-this-run"
                continue

            rec = {
                "handle": h,
                "url": url,
                "sitemap_lastmod": all_handles.get(h) or "",
                "fetched_at": generated_at,
                "verification": "public-meta",
                **info,
            }
            programs[h] = rec
            fetched_pages += 1
        except Exception as e:
            # Keep going; we want a best-effort snapshot.
            programs.setdefault(h, {"handle": h, "url": url})
            programs[h]["error"] = str(e)
            continue

    # 4) Build snapshot list (only confirmed programs)
    confirmed = [p for p in programs.values() if p.get("verification") == "public-meta"]
    confirmed.sort(key=lambda x: (x.get("name") or "", x.get("handle") or ""))

    snapshot = {
        "generated_at": generated_at,
        "source": {
            "sitemap_index": H1_SITEMAP_INDEX,
            "sitemaps_count": len(sitemap_urls),
            "handles_seen": len(all_handles),
            "page_fetch_cap": args.max_page_fetches,
            "pages_fetched_this_run": fetched_pages,
        },
        "programs": confirmed,
    }

    diff = diff_snapshots(prev_snapshot, snapshot)

    save_json(prev_snapshot_path, snapshot)

    md = build_markdown(confirmed, diff, generated_at)
    safe_mkdir(os.path.dirname(output_md))
    with open(output_md, "w", encoding="utf-8") as f:
        f.write(md)

    # Print a terse summary for cron logs.
    print(json.dumps({
        "generated_at": generated_at,
        "programs": len(confirmed),
        "added": len(diff.get("added") or []),
        "changed": len(diff.get("changed") or []),
        "removed": len(diff.get("removed") or []),
        "pages_fetched": fetched_pages,
        "output_md": os.path.relpath(output_md, repo),
        "snapshot": os.path.relpath(prev_snapshot_path, repo),
    }, indent=2))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
