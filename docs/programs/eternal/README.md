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

---

**Last Enumeration**: 2025-09-01  
**Next Review**: 2025-10-01  
**Analyst**: Bastet Security Research Team