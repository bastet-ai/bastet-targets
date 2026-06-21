# Bug Bounty Program Quality Signals (High-Value Heuristics)

Not all programs are worth equal time. This page captures **durable, repeatable signals** that a bounty/VDP program is likely to be **high-value** (good ROI, fair triage, actionable scope) vs. low-signal (high duplicates, slow/erratic triage, unclear rules).

These are heuristics, not guarantees.

## What “high-value” usually means

A program can be high-value in different ways:

- **High payouts**: large max bounties + frequent payouts.
- **High learning value**: good feedback/triage even if payouts are modest.
- **High exploitability**: modern surface area (APIs, mobile, cloud) with real impact paths.
- **Low friction**: clear scope, clear rules, predictable comms.

## Program signals that correlate with good ROI

### 1) Clear, *operational* scope
Good programs specify more than “*.example.com”:

- Explicit in-scope asset lists (wildcards + examples)
- Out-of-scope categories that match reality (e.g., “marketing pages except auth flows”)
- Environment clarity (prod vs staging)
- 3rd-party boundaries (CDNs, SaaS, vendor-owned domains)

**Smell test:** If you frequently have to ask “is this in scope?” after starting recon, expect churn.

### 2) Vulnerability rating guidance matches impact
High-value programs usually have at least one:

- A public severity rubric with examples
- A payout table by severity
- Clear “won’t pay” categories with rationale

**Smell test:** Programs that overuse “Informative / Intended behavior” without crisp policy tend to burn time.

### 3) Responsiveness and lifecycle hygiene
Look for:

- Triage SLA stated (and plausibly met)
- Consistent status updates
- Predictable remediation cadence
- Good report hygiene: duplicates handled quickly, requests for clarifications are specific

**Smell test:** If reports languish without movement, duplicates pile up and ROI collapses.

### 4) Evidence expectations are realistic
Some issues are inherently “blind” or harder to demo (SSRF, timing side-channels, cache poisoning, request smuggling).

High-quality programs typically:

- Accept **well-evidenced primitives** even if full data exfil isn’t shown
- Provide guidance on what counts as “interaction” (OOB proof, timing proofs, access-control bypass, etc.)

Low-quality programs often:

- Require maximal exploitation even when unsafe/unethical
- Treat “blind” as “no impact” by default

**Practical heuristic:** If the program regularly closes **blind SSRF** as “informative” unless you show data exfiltration, your time may be better spent elsewhere unless you have a strong OOB lab + escalation playbook.

### 5) Low-friction comms: humans on the other side
Signals:

- Analysts ask targeted questions
- They acknowledge good methodology
- They don’t move goalposts late in the process

Anti-signals:

- Vague “need more impact” with no direction
- Repeated requests for the same info already provided

### 6) Surface area that rewards depth (not just scanning)
Programs with modern, complex stacks tend to reward deeper work:

- Public APIs / partner APIs
- Mobile apps with rich backend APIs
- SSO / OAuth / SAML / SCIM
- Multi-tenant SaaS with permissions complexity
- CI/CD, developer tooling, webhooks

**ROI note:** Mature fintech may be hardened against basic IDOR/XSS, but can still pay well for business logic, auth, and “weird” primitives.

## “Community signals” that often predict program quality

These aren’t proof, but they are strong directional indicators:

- Hunters discuss the program as “fair”, “fast triage”, “clear comms”
- Presence of public writeups by respected hunters (and the program didn’t retaliate)
- Repeat hunters returning to the same program

Negative signals:

- Reports of chronic ghosting
- Repeated “informative” closures for legitimate classes (blind SSRF, cache poisoning, request smuggling) without a published policy
- Excessive scope churn without clear announcements

## A fast scoring rubric (10 minutes)

Score each 0–2:

1. Scope clarity
2. Payout/severity clarity
3. Triage SLA + evidence of responsiveness
4. Fairness for hard-to-demo bug classes
5. Surface area depth

**8–10:** likely high-value

**5–7:** situational (pick a niche)

**0–4:** proceed only if you have a specific thesis

## Notes from recent community discussion (Jan–Feb 2026)

Themes showing up repeatedly:

- **“Blind SSRF closed as Informative” disputes**: indicates some programs require full exfiltration proof (even when interaction + internal enumeration is demonstrated). Treat this as a program-specific policy signal.
  - *Actionable heuristic:* before spending hours on SSRF, look for any public policy language about “interaction-only” SSRF, and/or community confirmation that OAST + timing + internal reachability is accepted as impact.
- **“Enabling” exposures dismissed as N/A**: exposed debug endpoints / route dumps / stack details may be treated as non-issues unless you chain to a concrete exploit.
  - *Heuristic:* budget time for chaining (debug output → endpoint discovery → authZ abuse / SSRF / file read) or expect N/A outcomes.
- **Credit/disclosure expectations matter (CVE/GHSA/acknowledgements)**: hunters continue to care about durable credit (CVE assignment, GHSA being un-embargoed, hall-of-fame / recognition). Programs that are cooperative about attribution tend to also be more cooperative about remediation.
  - *Signal:* if a program/org routinely keeps advisories private indefinitely or is cagey about attribution, expect more friction.
- **VDP timelines vs. bounty timelines**: VDPs may remediate slowly but still provide recognition (e.g., LoR / hall-of-fame). Bounty programs often optimize for triage throughput and duplicates.
  - *Signal:* for VDP-heavy targets, treat “time-to-remediation” as a core KPI (and budget your attention accordingly).
