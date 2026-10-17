# amazonvrp

Public program information from [HackerOne](https://hackerone.com/amazonvrp).

<!-- bastet-public-scope-link:v1 -->
## Current public scope

[Verified public scope and policy](public-scope.md)

Historical research notes on this page are not verified authorization or current scope. Consult the linked public snapshot and the current HackerOne policy before testing.
<!-- /bastet-public-scope-link:v1 -->

## Notes & Intelligence

- **2026-10-07/08 — two service-side authorization advisories collected (unreviewed tier):** missing authorization checks in **Amazon Athena** engine version 3 request handling (CVE-2026-107352, GHSA-f7xp-x469-c8c2) and an authorization bypass through a user-controlled key in the optional **Amazon Q Business** Lambda hook (CVE-2026-105811, GHSA-r223-2773-wq4w). Recorded as source-backed public intel from the 2026-10-08 advisory sweep; both are unreviewed-tier mirrors — confirm against the live advisory and AWS service bulletins before relying on them. Hunting-read value: the Q Business record is another anchor for the standing user-controlled-key/parameter authz probe class (checklist 22 lineage) on managed services with customer-extensible hooks.
- **2026-10-15 — Amazon Neptune Gremlin deserialization RCE advisory (critical tier):** GHSA-6rrf-xw64-h782 / CVE-2026-110812, CVSS 9.9 (CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H). Deserialization of untrusted data in the **Gremlin graph data import** component of the Neptune engine; an authenticated remote actor with *standard database permissions* can reach arbitrary code execution and **internal service credential access**. Fix: engine 1.5.0.0 (backports to 1.4.8.x and 1.4.7.x); AWS bulletin [2026-136-AWS](https://aws.amazon.com/security/security-bulletins/2026-136-aws/) verified live 2026-10-17. Collected via the 2026-10-14 unreviewed-tier advisory sweep — a managed-service authz-boundary case: low-priv DB user → cross-boundary impact (scope-change to service credentials), same lineage as the Q Business user-controlled-key anchor above. Hunting-read value: import/parse paths on customer-supplied graph data are a live RCE + credential-theft surface even behind standard auth.
- **2026-10-11 — program-status verification (public page re-check).** Read-verified against the public program page: **paid bounty program** with a published reward table in the **$500–$30k** range and **Fast Payment** participation. Triage bar is mature — expect strict duplication and quality screening. Page also confirms the program remains publicly visible. Generated [public-scope.md](public-scope.md) stays authoritative for scope.
