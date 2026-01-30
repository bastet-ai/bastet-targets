# High-Value Targets (Prioritized Programs)

This list highlights programs with the highest recent bounty payouts, prioritized for focused research. Rankings are based on aggregated HackerOne hacktivity for the 6-month window 2025-03 to 2025-08.

Last updated: 2025-09-01

## Top Programs (last 6 months)

| Rank | Program | Total Payout | Reports | Program Page |
| ---- | ------- | -----------: | ------: | ------------ |
| 1 | Uber | $20,340.00 | 24 | https://hackerone.com/uber |
| 2 | Eternal | $9,300.00 | 12 | https://hackerone.com/eternal |
| 3 | OKG | $7,500.00 | 6 | https://hackerone.com/okg |
| 4 | TikTok | $6,000.00 | 12 | https://hackerone.com/tiktok |
| 5 | Sheer | $900.00 | 6 | https://hackerone.com/sheer_bbp |
| 6 | GitLab | $600.00 | 12 | https://hackerone.com/gitlab |
| 7 | PayPal | $600.00 | 6 | https://hackerone.com/paypal |
| 8 | Ferrero | $0.00 | 30 | https://hackerone.com/ferrero |
| 9 | MediaTek | $0.00 | 24 | https://hackerone.com/mediatek |
| 10 | Zooplus | $0.00 | 18 | https://hackerone.com/zooplus |

## Strategic High-Value Additions

| Program | Priority | Reason | Program Page |
| ------- | -------- | ------ | ------------ |
| **Coinbase** | 🚨 **CRITICAL** | Major crypto exchange, $50K+ critical bounties, 519 subdomains discovered | https://hackerone.com/coinbase |

## Historical Notes (recent activity)

- **Uber**: Consistent “BountyAwarded” activity during 2025-03..2025-08 with multiple awards per month.
- **Eternal**: Frequent awards in late August; steady reporter engagement.
- **OKG**: Notable award spikes mid-to-late August 2025.
- **TikTok**: Regular bounty activity; multiple awards in August 2025.
- **Sheer**: Lower absolute payouts but steady cadence of awards.
- **GitLab**: Smaller individual awards; consistent monthly activity.
- **PayPal**: Intermittent awards, including early September.
- **Ferrero/MediaTek/Zooplus**: High volume of resolved activity; limited public award amount exposure.

## Program Quality Signals (Community/Operational Heuristics)

When two programs pay similar amounts, “program quality” often dominates expected value. Signals that repeatedly show up in community discussions:

- **Clear impact standards (esp. for Blind SSRF / OAST findings):**
  - Programs that **document what evidence they accept** (e.g., DNS/HTTP callbacks, timing-based internal reachability, status-code differentials, header leaks) reduce report churn.
  - Watch for programs that require **data exfiltration only** for SSRF; this can be a time sink unless you can safely demonstrate higher impact.
  - Bonus signal: they explicitly recognize **internal network mapping / WAF-bypass-by-proxy / protocol pivot proofs** as meaningful impact when exfiltration is unsafe or impractical.
- **Fair, consistent triage:**
  - Low “Informative / N/A” rates for valid vuln classes and predictable severity mapping.
  - Willingness to **engage on nuance** (business logic, chains, internal reachability) rather than rubber-stamping.
- **Fast feedback loop:**
  - Reasonable response SLAs, low ghosting, and credible mediation outcomes.
- **Duplicate pressure vs. depth:**
  - Programs with heavy “spray-and-pray” tooling overlap can have high duplicate rates; higher EV often comes from programs where **manual, product-understanding bugs** (logic, authZ, SSRF, cache poisoning/desync edge cases) are rewarded.
  - Community meta-signal: if hunters consistently report success with a “lighter” stack (proxy + notes + targeted automation) it often correlates with programs where *understanding workflows* beats running scanners.
- **Scope quality:**
  - Modern asset inventory (well-defined subdomain patterns, APIs, mobile, integrations) and explicit third-party boundaries.
- **Disclosure and learning culture:**
  - Public write-ups / hacktivity that show **interesting classes being rewarded** (authZ, SSRF, desync, supply-chain) is a strong indicator the program pays for real risk.
- **Remediation posture (especially VDPs):**
  - Some high-signal targets (e.g., government VDPs) can have **very long remediation timelines**. Great for reputation/impact, but low expected value if you’re optimizing for payout/velocity.
- **“Contribution surface” / CI-CD exposure:**
  - Community write-ups about exploits starting from **PR comments, CI pipelines, webhooks, integrations, or supply-chain touchpoints** are a signal to prioritize programs where those surfaces are in-scope (often higher severity, lower duplicate pressure).

## Next Steps

- Review each program page and policy for current scope and exclusions
- Start or update program documentation directories using the templates
- Track changes to scope over time (dated entries)
