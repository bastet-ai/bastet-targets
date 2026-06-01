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

### Operator-quality cue from public advisories (2026-05-31)

- Fission `GHSA-3g33-6vg6-27m8` / `CVE-2026-46614` and `GHSA-85g2-pmrx-r49q` / `CVE-2026-46617` add serverless/runner scoring cues: public-vs-internal invocation routes, function-name enumeration, trigger policy enforcement, per-container service-account isolation, automount defaults, declared-secret allowlists, and namespace RBAC minimization are high-value boundaries when serverless, workflow, or agent-execution platforms are in scope. Sources: https://github.com/advisories/GHSA-3g33-6vg6-27m8, https://github.com/advisories/GHSA-85g2-pmrx-r49q
- MCP Registry `GHSA-95c3-6vvw-4mrq` / `CVE-2026-44428` adds a registry/publisher OIDC cue: GitHub Actions tokens must be bound to the specific registry/control-plane audience, not just a shared product audience. Score CI publisher flows, package/plugin registries, namespace ownership checks, token replay defenses, and publish-audit logs accordingly. Sources: https://github.com/advisories/GHSA-95c3-6vvw-4mrq, https://github.com/modelcontextprotocol/registry/security/advisories/GHSA-95c3-6vvw-4mrq
- Sentry Python SDK `GHSA-g92j-qhmh-64v2` / `CVE-2024-40647` adds an observability/automation secret-boundary cue: instrumentation can change subprocess environment behavior. For Python CI, agents, and developer tooling, raise priority when subprocess wrappers, SDK monkeypatching, environment allowlists, and proofs that child tools do not inherit secrets are in scope. Sources: https://github.com/advisories/GHSA-g92j-qhmh-64v2, https://github.com/getsentry/sentry-python/security/advisories/GHSA-g92j-qhmh-64v2
- CVE-2026-29023 / GHSA-qrvr-jqxg-65rv adds a concrete Shannon control-plane scoring signal: a hard-coded router API key meant a reachable router component could authenticate with public static key material and proxy requests using the victim's configured upstream provider credentials. For AI security-testing programs, raise priority when their scope includes router/control-plane exposure, per-instance key generation and rotation, upstream LLM/API credential scoping, default localhost binds, proxy logging, and safe deployment documentation. Do not publish or reuse any static key material. Sources: https://github.com/advisories/GHSA-qrvr-jqxg-65rv, https://nvd.nist.gov/vuln/detail/CVE-2026-29023, https://www.vulncheck.com/advisories/keygraph-shannon-hard-coded-router-api-key
- The mitigating Shannon commit `023cc95` also names adjacent high-EV seams: Docker service port binding, MCP subprocess environment inheritance, Playwright MCP dependency pinning, host IPC removal, prompt-template include traversal guards, and untrusted-repository prompt-injection warnings. Source: https://github.com/KeygraphHQ/shannon/commit/023cc953db742602964b7826105278d15c28a420
- A public Shannon issue and current Dockerfile add another runner-sandbox cue: global `git safe.directory '*'` trust overrides can weaken repository ownership checks when arbitrary third-party repos are cloned for analysis. For AI/code-runner programs, raise priority when scope includes repository ingestion, per-job filesystem isolation, safe-directory allowlists, and hardening of Git/workspace trust boundaries. Sources: https://github.com/KeygraphHQ/shannon/issues/316, https://github.com/KeygraphHQ/shannon/blob/main/Dockerfile
- Shannon issue #339 adds a reliability/scoping cue for AI-pentesting products: model/provider safety filters can block the exploit phase on authorized attack-payload prompts even when earlier recon phases succeed. Raise priority when programs document provider support, payload-safe validation modes, fallback routing, and logs that distinguish model-policy blocking from target-side evidence. Source: https://github.com/KeygraphHQ/shannon/issues/339
- A May 31 GitHub Advisory batch for Aider 0.86.3 adds a coding-agent target cue: pre-commit hook enforcement, architect/editor execution paths, generated-code sinks, and API-documentation fetchers/metadata blocking are all bounty-relevant local workflow boundaries when AI developer tools are in scope. Sources: https://github.com/advisories/GHSA-c3wr-3c4v-6rmh, https://github.com/advisories/GHSA-7w7m-v5vp-w699, https://github.com/advisories/GHSA-f9g4-qjmq-f49r, https://github.com/advisories/GHSA-hchg-qm84-cj9p
- A May 29 GitHub Advisory batch for PraisonAI adds a broader AI-agent platform cue: default JWT signing secrets, unauthenticated sample-agent/tool execution, MCP workflow file reads, code-execution sandbox escape, and prompt URL-fetch behavior are all high-EV boundaries when agent platforms or local workflow automation are in scope. Sources: https://github.com/advisories/GHSA-3qg8-5g3r-79v5, https://github.com/advisories/GHSA-vg22-4gmj-prxw, https://github.com/advisories/GHSA-9cr9-25q5-8prj, https://github.com/advisories/GHSA-4mr5-g6f9-cfrh, https://github.com/advisories/GHSA-5cxw-77wg-jrf3
- Git LFS `GHSA-6pvw-g552-53c5` / `CVE-2025-26625` adds a repository-materialization cue for developer-tool and AI-code-agent targets: untrusted repo imports, LFS checkout/pull behavior, symlink/hard-link collision handling, protected-path writes, bare-repository handling, and per-job workspace isolation are all bounty-relevant when local workflow tooling is in scope. Source: https://github.com/advisories/GHSA-6pvw-g552-53c5
- LMDeploy `GHSA-6w67-hwm5-92mq` / `CVE-2026-33626` adds a multimodal-inference SSRF cue: image/document URL fetchers, cloud metadata blocking, loopback/private-CIDR normalization, default API auth, inference-network segmentation, model-server IAM scoping, and fast patch SLAs are high-value boundaries when AI inference or agent platforms are in scope. CSA's May 2026 note says exploitation followed public disclosure within roughly 12 hours, so treat model-serving patch cadence as part of program quality. Sources: https://github.com/advisories/GHSA-6w67-hwm5-92mq, https://nvd.nist.gov/vuln/detail/CVE-2026-33626, https://labs.cloudsecurityalliance.org/research/csa-research-note-lmdeploy-cve-2026-33626-ai-inference-explo/
- LMDeploy `GHSA-9xq9-36w5-q796` / `CVE-2026-46517` and `GHSA-m549-qq94-fvhg` / `CVE-2026-46432` add a model-loading trust cue: hard-coded `trust_remote_code=True` means model initialization can cross from artifact parsing into code execution. For inference/model-serving programs, raise priority when scope covers model-source allowlists, explicit remote-code opt-in, signed artifacts, sandboxed loaders, least-privilege runner users, and model provenance audit logs. Sources: https://github.com/advisories/GHSA-9xq9-36w5-q796, https://github.com/advisories/GHSA-m549-qq94-fvhg
- FastGPT `CVE-2026-44286` and `CVE-2026-44284` add an AI-agent workflow SSRF cue: URL fetchers in workflow nodes, MCP tool server URLs, stored configuration validation, preview/save/execution parity, metadata and loopback blocking, and workflow-runner egress controls are high-value boundaries when agent platforms or MCP-adjacent systems are in scope. Sources: https://nvd.nist.gov/vuln/detail/CVE-2026-44286, https://nvd.nist.gov/vuln/detail/CVE-2026-44284, https://github.com/labring/FastGPT/security/advisories/GHSA-xpx6-xcpf-76qg, https://github.com/labring/FastGPT/security/advisories/GHSA-cxxj-99f7-f5wq
- The broader May 29 PraisonAI Platform advisory batch adds a multi-tenant agent-platform cue: owner promotion, member removal, cross-workspace object/label/dependency access, activity-log exposure, arbitrary file write, and default unauthenticated API deployment all point to role-transition and workspace-ownership boundaries worth prioritizing when safe negative testing is explicitly allowed. Sources: https://github.com/advisories/GHSA-c2m8-4gcg-v22g, https://github.com/advisories/GHSA-w388-2392-px73, https://github.com/advisories/GHSA-5jx9-w35f-vp65, https://github.com/advisories/GHSA-4x6r-9v57-3gqw, https://github.com/advisories/GHSA-h37g-4h4p-9x97, https://github.com/advisories/GHSA-6h6v-6m7w-7vxx, https://github.com/advisories/GHSA-h8q5-cp56-rr65, https://github.com/advisories/GHSA-27p4-pjqv-whgj, https://github.com/advisories/GHSA-gv23-xrm3-8c62, https://github.com/advisories/GHSA-hvhp-v2gc-268q, https://github.com/advisories/GHSA-8444-4fhq-fxpq
- Additional PraisonAI advisories from the same May 29 batch add target cues for agent-call servers and helper tooling: unauthenticated call-server operations when a token is unset, spider-tool SSRF canonicalization gaps around alternate loopback host encodings, and dynamic module execution in generated-agent workflows. Raise priority when programs place call-server auth defaults, loopback/metadata URL normalization, dynamic import/plugin governance, and generated-agent pipeline isolation in scope. Sources: https://github.com/advisories/GHSA-86qc-r5v2-v6x6, https://github.com/advisories/GHSA-5c6w-wwfq-7qqm, https://github.com/advisories/GHSA-78r8-wwqv-r299
- The stigmem-node advisory set adds a federated AI-memory cue: peer-registration approval, mTLS/non-loopback defaults, plugin-signature override controls, and storage namespace handling are worth prioritizing when a program exposes agent memory, federation, plugin loading, or MCP-adjacent infrastructure to authorized testing. Sources: https://github.com/advisories/GHSA-9vp8-3hmv-8fgh, https://github.com/advisories/GHSA-jmfc-hfjq-pxcp, https://github.com/advisories/GHSA-w7pm-9g55-mxfm, https://github.com/advisories/GHSA-9pc9-4crj-mhpj
- A June 1 catch-up scan of April public advisories adds another AI-agent control-plane cue: event streams, agent instruction previews, approval allow-lists, and agent/API-key management routes need explicit authentication, tenant ownership checks, and default-deny deployment posture. Sources: https://github.com/advisories/GHSA-f292-66h9-fpmf, https://github.com/advisories/GHSA-pm96-6xpr-978x, https://github.com/advisories/GHSA-4wr3-f4p3-5wjh, https://github.com/advisories/GHSA-3xx2-mqjm-hg9x

