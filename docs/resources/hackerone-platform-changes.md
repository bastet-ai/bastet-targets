# HackerOne Platform Changes (Researcher-Relevant)

Durable log of HackerOne **platform-level** changes that affect researcher
workflow, submission capacity, or payout mechanics across all programs.
Program-specific policy changes live in `docs/programs/<slug>/`; this page is
only for platform mechanics that apply wiki-wide.

All entries are summarized from public HackerOne sources and date-stamped.
Verify current behavior on the platform before relying on any entry — HackerOne
iterates on changelog items without always re-announcing.

---

## October 2026 (snapshot 2026-10-15)

Source: HackerOne Help Center October 2026 Changelog —
https://docs.hackerone.com/en/articles/17299916-october-2026-changelog

### Trial report limit restructured to a flat cap of 3

- The tiered, rolling concurrency cap for trial reports is replaced by a flat
  **limit of 3 trial reports** per researcher, shared across all programs where
  the researcher does not meet the program's signal requirement.
- The allowance **resets to 3** when *any* report the researcher has submitted
  (to any program, VDP or BBP) reaches **Triaged** or **Resolved**, or when a
  90-day pause expires.
- **+1 trial report** (up to max 3) when a trial report is closed as a
  **Duplicate** of an original that is Triaged/Resolved and was not disclosed
  before the duplicate was submitted.
- Withdrawn, researcher-closed, and Informative closures do **not** restore
  trial reports. This closes the old loophole of closing reports before an
  unfavorable outcome to preserve capacity.
- The **90-day pause** begins when the third trial report is *submitted* (not
  reviewed) and ends after 90 days or immediately upon any Triaged/Resolved
  report. A paused researcher can still submit to VDPs, programs without a
  signal requirement, programs with a submission exception, pentest
  engagements, and programs where they already meet the signal requirement.
- **Rollout**: accounts created on/after **2026-10-14** are on the new limit;
  all remaining accounts migrate on **Monday 2026-10-19**. Everyone starts at
  3 available trial reports at migration; pre-migration reports do not count.
- HackerOne now records per-submission whether a trial report was used, the
  program's signal requirement, and the researcher's signal at submission time.

**Operational impact**: multi-program probing with low-signal accounts is now
hard-capped; capacity is earned through *triage-worthy* findings. For focused
research on a small set of high-value programs this is largely neutral, but
any workflow that relied on parallel trial submissions across many programs
must now budget 3 reports until the first triage lands. Duplicate-against-
undisclosed-original submissions have a small redemption value worth noting in
report-quality review.

### Credential revocation alerts now cover program/org/platform bans

- Program, organization, and **platform bans** now trigger the same workflow as
  voluntary departure: claimed credentials are marked revoked on HackerOne and
  **customer program admins are emailed to revoke access in their own systems**.
  Previously a program ban only hid the credential in HackerOne's UI, and a
  platform ban did neither — customer-side credentials stayed live.
- Released 2026-09-17; backfill for researchers who left before that date
  completes **2026-10-07**.

**Operational impact**: confirms asset-based credential management is becoming
a tracked offboarding surface on tracked programs. Expect programs to notice
credential lifecycle events faster; do not assume a stale program-side
credential persists unnoticed after any access change.

### Spot checks: hacker cap raised 15 → 50

- Programs can invite up to **50 hackers** per spot check (was 15; AWS drove
  the request). More spot-check activity is likely on large programs — worth
  watching invitations on tracked high-value programs.

### Researcher UX changes (low intel value, recorded for completeness)

- Pre-session ID-verification guidance expanded from 5 to 9 "do not" items
  (covers iCloud Private Relay, script blockers, incognito, emulators,
  screenshot submissions, obscured photos, multi-profile verification,
  third-party verification).
- Mediation request forms now autosave drafts to the account.
- Hacker inbox ("My reports") gains an **Asset type** filter; reports to
  programs without structured scope do not appear under an active asset filter.
- Custom-inbox-only users now land on Findings instead of Home.

---

## August 2026 — ID verification mandatory for all BBP submissions
(snapshot 2026-10-15; added because it predates the October snapshot above yet
gates every submission path)

Sources: HackerOne Help Center August 2026 Changelog —
https://docs.hackerone.com/en/articles/16190765-august-2026-changelog — and ID
Verification article — https://docs.hackerone.com/en/articles/8399430-id-verification

- **Identity verification (Veriff) is now required before submitting to any
  Bug Bounty Program (BBP)** — every public and private BBP, managed or
  unmanaged, regardless of program settings. Nothing for programs to configure;
  applies automatically.
- Phased rollout: **Aug 5** new accounts → **Aug 14** existing accounts with
  <150 reputation → **Aug 17** all remaining accounts. The old prerequisite of
  one valid report before verifying was removed at the same time.
- **VDPs are unaffected** — public vulnerability disclosure submissions remain
  open without ID verification.
- Mechanics: physical government-issued ID + live selfie via Veriff; no VPNs,
  anonymizers, emulators, jailbroken devices, or iCloud Private Relay; 18+;
  final status by email (typically ≤72h). **Verification expires after 12
  months** and must be renewed; missing renewal revokes the badge, BBP
  submission ability, and access to verification-required programs (re-invites
  are re-issued on success if the program allows).
- HackerOne also extended business-account scrutiny: at least one owner must
  act as legally authorized representative, verified every 12 months.

**Operational impact**: this is the hardest gate on the submission path — more
fundamental than trial-report caps or signal requirements. Any submission
workflow (human or automated) must maintain a current, unexpired ID
verification on the submitting account; a lapsed 12-month renewal silently
removes BBP submission ability mid-campaign. VDP-only lanes remain open
without it. Renewal prompts arrive one month before expiry — treat them as
mission-critical.

---

## How to use this page

- Check here before building submission automation: trial/signal mechanics
  gate what automation can even submit.
- When a program's response behavior changes, first check whether a
  platform-level change (not the program) explains it.
- Add new dated sections from the official changelog
  (https://docs.hackerone.com/sections/changelog) when material changes land.
