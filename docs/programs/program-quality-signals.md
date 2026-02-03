# Bug Bounty Program Quality Signals (OSINT)

This page tracks **durable heuristics** for identifying **high-value / high-signal** bounty programs from public community discussion.

> Scope: public OSINT only. No private program intel. No scraping behind logins.

## Quick Heuristics (What “High-Value” Usually Looks Like)

### 1) Fast + predictable triage
- Consistently short *time-to-first-triage* (days, not months).
- Clear states and communication cadence (triage → reproduce → fix → bounty → disclosure).

**Why it matters:** slow triage increases opportunity cost and increases “stale” duplicates.

### 2) Transparent bounty ranges and severity model
- Reward ranges map to impact and are consistent.
- Program publishes examples, or at least clarifies what counts as “Informative/NA”.

**Signal:** fewer disputes / less guessing.

### 3) Clear scope + realistic exclusions
- Scope is explicit (domains/apps/APIs), with a stable process for additions.
- Out-of-scope list focuses on *non-impact* categories (spam, self-XSS, etc.), not arbitrary “we don’t like this bug class”.

### 4) Low “duplicate pressure” for your niche
- Programs with heavy hunter traffic can still be good if they have:
  - broad surface area (APIs, partner portals, mobile, regional variants)
  - differentiated attack paths (business logic, authZ, payments, workflows)

### 5) Good faith researcher experience
- Mediation path exists (or at least clear appeal process).
- Reasonable expectations for evidence (especially for blind issues).

### 6) “Reward-to-effort” feels fair
- Either strong payouts *or* strong learning signal (fast fixes, good feedback), ideally both.

## Negative Signals (Often Not Worth the Time)

### A) Long “under investigation” loops with low payouts
A common community complaint is spending weeks/months in investigation/triage for a small reward.

- Example discussion (Meta): https://www.reddit.com/r/bugbounty/comments/1qruinj/meta_bug_bounty/
- Another recent thread (Meta “no response”): https://www.reddit.com/r/bugbounty/comments/1qsai88/meta_bug_bounty_no_response/

**Heuristic:** if you see recurring patterns of long states + small awards, treat as *low expected value* unless you have a very high-confidence finding.

### B) Programs that require “full exfiltration” to accept blind vulnerabilities
Blind issues (SSRF, injection, timing side channels) are real, but some programs will close as “Informative” unless you demonstrate direct data read/exfil.

- Example discussion (Blind SSRF + internal enumeration closed Informative): https://www.reddit.com/r/bugbounty/comments/1qq37r0/blind_ssrf_waf_bypass_internal_timing_scan_closed/

**Heuristic:** if the program’s bar is “show me the crown jewels,” you’ll want:
- strong OAST evidence + clear internal interaction proofs, and/or
- a target where you can safely demonstrate impact within scope.

### C) Programs that downplay “informational” findings even when they enable follow-on attacks
A recurring pattern: exposed debug endpoints / route dumps / stack details get marked N/A unless you demonstrate a clear follow-on exploit.

- Example (ASP.NET Route Debugger exposure marked duplicate / original N/A): https://www.reddit.com/r/bugbounty/comments/1qswjo4/exposed_aspnet_route_debugger_in_prod_nad_as_no/

**Heuristic:** if a program dismisses *enabling* exposures, you’ll need to plan for chaining (e.g., debug output → endpoint discovery → authZ abuse / SSRF / file read). Otherwise expect low ROI.

### D) High automation pressure → race to duplicates
When programs are saturated with low-effort automation, low-hanging fruit becomes a duplicate lottery.

- Community prompt (manual-first vs automation): https://www.reddit.com/r/bugbounty/comments/1qpcw79/is_the_automation_obsession_actually_a_trap_for/

**Heuristic:** prefer programs with unique workflows, unusual tech, or deeper authZ models where understanding beats scanning.

### E) Unclear payability criteria for common classes (especially authZ/IDOR)
If a program regularly marks common-but-real issues as N/A/Informative without a consistent written standard, you waste time arguing impact.

- Community example (authZ/IDOR exposing private lists/bookmarks — “will I get paid?”): https://www.reddit.com/r/bugbounty/comments/1qrsa96/is_this_a_payable_bug/

**Heuristic:** higher-value programs usually have at least one of:
- explicit “what counts as IDOR/authZ” examples,
- guidance on “unguessable IDs” (still authZ-bypass if access control fails),
- clear non-impact carveouts (e.g., *public* info only, or purely self-impact).

### F) “Off-platform” / unclear legitimacy signals
Community threads periodically pop up where a hunter reports via a company-run form/email and gets no response for long periods, raising the question: is the program real, maintained, and safe to engage?

- Community example (“fake bounty programs??”): https://www.reddit.com/r/bugbounty/comments/1qt6gqc/how_to_identify_fake_bounty_programs/

**Heuristic:** prefer programs where you can quickly verify:
- an official policy + safe harbor language
- a platform presence (HackerOne/Bugcrowd/Intigriti, etc.) *or* clear ownership evidence (security.txt, verified domain emails)
- expected response windows / SLAs
- a clear scope and reporting channel (not a random webform)

If those aren’t present, treat the expected value as low and the legal/operational risk as higher.

