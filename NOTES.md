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
The clean checkout was fast-forwarded
to `547b244303209948d5e5cea4517ef83dec8c393d`. Locked dependencies were installed
with lifecycle scripts disabled, and all 55 tests passed there. Both service and
timer remain inactive; no maintenance cycle was started. Protected state and old
release worktrees remain preserved. Before any future restart, reconcile the
stopped checkout with current `main`. A running older Node process keeps its old
imports even if its checkout updates inside a cycle.

Validation: all 55 Node tests pass, including exact commit waiting, stale/failed
deployment timeout, malformed/oversized marker rejection, source drift, holds
and absence of local deployment. The strict build passes, emits the exact local
Git SHA and copies the marker's header rule. Wrangler 4.145.0 deployment dry run
passes with 166 asset files and no bindings. Local Wrangler HTTP verification
returned 200, `application/json`,
`Cache-Control: no-store`, and the exact checkout SHA; the native wait adapter
accepted that real asset response.

Initial production validation completed for
`547b244303209948d5e5cea4517ef83dec8c393d`: pushing `main` automatically triggered
Cloudflare build `78de894e-4238-4f0b-bf4e-043f0a50c5ff`, which succeeded and
published Worker version `35c46693-2dc2-4f94-babf-f0120fd3eb04`. GitHub validation
also succeeded. The public build marker returned 200 with that exact SHA and
`Cache-Control: no-store`. Credential-free public HTTPS checks passed for the
homepage, current-public page, canonical URLs, trailing-slash redirect, linked
CSS, search index (976 entries), and a genuine missing-path 404. This verifies
the initial Git-triggered hosting migration; each later publisher receipt still
requires its own source-digest or retirement checks.