- **“Automation obsession” vs. manual testing**: many hunters report better ROI from fewer tools + deeper app understanding, especially on heavily-tested public programs.
- **Bounty variance + expectation management**: community anecdotes continue to highlight large variance between perceived severity and awarded bounty (e.g., long “under investigation” periods followed by low awards). Treat this as a *program-level* signal about payout predictability.
  - *Heuristic:* if a program’s public chatter frequently includes “lowball” outcomes after long cycles, bias toward (a) faster-moving programs or (b) targets where you can stack multiple related issues into a single high-impact chain.
- **Fintech/payment programs: sandbox vs production boundaries**: questions keep surfacing about whether programs expect **sandbox-only validation** for checkout/payment flows, and whether “testing in prod (even on your own accounts)” is acceptable.
  - *Signal:* high-quality programs explicitly state what’s allowed for **financial-impact testing**, provide safe test paths (sandbox accounts, test cards, staging), and document how to demonstrate impact without moving real money.
  - *Anti-signal:* ambiguity here often leads to N/A/violations risk; treat it as a scope/rules red flag and pick targets with explicit safe-harbor guidance.
- **“Is this program fake?” anxiety**: recurring community theme where hunters report submitting bugs to self-hosted/company-run programs and getting no reply.
  - *Heuristic:* if a program has no published SLA, no hall-of-fame/history of acknowledgements, and no clear security contact process (or escalation path), assume **low responsiveness** until proven otherwise.

- **Inconsistent “signals” (badges/points vs. final outcome) are a yellow flag.** If a program hands out positive signals (e.g., “exceptional find” badges) while still closing reports as duplicate/N/A, assume you need to optimize for *documented policy* + *clear impact*, not gamified feedback.

- **Late-stage severity/payout downgrades with questionable rationale are a strong anti-signal.** Community anecdote: a program accepted a critical CVSS, fixed quickly, then downgraded “because it’s now fixed” (misusing CVSS temporal adjustments).
  - *Heuristic:* prefer programs that rate impact at time-of-report and clearly justify any rating changes without moving goalposts.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qulv8l/tldr_funny_impact_downgrade_of_the_week/

- **Duplicates “even when it’s still present” is a real pain point.** Hunters report being closed as duplicate referencing very old internal tickets (months+) while the vuln is still reproducible.
  - *Heuristic:* treat this as a signal of (a) remediation backlog or (b) triage process prioritizing queue health over fixes. Either way, expect low ROI unless you can demonstrate *new impact* vs the original.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qvpn9a/reports_closed_as_duplicates_even_when_the/

- **“Needs more info / no PoC” despite clear repro steps is an anti-signal.** If a program repeatedly claims missing PoC when you provided numbered steps + evidence, expect comms friction.
  - *Heuristic:* favor programs with triagers who can restate your PoC in their own words (they actually read it) and ask *delta* questions.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qvpja5/simple_broken_access_control_marked_as/

- **Header-trust misunderstandings (X-Forwarded-For) can create weird triage outcomes.** Example: “IP allowlist bypass” reports getting dismissed as “just spoofing a whitelisted address”, which may indicate the org doesn’t treat edge header-trust as a security boundary.
  - *Signal:* programs/teams that explicitly document trusted-proxy requirements (or deploy mTLS/ZTNA) usually have more mature threat modeling and cleaner impact discussions.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qvoxq3/reported_ip_whitelisted_restriction_bypass/

- **Community distrust itself is a selection signal.** When multiple hunters independently talk about boycotts, duplicate gaming, silent downgrades, or reward leakage, that often predicts worse process quality than the bounty table suggests.
  - *Heuristic:* downgrade a program’s priority if public chatter repeatedly frames it as unfair, opaque, or adversarial — even when the technical surface is still interesting.

- **AI governance / browser-side mediation is becoming a separate EV bucket.** The interesting bugs are often in prompt visibility, browser extensions, shadow-AI discovery, and policy enforcement gaps rather than ordinary web app flaws.
  - *Heuristic:* weight programs higher when they expose tool-calling, extensions, local agents, or browser-mediated content controls.

- **Build/release and dependency-provenance boundaries keep paying.** Public incidents around package compromise and pipeline trust show that “who can ship code?” is increasingly part of a program’s attack surface.
  - *Heuristic:* prioritize programs with release pipelines, package publishing, webhooks, or build-integrity claims; these often have higher-severity failure modes.

- **Fairness shows up in how programs handle hard-to-demo classes.** Programs that clearly document what evidence counts for blind SSRF, authZ edge cases, cache poisoning, or desync-like chains are usually better ROI than those that force unsafe max-exploit proof.

## Public-advisory signal: local control planes, datastore authZ, tracing middleware, and cloud fetchers (2026-06-21)

