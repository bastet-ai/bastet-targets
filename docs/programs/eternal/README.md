# Eternal - HackerOne Bounty Program

**Program URL**: https://hackerone.com/eternal  
**Primary Domains**: eternal.com, eternal.gg  
**Last Updated**: 2025-09-01  
**Risk Level**: 🟡 MEDIUM  

## Program Overview

Eternal operates a high-activity bug bounty program with the second-highest total payouts in our 6-month analysis. Based on domain patterns and infrastructure, this appears to be a gaming or blockchain-focused platform with active security research engagement.

## Historical Activity (6-month window)

- **Total Payouts**: $9,300.00 (Rank #2)
- **Reports Resolved**: 12
- **Average Per Report**: $775.00
- **Activity Pattern**: Frequent awards in late August 2025, steady researcher engagement
- **High Value**: Second highest total payouts despite moderate report volume

## Attack Surface Analysis (2025-09-01)

### Discovered Infrastructure

#### eternal.com
- **Subdomains Identified**: 3 active subdomains
- **Live Web Services**: 6 responsive endpoints
- **Primary Platform**: Main business domain

#### eternal.gg  
- **Subdomains Identified**: 4 active subdomains
- **Live Web Services**: 0 responsive (inactive/redirected)
- **Gaming Domain**: Common TLD for gaming platforms

### Key Subdomains
| Subdomain | Domain | Purpose | Security Notes |
|-----------|--------|---------|---------------|
| `www.eternal.com` | .com | Main Platform | Primary application endpoint |
| `api.eternal.com` | .com | API Services | Backend API infrastructure |
| `auth.eternal.gg` | .gg | Authentication | Authentication service |
| `blog.eternal.gg` | .gg | Content | Blog/content platform |

### Security Analysis
- **Dual Domain Strategy**: Uses both .com and .gg domains
- **Gaming/Blockchain Focus**: Domain patterns suggest gaming or blockchain platform
- **Active Authentication**: Dedicated auth infrastructure
- **Smaller Surface**: More focused attack surface than enterprise targets

### Notable Characteristics
- **High Payout Ratio**: Excellent payout-to-report ratio suggests quality focus
- **Gaming Industry**: .gg TLD commonly used by gaming companies
- **Modern Architecture**: Clean subdomain structure indicates modern design
- **Security Investment**: High bounty amounts suggest significant security budget

## Scope Snapshot (as of 2025-09-01)

See [scope.md](scope.md) for full policy text and breakdown.

### Likely Focus Areas (based on industry patterns)
- Gaming platform vulnerabilities
- User account and virtual asset security
- Payment processing and virtual economies
- Anti-cheat and game integrity systems
- Community and social features

## Research Priorities

### Phase 1 - Platform Identification
- [ ] Determine exact nature of platform (gaming/blockchain/other)
- [ ] Map complete application functionality
- [ ] Identify core business logic and assets
- [ ] Understand user ecosystem and value flows

### Phase 2 - Authentication & Account Security
- [ ] Authentication flow analysis across domains
- [ ] Account takeover and privilege escalation
- [ ] Session management and token security
- [ ] Multi-factor authentication implementation

### Phase 3 - Business Logic Security
- [ ] Virtual asset/currency manipulation
- [ ] Game logic and integrity vulnerabilities
- [ ] Economic system abuse and exploitation
- [ ] Community feature abuse and social engineering

## Notes & Intelligence

- **High Value Target**: Second highest bounty program by total payouts
- **Quality Over Quantity**: Low report count but high average payout
- **Gaming Industry**: Domain patterns suggest gaming/entertainment focus
- **Active Program**: Recent high-value awards indicate active security investment

### Technical Observations
- Clean, modern subdomain architecture
- Dual-domain strategy with functional separation
- Authentication infrastructure suggests user account focus
- Limited public-facing attack surface

### Research Considerations
- **Industry-Specific Vectors**: Gaming platforms have unique vulnerability classes
- **Virtual Assets**: Potential for economic impact beyond traditional data breaches
- **User-Generated Content**: Gaming platforms often have extensive UGC features
- **Real-Time Systems**: Gaming requires low-latency, high-availability systems

### Strategic Importance
- High payout amounts suggest significant security budget allocation
- Gaming industry has unique compliance and security requirements
- Virtual economies create novel attack vectors and impact scenarios
- Community-driven platforms have complex trust and safety considerations

### Recent Intelligence (2026)
- **2026-11-17 DIRECT SOURCE VERIFICATION (first direct re-verify since 2025-09-01)**: Scope re-fetched from HackerOne's anonymous public projection (`POST https://hackerone.com/graphql`, `team(handle:"eternal")` with `structured_scopes(archived:false)`). Verified live: program **public_mode / open**, **max_updated_at = 2026-03-23T21:45:13Z**, **49 non-archived scope assets**. **Important correction to the 2025-era notes above: the "gaming platform" characterization does not match the live scope.** Eternal's public scope is the **Eternal (formerly Zomato) quick-commerce/local-services estate**: wildcards `*.zomato.com`, `*.blinkit.*` surface via `blinkit.com`/`bistro-api.blinkit.com`, `*.grofers.com`/`*.grofer.io`, `*.runnr.in` + `staging*.runnr.in`, `*.hyperpure.com` (+dev trio), `*.insider.in`/`*.ticketnew.com`/`*.tktnew.com`, `*.district.in`/`*.edition.in`, `*.zdev.net`, `*.zomans.com` + `*.ali.zomans.com`, `*.eternal.com`, `*.zomatoportugal.com`, `*.bstro.io`; URLs incl. `winecellar.zomato.com`, `api.grofers.com`, `api2.grofers.com`, `https://mcp-server.zomato.com/mcp` (notable MCP endpoint), `send.zomato.com`, `www.zomatobook.com`, business/blog/community/success subdomains, `dev{,api,pod}.hyperpure.com`; tier buckets *Tier 1/2/3*, *All Assets (other than Blinkit)*, *Data Protection Program*; Google Play IDs `com.application.zomato{,.district,.merchant,.ordering}`, `com.grofers.customerapp`, `com.blinkit.bistro`; Apple IDs 434613896, 960335206, 6670203019, 6670536058. Treat all "gaming industry" analysis above as unverified legacy text pending rewrite. Source: https://hackerone.com/graphql (anonymous team/structured_scopes projection, fetched 2026-11-17), canonical https://hackerone.com/eternal/policy_scopes

---

**Last Enumeration**: 2025-09-01  
**Last Intel Review**: 2026-11-17 (direct anonymous HackerOne GraphQL projection re-verify: public_mode/open, max_updated_at 2026-03-23 — no drift this cycle; 49 non-archived assets; program is quick-commerce (Zomato/Blinkit/Grofers), not gaming — legacy notes flagged for rewrite)  
**Next Review**: 2026-12-17 (monthly scope watch via anonymous GraphQL projection; escalate on max_updated_at change)  
**Analyst**: Bastet Security Research Team

<!-- bastet-public-scope-link:v1 -->
## Current public scope

[Verified public scope and policy](public-scope.md)

Historical research notes on this page are not verified authorization or current scope. Consult the linked public snapshot and the current HackerOne policy before testing.
<!-- /bastet-public-scope-link:v1 -->
