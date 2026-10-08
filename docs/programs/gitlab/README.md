# GitLab Inc. - HackerOne Bounty Program

## Company Profile

**GitLab Inc.** is an American multinational software company that develops and maintains a web-based DevOps lifecycle tool providing Git repository management, issue tracking, continuous integration/continuous deployment (CI/CD), and software development collaboration features.

**Wikipedia**: https://en.wikipedia.org/wiki/GitLab

### Corporate Overview:
- **Founded**: 2011 by Dmitriy Zaporozhets and Valery Sizov (Ukraine)
- **Incorporated**: 2014 in Delaware, USA by Sid Sijbrandij
- **Headquarters**: San Francisco, California, USA
- **Employees**: ~2,000+ worldwide (2024)
- **CEO**: Sid Sijbrandij (Co-founder)
- **Public Company**: NASDAQ: GTLB (IPO: October 2021)

### Financial Profile (2024):
- **Market Cap**: ~$8 billion USD
- **Annual Revenue**: ~$650 million USD (2024)
- **Subscription Model**: Freemium SaaS with enterprise tiers
- **Customer Base**: 30+ million registered users
- **Enterprise Customers**: 50,000+ organizations

### Business Evolution & Key Milestones:
- **2011**: Created as open-source Git repository management
- **2013**: GitLab.com SaaS platform launched
- **2014**: Company incorporated, raised Series A ($1.5M)
- **2015-2020**: Rapid feature expansion, DevOps platform evolution
- **2021**: Public IPO on NASDAQ
- **2022-2025**: AI/ML integration, competitive positioning vs GitHub

### Key Products & Services:
- **GitLab SaaS**: Cloud-hosted DevOps platform
- **GitLab Self-Managed**: On-premises/private cloud deployment
- **GitLab.com**: Free public repository hosting
- **CI/CD Pipelines**: Integrated continuous integration/deployment
- **Security & Compliance**: SAST, DAST, dependency scanning
- **Issue Tracking**: Project management and collaboration tools

### Competitive Landscape:
- **Primary Competitor**: Microsoft GitHub (acquired 2018, $7.5B)
- **Differentiation**: All-in-one DevOps platform vs GitHub's ecosystem approach
- **Market Position**: #2 in Git-based source code management
- **Enterprise Focus**: Strong presence in regulated industries

---

## HackerOne Bug Bounty Program

**Program URL**: https://hackerone.com/gitlab  
**Primary Domain**: gitlab.com  
**Last Updated**: 2025-09-01  
**Risk Level**: 🟡 MEDIUM  

## Program Overview

GitLab operates a well-established bug bounty program for their DevOps platform. As a security-focused development tool company, GitLab maintains sophisticated security practices and demonstrates consistent engagement with researchers through smaller but regular bounty awards.

## Historical Activity (6-month window)