- **Local app servers need origin/path validation even on loopback.** Anki's local HTTP server advisory (`GHSA-869j-r97x-hx2g`) is a reminder to score desktop apps, browser helpers, developer tools, and local agents higher when they expose local HTTP/WebSocket APIs, file paths, or privileged APIs to browser-origin traffic. Source: https://github.com/advisories/GHSA-869j-r97x-hx2g
- **Database and policy engines need field-level and traversal-specific negative tests.** The SurrealDB advisory cluster covers field-level SELECT permission bypass through graph/reference traversal, arbitrary file read via analyzer mapper configuration, JWKS redirect SSRF, indexed ordering leakage for restricted fields, and deep-operator DoS. For database, low-code, authorization, and multi-tenant data platforms, weight graph traversal, reference expansion, analyzer/plugin config, JWT/JWKS fetchers, and resource-exhaustion limits when these areas are in scope. Sources: https://github.com/advisories/GHSA-hv6h-hc26-q48p, https://github.com/advisories/GHSA-cc8f-fcx3-gpjr, https://github.com/advisories/GHSA-h5rg-8p7f-47g2, https://github.com/advisories/GHSA-h4h3-3rfj-x6fq, https://github.com/advisories/GHSA-jv2j-mqmw-xvv5
- **Observability/tracing middleware can become a server-side file boundary.** LangSmith SDK TracingMiddleware `GHSA-f4xh-w4cj-qxq8` reinforces that tracing/debug middleware, request metadata capture, and path-like inputs need explicit trust boundaries in AI/LLM, observability, and developer-platform programs. Source: https://github.com/advisories/GHSA-f4xh-w4cj-qxq8
- **Secret loaders and corpus/trainers must refuse symlink escapes and arbitrary writes.** `pydantic-settings` `GHSA-4xgf-cpjx-pc3j` and ChatterBot `GHSA-wvrh-2f4m-924v` add scoring cues for config/secret directories, training-data importers, archive/corpus materialization, and local workspace isolation. Sources: https://github.com/advisories/GHSA-4xgf-cpjx-pc3j, https://github.com/advisories/GHSA-wvrh-2f4m-924v
- **Cloud-management fetchers and automation notifications must treat user-controlled paths/titles as untrusted execution inputs.** Lokka's Azure Resource Manager URL validation issue (`GHSA-g2gw-q38m-vjfc`) and the `githubtoplanguages` issue-title command injection (`GHSA-c3xh-98xp-6qhf`) reinforce egress allowlists, canonical cloud API endpoints, structured command invocation, and webhook/notification escaping for cloud admin and CI/chatops programs. Sources: https://github.com/advisories/GHSA-g2gw-q38m-vjfc, https://github.com/advisories/GHSA-c3xh-98xp-6qhf

## Public-advisory signal: agent/editor approvals, VPN identity, SaaS authZ, and build trust (2026-06-19)

- **Agent/editor patch approvals must bind to resolved filesystem effects.** Hacktron's VS Code Copilot `applyPatchTool` research describes a time-of-check/time-of-use gap where approval considered apparent patch paths while execution honored a different move destination, allowing sensitive workspace control files such as `.git/config` or `.vscode/settings.json` to become the real write target. For AI coding assistants, Codespaces-style environments, repository agents, and IDE plugins, score protected-path enforcement, normalized patch AST review, symlink/move destination resolution, untrusted issue/PR prompt isolation, and token scoping around follow-on Git/editor actions. Source: https://www.hacktron.ai/blog/rce-in-vscode-copilot
- **VPN and identity gateways remain high-value when verifier choices come from attacker-controlled claims.** Hacktron's PAN-OS GlobalProtect CAS writeup for `CVE-2026-0265` highlights a JWT algorithm-confusion failure where token header input could influence verifier behavior. For VPN, SSO, access gateway, and enterprise identity programs, weight algorithm/key-type binding, issuer/audience/tenant validation, negative tests for `alg` substitution, and safe-harbor clarity for authentication-bypass evidence. Source: https://www.hacktron.ai/blog/cve-2026-0265-panos-globalprotect-cas-auth-bypass
- **Tenant-null and mass-assignment bugs are recurring SaaS control-plane signals.** Recent public GitHub advisories for Flowise and wger document cross-workspace or cross-tenant failures around chatflow disclosure, user-field mass assignment, and unset tenant/gym scoping. For multi-tenant SaaS, AI workflow builders, admin APIs, and fitness/CRM-style account systems, score workspace ownership checks, `NULL`/unset tenant fail-closed behavior, role-transition authorization, and explicit negative-test guidance. Sources: https://github.com/advisories/GHSA-c2c9-mfw7-p8hw, https://github.com/advisories/GHSA-59fh-9f3p-7m39, https://github.com/advisories/GHSA-m837-xvxr-vqwg, https://github.com/advisories/GHSA-mw8f-w6p8-xrf4
- **Repository/model-controlled build config is now a program-selection cue.** Public advisories around `shivammathur/setup-php`, Diffusers `trust_remote_code`, and RTK output filters show CI and LLM/developer tooling executing or trusting project-controlled configuration in privileged contexts. For build/release, AI-code-runner, model-hosting, and developer-tool programs, prioritize trust prompts, untrusted PR isolation, model/repository code-loading controls, command-output integrity, and runner secret minimization. Sources: https://github.com/advisories/GHSA-pqwm-q9pv-ph8r, https://github.com/advisories/GHSA-5wxr-w449-57cm, https://github.com/advisories/GHSA-7wx4-6vff-v64p, https://github.com/advisories/GHSA-fvvm-949w-qj4w

## Public-advisory signal: authZ, agent telephony, observability, notebooks, and recon tooling (2026-06-18)

