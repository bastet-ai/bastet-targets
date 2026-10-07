# Public scope publishing

Each enabled campaign has a wiki-maintenance agent. The agent requests publication
of the campaign's current source hash. It cannot write prose, select a destination,
read other campaigns, hold Git/Cloudflare credentials, or run arbitrary commands.
A trusted-host publisher independently verifies HackerOne is still public,
re-fetches the complete anonymous scope, and requires an identical content hash.
Only that anonymous response is rendered. Authenticated scope snapshots, research
notes, findings and report drafts never enter this publishing pipeline.

Public program status does not authorize public disclosure of vulnerabilities.
This pipeline publishes public policy/scope only, not vulnerability evidence.

## Documents and provenance

Current snapshots live at `programs/<program>/public-scope/`. Human profile pages
receive a small link and a warning that their historical research notes do not
establish current scope. Existing `scope.md` and human sections are preserved
while the program remains public; the retirement policy below is the explicit
exception for a no-longer-public program's own directory.
After a verified publication, the exact generated-file content hash is recorded
in protected publisher state. Subsequent replacement requires that baseline to
match the current file byte-for-byte. A retained generated marker alone is never
sufficient: human edits, removal, or missing baseline cause a hold. README edits
outside the small managed link block remain untouched.

The source includes every current non-archived scope returned by the anonymous
HackerOne API, without filtering on bounty eligibility. Separate exclusions that
the anonymous API does not represent are explicitly marked unresolved; the
canonical HackerOne policy remains authoritative. A snapshot is not a testing
authorization. Its public source digest, fetch time and limitations are visible.

## Trusted-host configuration

Install locked dependencies with `npm ci`. Configuration must be an owner-only
JSON file outside this checkout. Never add an actual configuration to this repo.
It has these fields:

- `repositoryPath`: absolute path to the dedicated wiki checkout.
- `stateDirectory`: absolute owner-only directory outside the checkout.
- `databaseUrl`: credential-bearing PostgreSQL URL for the narrow publisher role.
  Do not use a database owner or research role. URL query parameters are normally rejected.
- `databaseCaPath` and `databaseServerName`: verified PostgreSQL TLS CA and name.
- `campaigns`: at most 21 fixed `{campaignId, handle}` mappings approved by the
  operator. These internal identifiers belong only in the protected configuration.

The default transport is verified TLS. One explicit exception is available for
the operator-managed local SSH database tunnel: set `databaseTransport` to
`ssh-loopback`, use exactly host `127.0.0.1`, port `6544`, dedicated login
`bastet_wiki_publisher_local`, and the single query parameter `sslmode=disable`.
Omit the CA/name fields in that mode. The existing SSH tunnel must be active and
have its remote identity verified by the operator. No other unencrypted address,
port, username, or URL options are accepted. This does not disable TLS globally.

The publisher role calls only `bastet_wiki` publication functions. It does not need
direct table grants or access to console/research tables. Credentials remain on
the trusted host. Existing HackerOne credentials stay in the local console;
anonymous wiki refresh does not use them or refresh the console's authenticated
scope snapshot.

## Initial reviewed publication

Run this from the clean approved integration branch after campaign agents have
requested proposals. The explicit limit permits initial onboarding only:

```sh
node scripts/wiki-publisher.mjs stage --config /absolute/private/publisher.json --limit 21
```

`stage` writes only the allowlisted generated scope file and its README link. It
does not Git-stage, commit, push, build, deploy, or mark anything published. Review
the exact diff, run tests/build, commit only reviewed public files, and publish
through the repository's normal approved workflow. A pending lease lasts 45
minutes: complete the reviewed initial release inside that window or reconcile
the expired proposal explicitly. Never silently extend or reclaim it.

After the approved release is on `main`, pushed, deployed and the checkout clean:

```sh
node scripts/wiki-publisher.mjs verify-staged --config /absolute/private/publisher.json
```

This rechecks file hashes, exact remote/main identity, current anonymous scope and
public page digests before recording publication receipts.

## Bounded maintenance

On the trusted host, schedule these commands using an operator-installed user
service/timer and the host's pinned Node executable:

```sh
node scripts/wiki-publisher.mjs refresh --config /absolute/private/publisher.json
node scripts/wiki-publisher.mjs publish --config /absolute/private/publisher.json
```

Example user units are in `deploy/bastet-wiki-publisher.service` and
`deploy/bastet-wiki-publisher.timer`. They use the pinned Node 24.19.0 installation,
the existing loopback database tunnel service, and owner-only configuration at
`~/.config/bastet-wiki/publisher.json`. Set its `stateDirectory` to
`~/.local/state/bastet-wiki` expanded to an absolute path. The service refreshes
anonymous sources, waits 60 seconds for campaign agents to request proposals,
then publishes one bounded batch. It starts 15 minutes after the user manager
starts and six hours after the previous invocation finishes. The host and user
manager must be running; this is not a cloud scheduler or an implied always-on
service. Installation/enabling is an explicit operator action, separate from
adding these example files to the repository.

