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

**Heuristic:** if you see recurring patterns of long states + small awards, treat as *low expected value* unless you have a very high-confidence finding.

### B) Programs that require “full exfiltration” to accept blind vulnerabilities
Blind issues (SSRF, injection, timing side channels) are real, but some programs will close as “Informative” unless you demonstrate direct data read/exfil.

- Example discussion (Blind SSRF + internal enumeration closed Informative): https://www.reddit.com/r/bugbounty/comments/1qq37r0/blind_ssrf_waf_bypass_internal_timing_scan_closed/

**Heuristic:** if the program’s bar is “show me the crown jewels,” you’ll want:
- strong OAST evidence + clear internal interaction proofs, and/or
- a target where you can safely demonstrate impact within scope.

### C) High automation pressure → race to duplicates
When programs are saturated with low-effort automation, low-hanging fruit becomes a duplicate lottery.

- Community prompt (manual-first vs automation): https://www.reddit.com/r/bugbounty/comments/1qpcw79/is_the_automation_obsession_actually_a_trap_for/

**Heuristic:** prefer programs with unique workflows, unusual tech, or deeper authZ models where understanding beats scanning.

### D) Unclear payability criteria for common classes (especially authZ/IDOR)
If a program regularly marks common-but-real issues as N/A/Informative without a consistent written standard, you waste time arguing impact.

- Community example (authZ/IDOR exposing private lists/bookmarks — “will I get paid?”): https://www.reddit.com/r/bugbounty/comments/1qrsa96/is_this_a_payable_bug/

**Heuristic:** higher-value programs usually have at least one of:
- explicit “what counts as IDOR/authZ” examples,
- guidance on “unguessable IDs” (still authZ-bypass if access control fails),
- clear non-impact carveouts (e.g., *public* info only, or purely self-impact).

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

## Notes / Source Log

- Sources are currently Reddit RSS (r/bugbounty, r/netsec, r/AskNetsec). HackerOne Hacktivity RSS/Atom was not discoverable without heavier (JS) scraping at last check.