- **Authorization engines need datastore-specific negative tests.** OpenFGA `GHSA-cf98-j28v-49v6` / `CVE-2026-55170` documents MySQL-backed authorization checks where distinct requests can collapse to the same decision when case-sensitive user strings matter. For IAM, permissions, relationship-based access-control, and policy-as-a-service programs, weight datastore collation/canonicalization, case-sensitive principal handling, tuple uniqueness, and cross-datastore parity tests when these systems are in scope. Source: https://github.com/advisories/GHSA-cf98-j28v-49v6
- **Development runners become production risk when reachable with provider credentials.** Pipecat `GHSA-j8cv-x86q-rj85` / `CVE-2026-54695` shows an unauthenticated telephony testing WebSocket (`/ws`) able to drive Twilio/Telnyx/Plivo call-control actions using the operator's credentials. For AI voice agents, contact-center automation, webhook runners, and demo/dev servers, score default bind addresses, authentication on test endpoints, provider credential scoping, call/session identifier validation, and safe separation between local test runners and deployed services. Source: https://github.com/advisories/GHSA-j8cv-x86q-rj85
- **Receiver authentication must be enforced at request time, not only validated in config.** OpenTelemetry Collector Contrib `GHSA-w5cv-pw74-4rxc` / `CVE-2026-55701` reports the GitHub receiver accepting configured `required_headers` at startup but not checking them on incoming webhook requests. For observability, webhook ingestion, CI event collectors, and SIEM pipelines, prioritize config-to-handler parity, per-receiver auth tests, negative webhook cases, and audit logs that distinguish unauthenticated traffic from trusted integrations. Source: https://github.com/advisories/GHSA-w5cv-pw74-4rxc
- **Notebook/rendering products need origin separation for generated HTML.** Jupyter Server `GHSA-fcw5-x6j4-ccmp` / `CVE-2026-44727` documents stored XSS in nbconvert HTML handlers due to unsandboxed notebook-rendered HTML under the Jupyter origin, enabling `/api/*` authority and kernel impact after victim navigation. For notebooks, reports, dashboards, markdown/rendering SaaS, and data-science workbenches, weight CSP sandboxing, separate render origins, token cookie exposure, user-content sanitization defaults, and safe preview workflows. Source: https://github.com/advisories/GHSA-fcw5-x6j4-ccmp
- **Security/recon tools are also untrusted-input processors.** The BBOT June 18 advisory cluster covers symlink-following arbitrary writes in `github_workflows`, path traversal in `postman_download`, SSRF through Docker registry `WWW-Authenticate` realm parsing, and archive extraction Zip-Slip behavior. For products that import repos, Postman workspaces, container registries, archives, or third-party scan artifacts, score path canonicalization, symlink/hard-link refusal, archive member validation in code (not just external tool behavior), fetcher egress allowlists, and isolated low-privilege workspaces. Sources: https://github.com/advisories/GHSA-rvp7-w75q-9fv2, https://github.com/advisories/GHSA-m54h-vhf9-3w3m, https://github.com/advisories/GHSA-3mp7-vp6j-2mxx, https://github.com/advisories/GHSA-3vgw-585j-4m45
- **Command allowlists must parse shell grammar, not just visible command names.** OpenClaw `GHSA-c226-q6fx-6j6c` / `CVE-2026-53861` highlights a macOS Swift exec allowlist bypass via combined POSIX inline-command flags. For local agents, gateway operators, plugin systems, and approval-gated command runners, weight structured argv policies, flag-aware parsing, deny-by-default shell metacharacter handling, approval revalidation, and tests for combined/short-option forms. Source: https://github.com/advisories/GHSA-c226-q6fx-6j6c

## Public-advisory signal: edge, identity, CI, and control-plane products (2026-06-11)

- **Request-smuggling evidence quality is a program signal.** Undertow `GHSA-3gv6-g396-9v4r`, `GHSA-8v4x-mgvp-p658`, and `GHSA-vqqj-9cmv-hx43` describe proxy/origin parser differentials around header terminators, header-name parsing, and leading-whitespace handling. For Java edge stacks behind CDNs, WAFs, load balancers, API gateways, or service meshes, weight programs higher when request-smuggling tests are authorized and safe canary evidence is accepted. Sources: https://github.com/advisories/GHSA-3gv6-g396-9v4r, https://github.com/advisories/GHSA-8v4x-mgvp-p658, https://github.com/advisories/GHSA-vqqj-9cmv-hx43
- **Disabled features are only real boundaries when versioned APIs obey them.** Keycloak `GHSA-hm32-hfmw-rhvg` / `CVE-2026-7500` adds an IAM/SSO target cue: account APIs, preview routes, and alternate versioned endpoints need the same feature-gate and authorization checks as the UI. Source: https://github.com/advisories/GHSA-hm32-hfmw-rhvg
- **Package-manager filesystem writes matter for CI and repo-ingestion scopes.** PDM `GHSA-78v8-vpjp-cjqh` / `CVE-2026-47764` and `GHSA-ghq2-5c67-fprm` / `CVE-2026-47763` add scoring cues around wheel install containment, symlinked project-local state, workspace isolation, and least-privilege build users. Sources: https://github.com/advisories/GHSA-78v8-vpjp-cjqh, https://github.com/advisories/GHSA-ghq2-5c67-fprm
- **Agent/workflow automation must separate untrusted PR config from privileged runner execution.** Claude Code Action `GHSA-8q5r-mmjf-575q` / `CVE-2026-47751` shows project-local `.mcp.json` from pull requests as a concrete MCP/CI-agent trust boundary. Source: https://github.com/advisories/GHSA-8q5r-mmjf-575q
- **Management-control-plane advisory clusters are durable target-selection OSINT.** The June Nebula Mesh, FUXA, MagicMirror, Langflow, AWS API MCP, and Anyquery batch reinforces ownership checks, CSRF defenses, config-injection controls, read-SSRF blocking, filesystem-policy enforcement, and SQL/browser automation boundaries for mesh, industrial-dashboard, AI-flow, MCP, and local-automation programs. Sources: https://github.com/advisories/GHSA-598g-h2vc-h5vg, https://github.com/advisories/GHSA-273q-qgh5-wrj6, https://github.com/advisories/GHSA-7hp6-g3pq-3pc3, https://github.com/advisories/GHSA-w86f-rf9w-h3x6, https://github.com/advisories/GHSA-h9fj-c2qr-76g2, https://github.com/advisories/GHSA-8ghr-w65f-j3qr, https://github.com/advisories/GHSA-ph6f-2cvq-79hq, https://github.com/advisories/GHSA-vwmf-pq79-vjvx, https://github.com/advisories/GHSA-2cpp-j2fc-qhp7, https://github.com/advisories/GHSA-hrj8-hjv8-mgwc, https://github.com/advisories/GHSA-9pg3-25fq-p6cc