## Practical Scoring Rubric (30-second triage)

Score each 0–2 (max 10):
1. Triage speed / responsiveness
2. Clarity of scope + exclusions
3. Consistency of payouts
4. Duplicate pressure (for your niche)
5. Researcher experience (appeals/mediation, respectful comms)

**Interpretation:**
- 8–10: prioritize
- 5–7: selectively hunt with a plan
- ≤4: avoid unless you have inside-out expertise

## Recent Community Signals (2026-02-02)

These are **examples** from recent public discussion that reinforce (or nuance) the heuristics above:

- **“Easy to find, hard to exploit” → duplicates happen even with strong effort.** One hunter describes an IDOR where exploitation required reversing obfuscated client-side crypto + dealing with rate limits, yet the report still landed as a duplicate.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qt0jq0/easy_to_find_but_hard_to_exploit_idor/

- **Triage outcomes can hinge on framing + category choice — good programs support re-triage without forcing a “new report” dance.** A hunter describes a deep technical report closed quickly as “won’t fix / intended behavior,” then realizing they misclassified it (“sandbox escape” framing) and needing to reframe as isolation failure / info disclosure / memory-corruption-adjacent impact.
  - Heuristic: higher-quality programs make it clear how to (a) correct category/impact framing, (b) request re-review, and (c) avoid being penalized for reasonable misclassification.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qtwce9/bug_bounty_report_closed_as_intended_behavior_i/

- **Policy clarity around “sandbox vs production” matters (especially for fintech/payments).** If the program’s policy is ambiguous about whether/when you can validate issues in production (particularly anything that “moves money”), your risk/effort increases. High-quality programs tend to provide explicit guidance for safely validating payment/checkout logic bugs.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qtj9el/paypal_bug_bounty_sandbox_vs_production_testing/

- **“Is a Swagger UI / API docs page reportable?” is often a proxy for program maturity.** Some teams treat exposed API documentation as low/no impact unless it includes creds/secrets or directly enables authZ bypass; others consider it a meaningful recon enabler. Programs that publish a clear stance on “docs exposure” and other recon-only findings reduce wasted cycles.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qtny5i/found_a_swagger_ui_page_of_an_api/

- **Mixed/unclear severity signals can indicate inconsistent triage.** A hunter reports an authZ/IDOR issue marked as duplicate while simultaneously receiving an “exceptional find” badge, highlighting that program feedback signals (badges/points/severity) may not line up with final outcomes.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qt3881/what_is_this_bug_supposed_to_be/

- **Programs may N/A “debug/info leak” findings without a crisp impact chain.** A report about an exposed ASP.NET Route Debugger (route table + stack details) was N/A’d as “no security concern,” highlighting how some programs discount misconfig findings unless you can demonstrate a downstream exploit path.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qswjo4/exposed_aspnet_route_debugger_in_prod_nad_as_no/

- **Blind-impact disputes remain common.** The blind SSRF + WAF bypass + internal enumeration “Informative” closure is a recurring pattern: if you can’t show data read/exfil, you may get low-severity outcomes.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qq37r0/blind_ssrf_waf_bypass_internal_timing_scan_closed/

- **Legitimacy checks matter for off-platform programs.** A recurring beginner question: how to distinguish a legitimate, maintained bounty program from a dead inbox or a risky/ambiguous “report here” page.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qt6gqc/how_to_identify_fake_bounty_programs/

- **“Fundamentals-first” correlates with unique bugs (and lower duplicate pressure).** A common theme: hunters who invest in deep understanding of web development and application behavior (vs. payload-spraying or heavy automation) tend to surface more *workflow/authZ/business-logic* issues—exactly the bug classes that stay valuable even in crowded programs.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qscdhf/why_do_a_lot_of_hunters_skip_the_fundamentals_for/

- **“Record real flows, then mutate them” is a practical way to find logic bugs.** A hunter describes a workflow where you browse the app normally, record your own API calls, then replay/mutate them to break hidden assumptions (coupon reuse, cross-user reuse, refund/checkout abuse, etc.).
  - Heuristic: programs with complex business workflows/APIs are higher-EV if you can efficiently capture and iterate on real flows.
  - Thread: https://www.reddit.com/r/bugbounty/comments/1qubktv/bug_bounty_browser_extension_tool/

- **AI/LLM programs have recurring, high-impact misconfig patterns (good ROI if scope includes the “plumbing”).** Community discussion from recent AI startup pentests highlights repeatable failure modes:
  - Exposed vector DBs (auth defaults, no IP allowlists/logging)
  - Prompt injection via “hidden” inputs (PDF metadata, email subjects, Slack commands)
  - CI/CD as a credential graveyard (keys in logs, Docker layers, Terraform state)
  - Treat model output as untrusted (LLM → SQL/tool injection)
  - Billing/usage spikes as an early breach signal (leaked keys, rate-limit bypass)
  - Thread: https://www.reddit.com/r/AskNetsec/comments/1qtn45b/tldr_i_pentested_3_ai_startups_here_are_5_ways_i/

## Notes / Source Log

- Sources are currently Reddit RSS (r/bugbounty, r/netsec, r/AskNetsec). HackerOne Hacktivity RSS/Atom was not discoverable without heavier (JS) scraping at last check.
