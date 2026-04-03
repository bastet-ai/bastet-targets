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

### Newly Interesting Public HackerOne Targets (2026-03-31 scan)
These showed up again in the public HackerOne program page as especially worth a closer look:
- **1Password** — creative/manual research is explicitly favored; scanners are unlikely to help.
- **Akamai** — CDN/origin/proxy trust boundaries; soft-launch / invite-only posture.
- **Airbnb** — huge real-world workflow surface; strong fit for authZ, recovery, and trust-boundary chains.
- **Airlock Secure Access Hub** — WAF + IAM stack protecting 30k+ apps; edge and identity bugs can be high impact.
- **Amazon Vulnerability Research Program** — broad surface with mature triage expectations.
- **Anduril Industries** — reproducible reports and structured disclosure language suggest higher signal.
- **Atlassian** — large enterprise SaaS surface with frequent workflow/auth complexity.

### Program-quality cue from community chatter (2026-04-02)
- April 2 Reddit chatter reinforced that triage transparency and contradiction handling matter more than raw payout numbers. Favor programs that explain duplicate or “informative” closures, preserve context, and don’t silently patch while refusing mediation.
- Community distrust itself is a selection signal: when hunters start talking about boycotts, duplicate gaming, or reward leakage, treat that as a durable warning that the program’s process quality may be degrading even if the technical surface is still interesting.
- AI/agent tooling programs should be weighted higher when they expose behavior-validation surfaces like sub-agents, retrieval, browser extensions, or tool-calling, because the high-EV bugs now live in state drift and wrong-tool execution as much as in prompt text.
- Governance and browser-side mediation products are now a separate EV bucket: if a target’s value depends on observing or constraining user prompts, shadow-AI usage, or policy-bypass paths outside inline controls, score it higher than an ordinary SaaS with similar payout tables.
- Build/release and dependency-provenance boundaries keep showing up in public incidents; if a program owns its own delivery pipeline or agent framework updates, treat patch cadence and version guidance as part of program quality.
- Fairness for hard-to-demo classes is a selection signal in its own right: programs that clearly accept blind SSRF/OAST, authZ edge cases, cache poisoning, or desync-style evidence tend to have better ROI than programs that demand unsafe max-exploit proof.

### Program-quality cue from community chatter (2026-03-31)
- AskNetsec’s latest agent-validation discussion is another reminder that AI/tooling programs should be scored higher when they expose browser extensions, retrieval, sub-agents, or tool-calling flows. The EV is in behavior drift and policy bypass across alternate paths, not just prompt text visibility.


| Program | Priority | Reason | Program Page |
| ------- | -------- | ------ | ------------ |
| **Coinbase** | 🚨 **CRITICAL** | Major crypto exchange, $50K+ critical bounties, 519 subdomains discovered | https://hackerone.com/coinbase |
| **1Password** | 🔥 **HIGH** | Public page explicitly asks for creative researchers; scanners are unlikely to help, which usually means higher manual-EV surface | https://hackerone.com/1password |
| **Akamai** | 🔥 **HIGH** | Public soft-launch / invite-only posture focused on CDN/origin/proxy-layer trust boundaries | https://hackerone.com/akamai |
| **Airlock Secure Access Hub** | 🔥 **HIGH** | WAF + IAM platform protecting 30k+ apps; complex auth and edge paths tend to pay off | https://hackerone.com/airlock |
| **Airbnb** | 🔥 **HIGH** | Massive real-world workflow surface plus rich public disclosure history; strong candidate for authZ, recovery, and trust-boundary chains | https://hackerone.com/airbnb |
| **Amazon VRP** | 🔥 **HIGH** | Broad product surface with explicit reporting program and mature security posture; worth prioritizing for deep, chain-based testing | https://hackerone.com/amazonvrp |
| **Anduril Industries** | 🔥 **HIGH** | Explicit reproducibility expectations and a mature disclosure policy suggest structured triage and higher-value operational/defense surfaces | https://hackerone.com/anduril_industries |
| **Atlassian** | 🔥 **HIGH** | Large enterprise software surface with frequent releases and plenty of auth/workflow complexity | https://hackerone.com/atlassian |
| **Basecamp** | 🔥 **HIGH** | Publicly values researcher insight and pays for quality; workflow-heavy SaaS tends to reward careful manual work | https://hackerone.com/basecamp |


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