## Public-advisory signal: agentic pentesting products (2026-05-31)

- **Media/file-manager pipelines add command-boundary score.** elFinder `GHSA-8q4h-8crm-5cvc` / `CVE-2026-41247` documents ImageMagick CLI command injection through user-controlled background-color input in resize/rotate handling. For CMS, DAM, back-office file-manager, upload, and image-transformation programs, weight strict media-option allowlists, shell-free/argv execution, sandboxed image workers, low-privilege processing accounts, and logging of normalized transform parameters when those paths are authorized. Sources: https://github.com/advisories/GHSA-8q4h-8crm-5cvc, https://github.com/studio-42/elFinder/security/advisories/GHSA-8q4h-8crm-5cvc
- **Agent approval gates need structured action binding.** Claude Code `GHSA-qgqw-h4xq-7w8w` documents a `find` command-injection path that could bypass intended user approval. For IDE agents, local assistants, CI/workflow automation, and code-runner products, weight argv-only execution, approval over structured tool+argument objects, execution-time revalidation, workspace path constraints, and telemetry for unexpected flags or metacharacters when those client/runner components are in scope. Sources: https://github.com/advisories/GHSA-qgqw-h4xq-7w8w, https://github.com/anthropics/claude-code/security/advisories/GHSA-qgqw-h4xq-7w8w
- **Serverless routers need public-vs-internal invocation boundaries.** Fission `GHSA-3g33-6vg6-27m8` / `CVE-2026-46614` documents public router exposure of `/fission-function/<namespace>/<name>` routes that could invoke functions without an `HTTPTrigger` and bypass trigger host/path/method policy. For serverless, workflow, and agent-runner programs, weight internal invocation paths, function-name enumeration behavior, trigger allow-lists, tenant namespace boundaries, and ingress exposure defaults when authorized testing covers these paths. Sources: https://github.com/advisories/GHSA-3g33-6vg6-27m8, https://github.com/fission/fission/security/advisories/GHSA-3g33-6vg6-27m8
- **Runtime service-account inheritance is a high-value sandbox seam.** Fission `GHSA-85g2-pmrx-r49q` / `CVE-2026-46617` shows user function containers inheriting a fetcher service-account token with namespace-wide secret/configmap read. For platforms that run user code, agent tools, or serverless functions, weight per-container service-account isolation, automount defaults, declared-secret allowlists, namespace RBAC minimization, and auditability of secret/config access. Keep validation non-invasive and avoid reading third-party secrets. Sources: https://github.com/advisories/GHSA-85g2-pmrx-r49q, https://github.com/fission/fission/security/advisories/GHSA-85g2-pmrx-r49q
- **Publisher OIDC audiences must bind to the specific registry/control plane.** MCP Registry `GHSA-95c3-6vvw-4mrq` / `CVE-2026-44428` documents GitHub Actions OIDC tokens replayable across registry deployments because the audience was shared instead of instance-bound. For MCP, package-registry, plugin-marketplace, and CI-publisher programs, weight issuer/audience/registry URL binding, namespace ownership checks, deployment-specific audiences, token replay defenses, and publish-audit logs when these flows are authorized. Sources: https://github.com/advisories/GHSA-95c3-6vvw-4mrq, https://github.com/modelcontextprotocol/registry/security/advisories/GHSA-95c3-6vvw-4mrq
- **MCP connector servers need source binding, fetcher egress, and default-auth review.** A catch-up pass over public GitHub Advisories surfaced recurring MCP server seams: Atlassian connector URL headers used as SSRF routing inputs, CKAN/OpenAPI-derived connectors reaching internal networks through configured base URLs or `$ref` dereferencing, auth-fetch/download tools combining arbitrary URL fetches with local persistence, and Network-AI exposing privileged MCP HTTP tool calls without authentication. For MCP connector, plugin, and agent-integration programs, weight connector origin allowlists, per-tool egress constraints, untrusted fetched-content handling, sandboxed output paths, and authenticated loopback-only HTTP transports. Sources: https://github.com/advisories/GHSA-7r34-79r5-rcc9, https://github.com/advisories/GHSA-3xm7-qw7j-qc8v, https://github.com/advisories/GHSA-v6ph-xcq9-qxxj, https://github.com/advisories/GHSA-hv85-774v-26fg, https://github.com/advisories/GHSA-fj4g-2p96-q6m3
- **MCP OAuth discovery and tool-runtime sandboxes need separate egress scoring.** Spring AI MCP Security `GHSA-qjp4-4jvr-xqg3` / `CVE-2026-45609` and Pydantic-AI MCP Run Python `GHSA-6fgp-m6q4-j3q5` / `CVE-2026-25904` add adjacent MCP framework cues: OAuth metadata discovery can become an SSRF fetcher, and sandboxed tool runtimes may still reach localhost if network defaults are too broad. For MCP framework and agent-tool programs, weight OAuth discovery allowlists, redirect/metadata canonicalization, localhost/private-network blocking, sandbox network defaults, and per-tool outbound policies. Sources: https://github.com/advisories/GHSA-qjp4-4jvr-xqg3, https://github.com/advisories/GHSA-6fgp-m6q4-j3q5
- **Subprocess environment clearing is an observability/agent secret boundary.** Sentry Python SDK `GHSA-g92j-qhmh-64v2` / `CVE-2024-40647` shows how instrumentation can unintentionally pass all environment variables to child processes even when callers specify `env={}`. For Python automation, CI, local agents, and observability-heavy platforms, weight subprocess wrapper behavior, SDK monkeypatching/default integrations, allowlisted environment propagation, and tests proving secrets are not inherited by untrusted child tools. Sources: https://github.com/advisories/GHSA-g92j-qhmh-64v2, https://github.com/getsentry/sentry-python/security/advisories/GHSA-g92j-qhmh-64v2
- **Agentic-pentesting routers are credential-bearing control planes.** CVE-2026-29023 / GHSA-qrvr-jqxg-65rv describes a KeygraphHQ/Shannon hard-coded router API key issue where a reachable router component could allow authentication with a public static key and proxying through the instance with the victim's upstream provider credentials. For similar programs, score higher when router ports bind locally by default, per-instance keys are generated/rotated, upstream LLM/API credentials are narrowly scoped, deployment docs warn against public exposure, and proxy/audit logs expose misuse. Do not publish or reuse static key material. Sources: https://github.com/advisories/GHSA-qrvr-jqxg-65rv, https://nvd.nist.gov/vuln/detail/CVE-2026-29023, https://www.vulncheck.com/advisories/keygraph-shannon-hard-coded-router-api-key
- **Mitigation commits identify adjacent scoring seams.** Shannon commit `023cc95` bound Docker service ports to `127.0.0.1`, restricted MCP subprocess environment inheritance, pinned Playwright MCP, removed host IPC, guarded prompt-template includes against traversal, and documented prompt-injection risk from untrusted repositories. Treat router exposure, subprocess secret inheritance, dependency pinning, container isolation, prompt-template file access, and untrusted-repo ingestion as first-class boundaries when similar products place them in scope. Source: https://github.com/KeygraphHQ/shannon/commit/023cc953db742602964b7826105278d15c28a420
- **Repository ownership controls belong in the sandbox score.** A public Shannon issue flags Docker's `git safe.directory '*'` wildcard, and the current Dockerfile still shows the global safe-directory override. For products that ingest arbitrary repositories, score higher when workspaces use narrow allowlists, isolated per-job users/volumes, and documented untrusted-repo handling instead of disabling Git ownership checks globally. Sources: https://github.com/KeygraphHQ/shannon/issues/316, https://github.com/KeygraphHQ/shannon/blob/main/Dockerfile
- **Provider/model safety gates can create phase-specific blind spots.** Shannon issue #339 reports exploit-phase failures from Claude-Code-compatible CLI/provider safety filtering on attack-payload prompts, while earlier phases complete. For AI pentesting programs, score clear provider support matrices, payload-safe validation modes, fallback routing, and observability that separates model-policy blocks from target-side evidence. Source: https://github.com/KeygraphHQ/shannon/issues/339
- **Coding-agent vulnerability classes are converging on local workflow boundaries.** The May 31 GitHub Advisory batch for Aider 0.86.3 cites pre-commit hook bypass, architect-mode code injection, generated SQL injection, and metadata-endpoint SSRF. For AI developer tools, weight programs higher when they include hook enforcement, local CLI privilege boundaries, generated-code execution, untrusted documentation fetching, metadata-range blocking, and clear patch SLAs for agent workflow bugs. Sources: https://github.com/advisories/GHSA-c3wr-3c4v-6rmh, https://github.com/advisories/GHSA-7w7m-v5vp-w699, https://github.com/advisories/GHSA-f9g4-qjmq-f49r, https://github.com/advisories/GHSA-hchg-qm84-cj9p
- **Agent-framework advisories expose multiple trust-boundary classes at once.** The May 29 GitHub Advisory batch for PraisonAI covers default JWT signing secrets, unauthenticated A2A example execution, MCP workflow file reads, subprocess-mode sandbox escape, and automatic URL mention fetching into model context. For similar AI-agent platforms, weight programs higher when default config, sample deployments, MCP/file APIs, code-execution sandboxes, loopback/metadata fetch controls, and unauthenticated workflow endpoints are explicitly in scope. Sources: https://github.com/advisories/GHSA-3qg8-5g3r-79v5, https://github.com/advisories/GHSA-vg22-4gmj-prxw, https://github.com/advisories/GHSA-9cr9-25q5-8prj, https://github.com/advisories/GHSA-4mr5-g6f9-cfrh, https://github.com/advisories/GHSA-5cxw-77wg-jrf3
- **Repository materialization bugs belong in the devtool score.** Git LFS `GHSA-6pvw-g552-53c5` / `CVE-2025-26625` documents crafted symlink/hard-link interactions that can write through `git lfs checkout` / `git lfs pull`, including bare-repository edge cases. For AI developer tools and repository-ingestion products, weight programs higher when LFS checkout, symlink/hard-link collision handling, protected-path policies, and per-job workspace isolation are explicitly testable. Source: https://github.com/advisories/GHSA-6pvw-g552-53c5
- **Multimodal inference fetchers add a cloud-boundary score.** LMDeploy `GHSA-6w67-hwm5-92mq` / `CVE-2026-33626` documents SSRF in vision-language image loading, and Cloud Security Alliance's May 2026 research note reports exploitation within roughly 12 hours of disclosure. For AI inference, agent, and multimodal-product programs, weight image/document URL fetchers, metadata/loopback/private-CIDR blocking, default API auth, network segmentation, IAM scoping, and model-serving patch SLAs when those paths are authorized. Keep tests non-invasive and avoid credential or internal-service access. Sources: https://github.com/advisories/GHSA-6w67-hwm5-92mq, https://nvd.nist.gov/vuln/detail/CVE-2026-33626, https://labs.cloudsecurityalliance.org/research/csa-research-note-lmdeploy-cve-2026-33626-ai-inference-explo/
- **Model-loading defaults are now a separate inference-runner trust boundary:** LMDeploy `GHSA-9xq9-36w5-q796` / `CVE-2026-46517` and `GHSA-m549-qq94-fvhg` / `CVE-2026-46432` document unsafe remote-code loading paths around hard-coded `trust_remote_code=True` during model initialization. For AI inference, agent, and evaluation platforms, score model-source allowlists, explicit remote-code opt-in, signed/immutable model artifacts, sandboxed loaders, least-privilege execution users, and auditability of model provenance when those areas are in scope. Treat this as a target-selection cue, not as a reason to run untrusted models against third-party systems. Sources: https://github.com/advisories/GHSA-9xq9-36w5-q796, https://github.com/advisories/GHSA-m549-qq94-fvhg
- **Agent workflow fetchers need consistent SSRF controls across preview, save, and execution paths.** FastGPT `CVE-2026-44286` and `CVE-2026-44284` document two AI-agent platform SSRF seams before 4.14.17: a workflow node URL fetch path that bypassed internal-address checks, and an MCP tool URL flow where create/update could persist an internal endpoint that later executed without revalidation. For AI-agent and MCP-adjacent programs, weight URL/IP canonicalization, metadata/loopback/private-CIDR blocking, stored-tool validation, preview-vs-execution parity, workflow-runner network egress, and patch SLAs when those paths are authorized. Keep tests non-invasive and avoid credential or internal-service access. Sources: https://nvd.nist.gov/vuln/detail/CVE-2026-44286, https://nvd.nist.gov/vuln/detail/CVE-2026-44284, https://github.com/labring/FastGPT/security/advisories/GHSA-xpx6-xcpf-76qg, https://github.com/labring/FastGPT/security/advisories/GHSA-cxxj-99f7-f5wq
- **PraisonAI Platform's broader advisory cluster reinforces multi-tenant authZ as an agent-platform seam.** Additional May 29 advisories cover owner promotion, member removal, cross-workspace object/label/dependency access, activity-log exposure, arbitrary file write, and default unauthenticated API deployment. For similar platforms, score workspace ownership checks, role-transition authorization, object ID scoping, deployment-auth defaults, and safe negative-test guidance as first-class program-quality criteria. Sources: https://github.com/advisories/GHSA-c2m8-4gcg-v22g, https://github.com/advisories/GHSA-w388-2392-px73, https://github.com/advisories/GHSA-5jx9-w35f-vp65, https://github.com/advisories/GHSA-4x6r-9v57-3gqw, https://github.com/advisories/GHSA-h37g-4h4p-9x97, https://github.com/advisories/GHSA-6h6v-6m7w-7vxx, https://github.com/advisories/GHSA-h8q5-cp56-rr65, https://github.com/advisories/GHSA-27p4-pjqv-whgj, https://github.com/advisories/GHSA-gv23-xrm3-8c62, https://github.com/advisories/GHSA-hvhp-v2gc-268q, https://github.com/advisories/GHSA-8444-4fhq-fxpq
- **Agent servers and helper fetchers need explicit default-deny and canonicalization checks.** Additional PraisonAI advisories from the May 29 batch cover unauthenticated call-server operations when a token is unset, alternate-loopback SSRF bypasses in spider tools, and dynamic module execution in generated-agent workflows. For AI-agent platforms, weight call-server authentication defaults, URL/IP normalization, metadata/loopback denial, dynamic import/plugin governance, and generated-agent pipeline isolation when these paths are authorized. Sources: https://github.com/advisories/GHSA-86qc-r5v2-v6x6, https://github.com/advisories/GHSA-5c6w-wwfq-7qqm, https://github.com/advisories/GHSA-78r8-wwqv-r299
- **Federated agent-memory systems expand the target score beyond web authZ.** The stigmem-node advisory set adds peer-registration approval, non-loopback federation transport, plugin-signature override, and database schema-identifier handling as durable seams. For AI memory/federation platforms, weight programs higher when peer trust establishment, mTLS defaults, plugin governance, storage namespace controls, and federation audit trails are explicitly testable. Sources: https://github.com/advisories/GHSA-9vp8-3hmv-8fgh, https://github.com/advisories/GHSA-jmfc-hfjq-pxcp, https://github.com/advisories/GHSA-w7pm-9g55-mxfm, https://github.com/advisories/GHSA-9pc9-4crj-mhpj
- **Agent event streams, approval paths, and API-key routes are now separate scoring seams.** A June 1 catch-up scan of public April advisories adds PraisonAI A2U/AgentOS/approval-default issues and a Paperclip agent-key route IDOR pattern. For AI-agent platforms, weight event-stream auth, agent instruction exposure, human-approval allow-list mutation, tenant ownership checks on key management, and default-deny deployment posture when authorized testing covers these paths. Sources: https://github.com/advisories/GHSA-f292-66h9-fpmf, https://github.com/advisories/GHSA-pm96-6xpr-978x, https://github.com/advisories/GHSA-4wr3-f4p3-5wjh, https://github.com/advisories/GHSA-3xx2-mqjm-hg9x

