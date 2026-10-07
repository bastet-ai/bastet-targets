import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { posix } from 'node:path';

const fail = code => { throw Object.assign(new Error(code), { code }); };
const digest = value => createHash('sha256').update(value).digest('hex');
// Operator-owned names, not labels returned by an agent or remote program.
const TARGET_NAMES = Object.freeze({
  '1password': ['1Password'], airbnb: ['Airbnb'], akamai: ['Akamai'], airlock: ['Airlock Secure Access Hub'],
  amazonvrp: ['Amazon VRP', 'Amazon Vulnerability Research Program'], anduril_industries: ['Anduril', 'Anduril Industries'],
  atlassian: ['Atlassian'], basecamp: ['Basecamp'], coinbase: ['Coinbase', 'Coinbase Global Inc.'],
  eternal: ['Eternal'], ferrero: ['Ferrero'], gitlab: ['GitLab', 'GitLab Inc.'], mediatek: ['MediaTek'],
  'nba-public': ['NBA'], okg: ['OKG', 'OKG/OKX', 'OKX', 'OKX (formerly OKEx)'], paypal: ['PayPal', 'PayPal Holdings Inc.'],
  sheer_bbp: ['Sheer'], tiktok: ['TikTok', 'TikTok (ByteDance)'], uber: ['Uber', 'Uber Technologies Inc.'],
  zooplus: ['Zooplus'], '000webhost': ['000webhost'],
});
const escapeRegex = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function removeCuratedTargetListings(text, handles) {
  return text.split('\n').filter(line => !handles.some(handle => {
    if (!line.startsWith('- ')) return false;
    return (TARGET_NAMES[handle] ?? []).some(name => new RegExp(`^- \\*\\*${escapeRegex(name)}(?::)?\\*\\*(?:\\s*[:—-]|$)`).test(line));
  })).map(line => {
    if (!line.startsWith('- ')) return line;
    for (const handle of handles) {
      // Standalone listings are removed; inline dated lists retain other entries.
      const entry = `(?:\\x60${escapeRegex(handle)}\\x60|\\[[^\\]\\n]+\\]\\(https://hackerone\\.com/${escapeRegex(handle)}/?\\))(?:\\s*\\([^()\\n]*\\))?`;
      if (new RegExp(`^- ${entry}(?:\\s*[:—-]|\\s*$)`).test(line)) return null;
      line = line.replace(new RegExp(`(?:,\\s*and\\s+|,\\s+|\\s+and\\s+)?${entry}(?:,\\s*(?:and\\s+)?)?`, 'g'), (match, offset) => {
        const before = line.slice(0, offset); const after = line.slice(offset + match.length);
        return /[,]/.test(match) && /[`)]$/.test(before) && /^[`[]/.test(after) ? ', ' : '';
      });
    }
    return line;
  }).filter(line => line !== null).join('\n');
}

export function rewriteRetirementReferences(text, path, handles, deletedPaths, slugs) {
  const deleted = new Set(deletedPaths);
  if (path === 'mkdocs.yml') {
    return text.split('\n').filter(line => !handles.some(h => new RegExp(`:\\s*programs/${slugs[h]}/[a-zA-Z0-9_./-]+\\s*$`).test(line))).join('\n');
  }
  // These are authoritative upstream quotations, not independently maintained
  // listings. Never alter another program's public policy to remove a mention.
  if (path.endsWith('/public-scope.md') || path.endsWith('/scope.md')) return text;
  let next = text;
  if (['docs/programs/high-value.md', 'docs/programs/active.md'].includes(path))
    next = removeCuratedTargetListings(next, handles);
  if (path === 'docs/programs/current-public.md') {
    next = next.split('\n').filter(line => !handles.some(h => line.startsWith(`| \`${h}\` |`))).join('\n');
  }
  if (path === 'docs/programs/high-value.md') {
    next = next.split('\n').filter(line => !(line.startsWith('|') && handles.some(h => new RegExp(`https://hackerone\\.com/${h}(?:[\\s/|]|$)`).test(line)))).join('\n');
  }
  // Preserve surrounding human notes while removing links to deleted profiles.
  next = next.replace(/\[([^\]\n]+)\]\(([^\s)]+)\)/g, (match, label, destination) => {
    if (/^[a-z]+:|^\/\//i.test(destination)) return match;
    const clean = destination.split(/[?#]/)[0];
    let resolved = clean.startsWith('/') ? `docs/${clean.slice(1)}` : posix.normalize(posix.join(posix.dirname(path), clean));
    if (resolved.endsWith('/')) resolved += 'README.md';
    return deleted.has(resolved) ? label : match;
  });
  return next;
}

export async function prepareRetirementFiles(root, handles, { slugs, run, safePath }) {
  if (!Array.isArray(handles) || !handles.length || handles.length > 21 || new Set(handles).size !== handles.length ||
      handles.some(h => !Object.hasOwn(slugs, h) || !/^[a-z0-9_-]+$/.test(slugs[h]))) fail('INVALID_RETIREMENT_HANDLES');
  const tracked = run(root, 'git', ['ls-files', '-z', '--', 'docs', 'mkdocs.yml']).split('\0').filter(Boolean);
  if (tracked.length > 10000 || new Set(tracked).size !== tracked.length) fail('RETIREMENT_RESOURCE_LIMIT');
  const directories = handles.map(h => `docs/programs/${slugs[h]}/`);
  const removed = tracked.filter(path => directories.some(prefix => path.startsWith(prefix)));
  if (removed.length > 512) fail('RETIREMENT_RESOURCE_LIMIT');
  const files = []; let bytes = 0;
  for (const path of tracked) {
    if (!removed.includes(path) && path !== 'mkdocs.yml' && !path.endsWith('.md')) continue;
    const buffer = await readFile(await safePath(root, path));
    bytes += buffer.length; if (bytes > 32 * 1024 * 1024) fail('RETIREMENT_RESOURCE_LIMIT');
    const before = buffer.toString('utf8');
    if (!removed.includes(path) && !Buffer.from(before).equals(buffer)) fail('RETIREMENT_NON_UTF8_DOCUMENT');
    const after = removed.includes(path) ? null : rewriteRetirementReferences(before, path, handles, removed, slugs);
    if (after !== before) files.push({ path, before, after, hash: after === null ? null : digest(after), beforeHash: digest(buffer) });
  }
  return files;
}

export async function retirementSmoke(handles, { slugs, site, fetchImpl = fetch }) {
  for (const handle of handles) {
    for (const suffix of ['', 'public-scope/', 'scope/']) {
      const response = await fetchImpl(`${site}/programs/${slugs[handle]}/${suffix}`, { redirect: 'manual', headers: { 'cache-control': 'no-cache' }, signal: AbortSignal.timeout(20000) });
      await response.body?.cancel().catch(() => {});
      if (response.status !== 404 || response.redirected) fail('RETIREMENT_SMOKE_FAILED');
    }
  }
  const response = await fetchImpl(`${site}/programs/current-public/`, { redirect: 'error', headers: { 'cache-control': 'no-cache' }, signal: AbortSignal.timeout(20000) });
  if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) fail('RETIREMENT_SMOKE_FAILED');
  const reader = response.body.getReader(), chunks = []; let bytes = 0;
  for (;;) { const { value, done } = await reader.read(); if (done) break; bytes += value.byteLength; if (bytes > 2 * 1024 * 1024) { await reader.cancel(); fail('RETIREMENT_SMOKE_FAILED'); } chunks.push(value); }
  const html = Buffer.concat(chunks).toString('utf8');
  if (handles.some(h => html.includes(`${slugs[h]}/public-scope`))) fail('RETIREMENT_INDEX_STILL_LISTED');
  return true;
}
