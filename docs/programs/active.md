# Active Programs

This page tracks currently active HackerOne bounty programs that are under research or monitoring.

!!! info "Status Update"
    Last updated: **2026-10-16** - Platform-move watch: Block consolidated five Bugcrowd programs into one private HackerOne program (see Recent Activity). Public-only monitoring otherwise continues.

## 🎯 Currently Active

*No active programs documented yet.*

### Auto-discovered (Public-only)

- [HackerOne Public Program Index (auto-generated)](hackerone-public.md)

This section will contain:
- Programs currently being researched
- Recent scope changes or updates
- High-priority targets
- Ongoing reconnaissance activities

## 📅 Recent Activity

- 2026-10-16: **Block (Square, Cash App, Afterpay, TIDAL, Block Open Source) has moved its bug bounty from Bugcrowd to HackerOne.** Block Security announced on 2026-10-14 that as of **2026-10-07** the program operates on HackerOne as a **single Block-wide, private, invite-only** program, consolidating the five separate Bugcrowd engagements (Square, Cash App, Afterpay, TIDAL, Block OSS). All five Bugcrowd programs stopped accepting new submissions **2026-09-30** and show "paused" as of 2026-10-01; pre-cutoff reports continue triage under old terms. Researchers with prior accepted findings can request an invite via bugbounty@block.xyz; Block says growth will come "in waves." Block historically paid >$1M cumulative through these programs; Bugcrowd 3-month stats before pause: Afterpay avg payout ~$1,029, 75% validated ≤18 days. **Hunting read: the entire Block attack surface (payments/fintech mobile + web: cash.app, squareup.com, afterpay.com, tidal.com, block.xyz, plus OSS repos with BUG-BOUNTY.md) just collapsed from five programs with separate scopes into one private HackerOne front door — invitation is now the gate, and prior-credit is the documented invitation lever. Old Bugcrowd scope notes (e.g., Cash App's "unlisted but Block-owned subdomains may be accepted on review," Afterpay merchant sandbox keys, exclusions for rate-limiting/open-redirect/merchant sites) are stale until the HackerOne policy page is visible post-invite; do not test on old Bugcrowd scope assumptions. Watch for the program becoming public or waves of invites; monitor hackerone.com directory for a block handle.** Sources: https://engineering.block.xyz/blog/blocks-bug-bounty-program-is-moving-to-hackerone (2026-10-14), https://bugcrowd.com/engagements/cashapp , https://bugcrowd.com/engagements/square , https://bugcrowd.com/engagements/afterpay , https://bugcrowd.com/engagements/blockopensource (all showing paused state, fetched 2026-10-16).
- 2026-03-31: Public HackerOne sitemap surfaced several recently updated program pages: `s-pankki` (2026-03-21), `scopely` (2026-03-28), `savedroid` (2025-09-26), `saytechnologies` (2025-09-21), and `secnews` (2025-09-21). Rechecked 2026-10-06: the first two accept submissions, `savedroid` and `saytechnologies` have submissions disabled, and `secnews` is paused. Public visibility is not permission to test.
- 2026-03-31: Community signal stayed strong on AI/MCP tooling, prompt-layer visibility, hardened image/SBOM expectations, tracking pixels with companion JS, and supply-chain compromise hygiene.

## 🚀 Quick Actions

### Start Researching a New Program

1. **Choose a Program**: Select from [HackerOne's directory](https://hackerone.com/directory)
2. **Create Documentation**: Use the [program template](templates.md)
3. **Initial Reconnaissance**: Document scope and target discovery
4. **Update This Page**: Add the program to the active list

### Template for Active Program Entry

```markdown
## [Program Name](program-directory/)

**Company**: Example Corp  
**Launch Date**: YYYY-MM-DD  
**Last Updated**: YYYY-MM-DD  
**Scope**: Web applications, APIs, Mobile apps  
**Max Bounty**: $X,XXX  

**Current Status**: Initial reconnaissance / Active testing / Reporting phase

**Key Findings**:
- Finding 1 (Severity Level)
- Finding 2 (Severity Level)

**Next Steps**:
- [ ] Task 1
- [ ] Task 2

---
```

## 📊 Program Metrics

When programs are added, this section will display:
- Total active programs
- Average program duration
- Most recent additions
- Programs with recent updates

## 🔔 Monitoring

Set up monitoring for:
- Scope changes in active programs
- New programs added to HackerOne
- Updates to program policies or rewards
- Community discussions and tips

---

*Ready to add your first program? Use the [program template](templates.md) to get started!*