## Public-release signal: agentic pentesting products (2026-05-29)

- **Authenticated-agent orchestration is a target-selection cue.** KeygraphHQ/Shannon v1.4.0 added sharing of preflight authenticated sessions across agents, forwarded `/etc/hosts` entries into worker containers, and bumped `fast-uri` for CVE-2026-6321. For similar AI security-testing programs, score higher when runner session custody, per-agent cookie/token isolation, local name resolution, URL/parser validation, metadata/local-network blocking, and dependency patch cadence are explicitly in scope. Sources: https://github.com/KeygraphHQ/shannon/releases/tag/v1.4.0, https://github.com/KeygraphHQ/shannon/commit/7813baf16a9ca6ff76a8fcbd42cafdd84c0726dd, https://github.com/KeygraphHQ/shannon/commit/35f59f30f6a36676627ee44d7c23487e6d570b1b, https://github.com/KeygraphHQ/shannon/commit/8f5d639f0d95ce29be918c81fb3f35d73e25d671

## Public-release signal: agentic pentesting products (2026-05-27)

- **AI pentesting runners are now a distinct target-selection bucket.** KeygraphHQ/Shannon publicly positions itself as an autonomous white-box AI pentester for web apps and APIs; v1.3.0 added auth-validation/email-login preflights, cloud metadata-range blocking in target URL checks, and npm install hardening with `--ignore-scripts`. For similar programs, score higher when source-code ingestion, runner sandboxing, credential handling, target allow/block rules, dependency install hooks, and network egress controls are explicitly in scope. Sources: https://github.com/KeygraphHQ/shannon, https://github.com/KeygraphHQ/shannon/releases/tag/v1.3.0

