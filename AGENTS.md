# Targets wiki operating boundaries

This repository is public. Do not commit credentials, private program details,
internal campaign identifiers, agent configuration, research evidence, or
undisclosed vulnerabilities. A public bounty program does not make its findings
public. Treat existing historical reconnaissance as unverified until separately
reviewed; it is not authorization to test a target.

The current scope publisher is deliberately deterministic. Its only text input is
an independently re-fetched anonymous HackerOne public projection. Guests request
an immutable source hash through a narrow PostgreSQL function; guests cannot
choose paths, author Markdown, push Git, deploy, or access publication credentials.

- Preserve human-authored pages and sections. Generated current scope lives in
  `docs/programs/<allowlisted-slug>/public-scope.md`.
- Do not hand-edit generated scope documents. Correct the public source or the
  renderer. The README link block is publisher-managed; everything else remains
  human-owned.
- The owner requires removal of programs that cease to be publicly visible.
  Retirement is the explicit exception to preservation of a program's own
  directory: delete only exact tracked files beneath its fixed allowlisted slug,
  after repeated anonymous visibility checks bracketed by public controls.
  Remove its maintained listing/navigation links, preserve other human notes and
  other programs' authoritative policy quotations. Keep Git history recoverable.
  Network, schema and generic API errors are holds, never deletion evidence.
- An explicit operator retirement can remove a still-public program. The fixed
  exclusions in `scripts/lib/operator-exclusions.mjs` prevent publication and
  refresh from recreating Basecamp, Sheer, and Ferrero. Keep that decision in
  force until the operator explicitly approves readmission; public visibility
  alone does not reverse it.
- Before publication, reconcile the current remote branch without force. Never
  publish arbitrary dirty files or erase work to make a checkout clean.
- Use the existing pinned build/deploy scripts. Run
  `node --test scripts/test/*.test.mjs` and `npm run build` for relevant changes.
- Cloudflare Workers Builds owns production deployment after a push to `main`.
  The trusted-host publisher waits for the exact public build marker and never
  deploys locally. Do not overlap a manual deployment with Git deployment.
  Update the stopped trusted-host checkout before restarting an older publisher;
  its loaded Node modules do not change during a fast-forward inside a cycle.
- Successful deployment commands alone are not proof: verify the public page's
  source digest before recording a publication receipt.
- Keep publisher configuration, credentials, leases, state and recovery records
  outside the repository, in owner-only files/directories.

See [publisher operations](docs/wiki-publishing.md) for lifecycle and recovery.