### Operator-quality cue from public releases (2026-05-29)
- Agentic-pentesting targets just gained a sharper scoring signal from KeygraphHQ/Shannon v1.4.0: authenticated preflight sessions can be shared across agents, `/etc/hosts` entries are forwarded into worker containers, and `fast-uri` was bumped for CVE-2026-6321. For AI security-testing programs, raise priority when their scope includes session custody between preflight and exploitation agents, runner cookie/token isolation, worker-container DNS/hosts behavior, URL parser boundaries, metadata/local-network blocking, and dependency patch cadence. Sources: https://github.com/KeygraphHQ/shannon/releases/tag/v1.4.0, https://github.com/KeygraphHQ/shannon/commit/7813baf16a9ca6ff76a8fcbd42cafdd84c0726dd, https://github.com/KeygraphHQ/shannon/commit/35f59f30f6a36676627ee44d7c23487e6d570b1b, https://github.com/KeygraphHQ/shannon/commit/8f5d639f0d95ce29be918c81fb3f35d73e25d671

### Operator-quality cue from public releases (2026-05-27)
- Continuous agentic-pentesting products deserve an explicit watchlist bucket when their scope includes source-code ingestion, exploit execution, auth preflights, network egress checks, or local/container runner setup. KeygraphHQ/Shannon describes itself as an autonomous white-box AI pentester for web apps and APIs; its v1.3.0 release added auth-validation/email-login preflight support, blocked cloud metadata ranges in target URL checks, and hardened global npm installs with `--ignore-scripts`. Those are useful public signals for scoring AI security-testing targets: prioritize programs that document runner sandboxing, credential handling, target allow/block rules, and dependency-install boundaries. Sources: https://github.com/KeygraphHQ/shannon, https://github.com/KeygraphHQ/shannon/releases/tag/v1.3.0