## Public-signal watchlist: recent community themes worth treating as durable

The most recent Reddit chatter keeps reinforcing a few repeatable program-quality cues:

- **MCP / agent-tooling exposure is hot and often under-authenticated.** Programs that expose browser automation, local agents, plugins, or internal assistant tooling tend to be higher EV when they have weak auth, weak origin checks, or unsafe tool execution.
- **Browser visibility into prompts is becoming a differentiator.** Community questions around AI prompt capture, prompt-layer policy, and extension/plugin visibility suggest a growing class of targets where the interesting bug is not simple site access, but prompt content leakage or control-plane abuse.
- **Tracking pixels are now an edge-to-content problem.** Pure image beacons are boring; pixels paired with companion JS, DOM access, or SaaS embed flows can become high-impact data collection surfaces.
- **Hardened image / SBOM expectations matter.** The more a program relies on container provenance, signed SBOMs, or “secure-by-default” images, the more likely it is to have a mature security posture and well-defined impact expectations.
- **Supply-chain paths keep paying.** npm compromise chatter and dependency confusion remain strong indicators that programs with build pipelines, package publishing, or internal tooling deserve attention.
- **Program fairness is a signal.** Hunters keep rewarding programs that handle hard-to-demo classes (blind SSRF, authZ edge cases, account recovery abuse) without forcing unsafe max-exploit proof.