`refresh` considers only the fixed configuration allowlist, at most 21 campaigns,
and updates only public wiki-source projections. Failed anonymous verification
invalidates publication availability. It does not fall back to authenticated data.
Agents observe a changed source hash and request new proposals on their next
poll. A timer can run more frequently for that handoff, but the publisher enforces
at most one completed maintenance batch per six hours across the instance. A
batch contains at most 21 changed campaign proposals and uses one commit and one
deployment, so all enabled campaigns can progress within the freshness window.

Automatic publication requires the exact `main` branch and
`https://github.com/bastet-ai/bastet-targets.git` fetch/push remote, a clean checkout,
a fast-forward-only refresh, an exclusive local lock and PostgreSQL advisory lock.
It checks each fresh anonymous source twice, builds, stages only the two
allowlisted paths per campaign, compares the remote head, commits, and pushes
without force. A private detached worktree of that exact commit is then created
under the external state directory. Locked dependencies are installed there and
the existing `npm run deploy` runs there, so concurrent edits to the normal
checkout cannot be included. Each public source digest is verified. Any unrelated
edit, remote advancement, symlink/path violation, changed public status/hash,
expired lease or failed public check stops the release.

The deployment checkout must have access to the pinned Wrangler credentials, but
the agent sandbox must not. Do not overlap manual deployment with this timer.
The normal GitHub workflow validates builds; it is not a second deploy mechanism.

## Failure and recovery

No success receipt is recorded until public verification passes. Once files might
have changed, interruption metadata is saved privately before each external phase.
Ambiguous failures remain held, even when the push or deployment may have worked.
There is no automatic lease reclamation, force push, rollback or ambiguous retry.
Branch protections are respected: a rejected push is held for the normal approved
review/merge process, never bypassed. Exact-commit deployment worktrees are retained
under the private state directory for operator-reviewed recovery and cleanup.

Pause the timer before reconciliation. Inspect the protected receipt, exact commit,
remote/main and public digest. Preserve any human edits and local generated
commit. Restore or complete the exact reviewed release through the normal operator
workflow; only then reconcile the held database proposal and private state. A
leftover lock after process death requires the same check before removing that
specific lock directory. Do not clear state simply to make the next cycle run.

## Removing no-longer-public programs

### Explicit operator retirement

The operator can also retire a still-public program whose rules do not fit this
research workflow. On 2026-10-07 the operator requested removal of Basecamp,
Sheer, and Ferrero. Their exact program directories and maintained target
listings were removed; this is not a claim that HackerOne removed those programs.

`scripts/lib/operator-exclusions.mjs` records the fixed handles `basecamp`,
`sheer_bbp`, and `ferrero`. Refresh invalidates their wiki sources without fetching
new content, proposal claims exclude their campaign identifiers, and proposal
validation and rendering reject them even if a stale configuration or proposal
remains. Readmission requires an explicit reviewed change to this exclusion list.
Historical notes in other documents and another program's authoritative policy
quotes are preserved. Deleted pages remain recoverable from Git history.

### Anonymous visibility retirement

The owner requires programs that are no longer publicly visible to be removed
from the deployed wiki. A separate visibility-only anonymous query distinguishes
recognized non-public states, a complete null-metadata stub, and an exact
structured `NOT_FOUND` response from transport failures and schema changes.
A null stub establishes only that the program is not publicly visible, not
whether it was made private or removed. Public programs with paused or disabled
submissions remain public; that status never authorizes testing.

Retirement requires two matching target reads bracketed by two successful reads
of a known-public control. The source is invalidated through the existing narrow
database function and the protected local state queues the handle for retirement.
Network failures, HTTP 429/5xx, malformed responses, unknown states, and generic
GraphQL errors only hold publication. They do not queue a deletion.

The next `publish` invocation prioritizes retirement over the six-hour content
update cap. It independently repeats visibility confirmation before preparation,
after building, and immediately before deployment. A clean, exact `main` checkout
is required. Only exact tracked files in the fixed allowlisted program directory
are deleted; its current-scope row and navigation references are removed. Links
in other human notes become plain labels without erasing those notes. Another
program's authoritative policy quotations are not altered. No path or prose from
an agent can choose what is deleted, and no recursive filesystem deletion is used.

Deletion/build/commit/push/deployment phases are journaled in private state. The
ordinary non-force compare-and-swap Git workflow and exact-commit deployment
remain mandatory. Completion requires real 404 responses for the old profile,
scope and generated-scope URLs, plus absence from the public scope directory.
A failed or ambiguous phase holds for operator review. Git history preserves
recovery; this does not purge prior public Git history or third-party caches.

A retired program stays blocked from automatic restoration even if it becomes
public later. An operator must review its current scope and explicitly approve
readmission. The old sitemap/HTML-metadata crawler's publication entrypoint is
disabled because cached metadata alone could reintroduce removed listings.

### Public listing cleanup, 2026-10-06

The retirement change removes seven stale target listings after repeated anonymous
HackerOne visibility checks with known-public controls. Six returned complete
not-publicly-visible metadata stubs; one returned a structured not-found response.
The unavailable program profile and legacy crawler record are removed, while the
16 independently verified public scope pages remain. No private program content
or authenticated scope data was used in this cleanup. Removed tracked pages remain
recoverable in Git history; they are not retained as deployed archive pages.

The release includes regression tests for transient failures, malformed responses,
public-but-paused programs, scoped deletions, curated name-only recommendations,
inline target lists, immutable deployment verification, and interrupted recovery.
