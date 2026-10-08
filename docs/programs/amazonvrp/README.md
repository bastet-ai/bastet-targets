# amazonvrp

Public program information from [HackerOne](https://hackerone.com/amazonvrp).

<!-- bastet-public-scope-link:v1 -->
## Current public scope

[Verified public scope and policy](public-scope.md)

Historical research notes on this page are not verified authorization or current scope. Consult the linked public snapshot and the current HackerOne policy before testing.
<!-- /bastet-public-scope-link:v1 -->

## Notes & Intelligence

- **2026-10-07/08 — two service-side authorization advisories collected (unreviewed tier):** missing authorization checks in **Amazon Athena** engine version 3 request handling (CVE-2026-107352, GHSA-f7xp-x469-c8c2) and an authorization bypass through a user-controlled key in the optional **Amazon Q Business** Lambda hook (CVE-2026-105811, GHSA-r223-2773-wq4w). Recorded as source-backed public intel from the 2026-10-08 advisory sweep; both are unreviewed-tier mirrors — confirm against the live advisory and AWS service bulletins before relying on them. Hunting-read value: the Q Business record is another anchor for the standing user-controlled-key/parameter authz probe class (checklist 22 lineage) on managed services with customer-extensible hooks.
