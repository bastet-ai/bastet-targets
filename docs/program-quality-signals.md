# Bug Bounty Program Quality Signals (High-Value Heuristics)

This page tracks **durable community heuristics** that correlate with a *high-signal, high-ROI* bounty program.

> Scope note: This is **program-quality OSINT**, not a list of specific vulnerabilities.

## What “high-value” usually means (beyond max payout)

A program is *high-value* when it reliably converts researcher time into accepted, fairly-scored findings **without process friction**.

Think in terms of:

- **Time-to-triage** (days, not weeks)
- **Time-to-resolution** (clear workflow + predictable comms)
- **Fairness/consistency** (severity + bounty mapping)
- **Researcher experience** (less adversarial friction)

## Positive signals (green flags)

### 1) Fast, predictable response cadence

- Auto-ack quickly *and* a **human triage update** within a published window.
- Clear status transitions (New → Triaged → Pending Fix → Resolved).

**Why it matters:** delays correlate with “ghosting” and reduced payout likelihood even for valid issues.

### 2) Clear scope + rules that match reality

- Scope includes *the real attack surface* (auth flows, APIs, mobile, staging where appropriate).
- Out-of-scope items are narrowly defined (not “everything interesting”).
- Explicit stance on common classes (IDOR/BOLA, SSRF, OAuth, business logic).

### 3) Duplicate handling is transparent and educational

Researchers frequently report frustration with duplicates where:

- the original report is **very old** and the issue appears unfixed, and/or
- the program provides no useful explanation of what was duplicated.

**Green flag:** triage gives a short, non-sensitive explanation (e.g., “same root cause in endpoint X; your report matches existing fix plan”).

### 4) Severity scoring is consistent; downgrades are justified

A recurring complaint is *creative* or inconsistent downgrade logic.

**Green flag:**

- CVSS or internal rubric is documented and applied consistently.
- Triage explains *what would raise impact* (e.g., show ATO/exfil, expand blast radius).
- The program does **not** treat “it’s fixed now” as a reason to reduce historical impact.

### 5) Payment and reputation signals

- Consistent payout history (not just one-off big rewards).
- Public/credible writeups, hall-of-fame activity, or conference presence.
- Low volume of community “non-payment / stalled” stories.

## Negative signals (red flags)

### 1) Ghosting / prolonged silence

Community anecdotes repeatedly cite weeks-long silence after acknowledgement—especially in self-hosted programs.

**Heuristic:** If the program doesn’t publish (and follow) an SLA, assume higher risk of dead time.

### 2) “Needs more info” loops despite clear reproduction

If multiple researchers report being asked for a PoC *after* providing numbered reproduction steps, expect high process overhead.

### 3) Scope ambiguity around third-party integrations

Common pain point: bugs in checkout/payment flows involving third parties.

**Green flag:** explicit policy on third-party processors, shared responsibility, and safe reporting channels.

### 4) Unfriendly stance on common attack classes

Example pattern: IDOR/BOLA “fixed” by obscuring IDs client-side (encryption/encoding) instead of server-side authorization.

**Red flag:** programs that consistently treat authorization failures as “informational” unless you provide extreme chaining.

## Practical workflow: how to use these signals

When selecting targets, score each program (0–2 points per line):

- Response SLA exists and seems followed
- Duplicate handling is fair/transparent
- Severity rubric is documented and consistent
- Scope matches the real surface (APIs/auth/mobile)
- Reports of ghosting / stalled triage are rare

Prefer programs with **high process score** even if their max bounty is lower.

## OSINT inputs we currently monitor

- Reddit (bug bounty + netsec communities)
- HackerOne public surface (where stable public feeds exist)

As new repeated patterns emerge, update this page with **generalized** (non-doxxing) heuristics.
