# Operations notes

## 2026-10-09: native Cloudflare Git deployment

The Cloudflare GitHub app is installed for the approved Bastet repositories.
Workers Builds settings were verified in the dashboard for
`bastet-ai/bastet-targets`: production `main`, root `/`, build `npm run build`,
deploy `npx wrangler deploy`, all paths included, other branch builds disabled,
and no build variables or secrets. Deployment credentials remain in Cloudflare;
GitHub Actions continues validation and artifact retention.

The trusted-host publisher previously pushed `main` and then directly ran
Wrangler from a private release worktree. Its deployment adapter now waits for
the exact pushed SHA in the public `/.well-known/bastet-build.json` asset, emitted
after the strict build with only schema version and public commit SHA. The marker
has `Cache-Control: no-store`. Waiting is bounded to 20 minutes with 15-second
polls and 20-second request deadlines. Missing/stale markers and temporary
network/server failures are pending; invalid evidence or timeout holds the
publication and preserves its pushed interruption journal. Existing source
hashes, leases, allowlists, remote drift, public digest and real retirement 404
checks remain required before recording receipts. No local deployment or new
Cloudflare credentials are used by the publisher.

Read-only checks found the installed local service and timer both inactive, with
no running publisher PID. Their configured checkout is
`%h/projects/bastet-targets`, which was clean on `main` at
`947247032d46228db8dcc81f85d814025f82d0cd` and still had the old adapter.
Keep the units inactive while fast-forwarding that checkout to this migration
and installing locked dependencies. A running older Node process keeps its old
imports even if its checkout updates inside a cycle. Preserve protected state
and old release worktrees; restart only from the updated checkout after native
build and public marker verification.

Validation: all 55 Node tests pass, including exact commit waiting, stale/failed
deployment timeout, malformed/oversized marker rejection, source drift, holds
and absence of local deployment. The strict build passes, emits the exact local
Git SHA and copies the marker's header rule. Wrangler 4.145.0 deployment dry run
passes with 166 asset files and no bindings. The migration commit has not yet
been pushed. Local Wrangler HTTP verification returned 200, `application/json`,
`Cache-Control: no-store`, and the exact checkout SHA; the native wait adapter
accepted that real asset response. A Git-triggered production build and public
marker/digest/404 smoke checks remain pending.