- **Total Payouts**: $600.00 (Rank #6)
- **Reports Resolved**: 12
- **Average Per Report**: $50.00
- **Activity Pattern**: Consistent monthly activity with smaller individual awards
- **Focus Areas**: DevOps pipeline security, source code management, CI/CD

## Attack Surface Analysis (2025-09-01)

### Discovered Infrastructure
- **Subdomains Identified**: 8 active subdomains
- **Live Web Services**: 12 responsive endpoints
- **Security Posture**: Well-hardened with professional security practices

### Key Subdomains
| Subdomain | Purpose | Security Notes |
|-----------|---------|---------------|
| `www.gitlab.com` | Main Platform | Primary GitLab application |
| `api.gitlab.com` | API Gateway | Well-protected API endpoints |
| `docs.gitlab.com` | Documentation | Technical documentation |
| `help.gitlab.com` | Support | Help and support resources |

### Security Analysis
- **Professional Hardening**: Fewer obvious misconfigurations detected
- **Standard Patterns**: Typical enterprise subdomain structure
- **Defensive Posture**: Evidence of mature security practices
- **Limited Exposure**: Minimal obvious attack surface

### Notable Characteristics
- **DevOps Focus**: Security-oriented development platform
- **Enterprise Grade**: Professional security implementation
- **Research Friendly**: Active engagement with security community
- **Continuous Improvement**: Regular updates and security enhancements

## Scope Snapshot (as of 2025-09-01)

See [scope.md](scope.md) for full policy text and breakdown.

### Key Focus Areas
- GitLab.com hosted service security
- Self-hosted GitLab instance vulnerabilities  
- CI/CD pipeline security
- Source code management features
- Container registry security

## Research Priorities

### Phase 1 - DevOps Pipeline Security
- [ ] CI/CD pipeline injection vulnerabilities
- [ ] Repository access control bypass
- [ ] Docker registry security assessment
- [ ] Secrets management analysis

### Phase 2 - Application Security
- [ ] Source code management vulnerabilities
- [ ] Issue tracking and project management
- [ ] User permission and role escalation
- [ ] Integration security (webhooks, APIs)

### Phase 3 - Infrastructure Security
- [ ] Self-hosted instance security
- [ ] Container security and isolation
- [ ] Network security and access controls
- [ ] Data protection and encryption

## Notes & Intelligence

- **Bounty policy update (published 2026-01-20)**: GitLab formalized testing guidance and scope boundaries — strongly recommends local GDK testing; production testing on GitLab.com requires test accounts created with the researcher's HackerOne email alias. **Application-layer DoS is now out of scope** except persistent total disruption via unauthenticated endpoints (ReDoS/logic-bomb exceptions considered). **Standalone prompt injection is out of scope**, but may be eligible when it serves as an initial vector achieving harm beyond its own security boundary. Enumeration-only findings remain out of scope; privacy breaches exposing confidential data are in scope. Practical read: Duo/AI-finding reports must demonstrate downstream harm (data/credential exposure), not prompt-injection alone; DoS-shaped GraphQL complexity findings likely ineligible. Source: https://about.gitlab.com/blog/gitlab-bug-bounty-program-policy-updates/

- **Security-First Culture**: Company culture emphasizes security best practices
- **Transparent Development**: Open-source approach to security improvements
- **Community Engagement**: Active participation in security research community
- **Regular Updates**: Frequent security patches and feature updates

### Recent Public Security Advisories

- **2026-10-07 — CSV-import Sidekiq DoS (CVE-2026-1403, CVSS 6.5, GHSA-6w5v-7h2v-438h, unreviewed tier)** — improper validation of CSV file structure on import lets an authenticated user cause denial of service to Sidekiq workers. Affected: CE/EE all versions from 11.7 before 18.8.9, 18.9 before 18.9.5, 18.10 before 18.10.3. **Hunting read: per the 2026-01-20 bounty-policy update, application-layer DoS is out of scope (except persistent total disruption via unauthenticated endpoints), so this is recorded as patch-posture/self-hosted-fingerprint intel, not a hunt vector. Weak-signal value only: the CSV-import path confirms user-upload parsing flows into Sidekiq job payloads — structural-validation gaps in import handlers remain a data-integrity/authz probe lane, not a DoS one.** Source: https://github.com/advisories/GHSA-6w5v-7h2v-438h (collected 2026-10-08 eighteenth sweep; confirm against live advisory).

- **2026-10-02 — GitLab AI Gateway RCE (CVE-2026-90970, CVSS 9.9, CWE-1336)** — an authenticated user with **Duo Agent Platform access** can escape the **prompt-template sandbox** of a custom flow via a specially crafted flow configuration, achieving **arbitrary command execution on self-hosted AI Gateway** instances. Fixed in gateway 19.2.4 / 19.3.2 / 19.4.1; affected range spans 18.1.6 through the 19.1 line (no fix for <19.2.4 on older lines) plus 19.3 <19.3.2 and 19.4 <19.4.1. GitLab.com / GitLab Dedicated / GitLab-hosted gateway are already protected; self-hosted gateway operators must patch — **no workaround listed**. Self-hosted gateways hold JWT signing keys and sit between the instance and AI model providers, so compromise cascades to AI-workflow auth tokens. CISA added an "exploitation: none" assessment on 2026-10-02; no public PoC as of 2026-10-03. Reported by HackerOne user `invisiblemeerkat`. **Hunting read: this is the second CWE-1336 template-engine sandbox escape in the same gateway/flow component (after CVE-2026-1868, 9.9, Feb 2026 — crafted flow definition → DoS/RCE). Two recurrences in one year make the Duo Agent Platform custom-flow template engine a priority probe surface: flow-configuration parsing, prompt-template injection, and sandbox boundary confinement on any AI-agent orchestration feature. Strengthens the standing AI-surface hypothesis on this program (Duo trace reads CVE-2026-92470 → GraphQL subscription deserialization CVE-2026-87719 → gateway template escape CVE-2026-90970: three consecutive waves where Duo/AI surfaces were the privileged path).** Sources: https://about.gitlab.com/releases/ (gateway security release 2026-10-02), NVD CVE-2026-90970 (CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:H), press coverage: BleepingComputer / realhacker.news / deafnews.it (all 2026-10-02/03).
- **2026-09-10/12 — Critical patch wave (19.3.2 / 19.2.6 / 19.1.8; backported 2026-09-23 to 19.0.9 / 18.11.12). Two headliners, both directly relevant to GitLab.com-adjacent hunting:**
  - **CVE-2026-85706 (CVSS 10.0, CISA KEV-listed 2026-09-11)** — unauthenticated arbitrary file read from the GitLab server via improper path confinement + missing authentication enforcement in the **repository commits API** (CE/EE ≥18.7 <18.11.12, <19.0.9, <19.1.8, <19.2.6, <19.3.2). KEV listing means active real-world exploitation. Hunting read: commit-log/path join points on repository APIs deserve auth-parity probing across route families and path canonicalization checks against server root. Source: https://github.com/advisories/GHSA-f47w-mrg9-g9p2 , https://www.cisa.gov/known-exploited-vulnerabilities-catalog
  - **CVE-2026-87719 (CVSS 9.9, EE-only)** — authenticated user **with Duo Chat access** obtains Advanced Search instance configurations and sensitive credentials via a crafted **GraphQL subscription argument** that bypasses serialization to perform server object lookup (≥18.3 <18.11.12, <19.0.9, <19.1.8, <19.2.6, <19.3.2). Second consecutive wave where an AI-assistant feature (after CVE-2026-92470's Duo trace reads) serves as an authorization proxy over a privileged data path — standing hypothesis: Duo/AI surfaces on GitLab.com warrant argument-deserialization and object-lookup confinement probes. Source: https://github.com/advisories/GHSA-prp4-5w2g-8v2c
  - Wave also included: GraphQL complexity-limiter DoS x2 (High), CI/CD protected-variable access via Scheduled Pipeline Execution Policy test (High, CVE-2026-79708), CI/CD env-var scope-matcher incorrect authorization (High), SAML SSO sign-in restriction auth flaw (Medium), Workhorse senddata credential exposure (Medium), Generic Package Registry missing authorization (Medium). Verified against live advisories + KEV catalog on 2026-10-02.
- **2026-09-24/29 — 11-record patch wave (19.2.7 / 19.3.3 / 19.4.1), incl. two CVSS 9.9 authenticated RCEs via user-authored regex in CI/CD config.** Integer overflow when compiling a specially crafted regex in a CI/CD configuration → arbitrary code execution on the server (9.9, CVE-2026-93577, GHSA-wqwg-376r-c226) and a double free when parsing a crafted regex in a CI/CD config → same sink (9.9, CVE-2026-89078, GHSA-9chr-4x58-948m). Also in the wave: 8.7 stored XSS via improper sanitization of path components in the MR diff viewer (CVE-2026-84739); 7.7 EE-only — **Duo AI troubleshooting feature exposed sensitive CI/CD variable values from debug-mode job traces due to missing authorization checks** (CVE-2026-92470) — an AI feature acting as an authorization-bypass proxy over an existing data path; remainder low/medium. Wave collected from the unreviewed advisory tier; descriptions verified against live advisories on 2026-10-01. **Recon/validation note: self-hosted instances ≥19.2 <19.2.7 that run CI with user-controlled regex (`.gitlab-ci.yml` rules, variables patterns) are a known-good validation target for the regex-compiler sink; the Duo/traces path is a standing authorization test on any AI-assistant feature that reads job artifacts. Also in-wave, newly named surface: the **GitLab MCP API** took two advisories (scope-enforcement incorrect authorization CVE-2026-92874, Medium; gitlab_search tool race condition CVE-2026-92628, Low) — MCP endpoints are a young surface on GitLab.com and warrant scope/token-boundary probes distinct from the REST/GraphQL equivalents.** Sources: https://github.com/advisories/GHSA-wqwg-376r-c226, https://github.com/advisories/GHSA-9chr-4x58-948m, https://github.com/advisories/GHSA-hrj5-qwx9-f2q7, https://github.com/advisories/GHSA-f2v3-pf6x-rw2j
- **2026-08-23 — Package Registry Path Traversal → RCE** (High). GitLab CE/EE: an authenticated user could achieve remote code execution via a path traversal in the package registry. Affected: 18.8 < 19.0.6, 19.1 < 19.1.4, 19.2 < 19.2.2. Durable attack-surface note: the package-registry stored-file and package-name canonicalization path is a testable boundary when a low-privilege account can influence package or artifact identifiers. Source: https://github.com/advisories/GHSA-2fpv-gqh2-qq5r (CVE-2026-10053)

### Technical Characteristics
- **Ruby on Rails**: Primary application framework
- **Microservices**: Modern distributed architecture
- **Container-Based**: Heavy use of Docker and Kubernetes
- **Git-Centric**: All functionality built around Git workflow

### Research Considerations
- **Complex Permissions**: Sophisticated role-based access control system
- **CI/CD Security**: Unique attack vectors in DevOps pipeline
- **Multi-Tenancy**: Isolation between different organizations/projects
- **Integration Points**: Extensive third-party integrations

---

**Last Enumeration**: 2025-09-01  
**Last Intel Review**: 2026-10-08 (CVE-2026-1403 CSV-import Sidekiq DoS added — patch-posture intel only, DoS out of scope per Jan-2026 policy; Backstage GitLab-ingestion identity-admission miss CVE-2026-106463 noted for self-hosted Backstage integrations)  
**Next Review**: 2026-11-01  
**Analyst**: Bastet Security Research Team

<!-- bastet-public-scope-link:v1 -->
## Current public scope

[Verified public scope and policy](public-scope.md)

Historical research notes on this page are not verified authorization or current scope. Consult the linked public snapshot and the current HackerOne policy before testing.
<!-- /bastet-public-scope-link:v1 -->