## Recently interesting public program pages from the HackerOne sitemap

The public sitemap showed a cluster of recently updated pages that are worth a look as of this run:

- [Scopely](https://hackerone.com/scopely) — lastmod 2026-03-28
- [Sega](https://hackerone.com/sega) — lastmod 2026-03-31
- [Shein](https://hackerone.com/shein) — lastmod 2026-03-31
- [Shopify](https://hackerone.com/shopify) — lastmod 2026-03-30
- [Stripe](https://hackerone.com/stripe) — lastmod 2026-03-30
- [Supabase](https://hackerone.com/supabase) — lastmod 2026-03-30
- [Slack](https://hackerone.com/slack) — lastmod 2026-03-25
- [ServiceNow Disclosure](https://hackerone.com/servicenow-disclosure) — lastmod 2026-03-27

These aren’t all “new programs,” but they are public pages that recently moved, which makes them good candidates for refresh-oriented review.

## Practical next steps

- Maintain a personal shortlist of programs that match your strengths (web/API/mobile/cloud).
- Prefer programs where the **rules allow you to demonstrate impact safely**.
- Track your own metrics per program: time-to-triage, time-to-bounty, duplicate rate, subjective fairness.

---

*If you add new heuristics, prefer ones that are observable in public program pages or consistently reported by multiple independent hunters.*