### Operator-quality cue from public advisories/research (2026-05-20)
- AI coding-agent and workspace-edit products deserve a sharper EV bucket after Hacktron's VS Code Copilot `applyPatchTool` TOCTOU writeup: prioritize programs where issue/PR-to-agent automation, exact-effect approval, protected-path writes, Codespaces/dev-token exposure, or repository-control-file policies are in scope. Source: https://www.hacktron.ai/blog/rce-in-vscode-copilot
- Identity federation disable/revoke paths are high-value when in scope. The May 20 Keycloak SAML broker advisory reinforces that “disabled IdP” must be enforced at every assertion/session-minting entrypoint, not just in admin UI discovery. Source: https://github.com/advisories/GHSA-x4p7-7chp-64hq
- Developer control planes and automation glue are still underpriced target surface: Rclone RC, MLflow model serving, setup-php workflows, Diffusers `trust_remote_code`, and project-local LLM filters all show how tooling defaults can cross command, tenant, or trust boundaries.
- JWT algorithm confusion and tenant-null authorization collapse remain practical identity seams. Prefer programs that explicitly include SSO, VPN/CAS, tenant/workspace administration, or support tooling in scope and allow safe negative testing.

### Program-quality cue from community chatter (2026-04-04)
- Triage trust is still the strongest quality signal. Fresh Reddit chatter about boycotts, repeated N/A closures, and reward leakage reinforces that process quality can outweigh raw payout tables.
- AI governance / browser-control products deserve their own EV bucket. If a program’s value depends on observing prompts, shadow-AI use, or policy enforcement across browser-side and alternate data paths, score it higher than a generic SaaS with the same payout range.
- Supply-chain and release-provenance boundaries remain high-value. Public chatter around Cisco/Trivy and Adobe support compromise is another reminder that build pipelines, third-party support paths, and dependency trust are real attack surfaces when in scope.
- Metrics-minded teams care about evidence that maps to actual risk reduction. Programs that define acceptable proof, remediation metrics, and re-validation criteria tend to be easier to work with and to profit from.
- April 2’s heuristics still stand: prioritize programs that explain duplicate or “informative” closures, preserve context, and do not silently patch while refusing mediation.
- Community distrust itself is a selection signal: when hunters start talking about boycotts, duplicate gaming, or reward leakage, treat that as a durable warning that the program’s process quality may be degrading even if the technical surface is still interesting.
- Fairness for hard-to-demo classes is a selection signal in its own right: programs that clearly accept blind SSRF/OAST, authZ edge cases, cache poisoning, or desync-style evidence tend to have better ROI than programs that demand unsafe max-exploit proof.
- Browser-side AI governance and shadow-AI monitoring are now a distinct premium target class: products that can inspect prompts, extension traffic, or in-browser copilots are exposing a trust boundary, not just a DLP use case.
- VMs/process hygiene is a selection clue: if a team can’t connect scan volume to risk reduction, expect weaker prioritization and slower remediation, which usually means more triage friction for researchers.
- Hidden build/bootstrap paths are still gold: CodeConnections-style connector tokens and CodeBuild pre-user-code requests are exactly the kind of seams that turn ordinary platform work into high-value trust-boundary research.
- Outsourced support and account-recovery paths should be scored as first-class attack surfaces whenever the program can influence identity, tickets, or escalation state.

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
