# Uber Technologies Inc. - HackerOne Bounty Program

## Company Profile

**Uber Technologies Inc.** is an American multinational transportation and delivery company founded in 2009 by Garrett Camp and Travis Kalanick in San Francisco, California. Originally launched as "UberCab," the company revolutionized urban transportation through its ride-sharing platform.

**Wikipedia**: https://en.wikipedia.org/wiki/Uber

### Corporate Overview:
- **Founded**: March 2009 (as UberCab, rebranded to Uber in 2010)
- **Headquarters**: San Francisco, California, USA
- **Employees**: ~32,800 worldwide (2024)
- **CEO**: Dara Khosrowshahi (since 2017, replaced Travis Kalanick)
- **Public Company**: Listed on NYSE as UBER (IPO: May 2019)

### Financial Profile (2024):
- **Market Cap**: ~$150 billion USD
- **Annual Revenue**: ~$37.3 billion USD (2023)
- **Operations**: 70+ countries, 10,000+ cities worldwide
- **Active Users**: 150+ million monthly active platform consumers

### Business Evolution:
- **2009-2012**: Ride-sharing pioneer in luxury transportation
- **2014**: Expanded to food delivery (Uber Eats)
- **2016**: Autonomous vehicle research (Uber ATG, sold to Aurora in 2020)
- **2020**: IPO of Uber Freight, logistics platform
- **2021-Present**: Focus on profitability, super-app strategy

### Key Subsidiaries & Acquisitions:
- **Uber Eats**: Food delivery platform (major revenue driver)
- **Uber Freight**: Logistics and freight services
- **Postmates**: Acquired 2020 for $2.65 billion
- **Drizly**: Acquired 2021 for $1.1 billion (alcohol delivery)

---

## HackerOne Bug Bounty Program

**Program URL**: https://hackerone.com/uber  
**Primary Domain**: uber.com  
**Last Updated**: 2025-09-01  
**Risk Level**: 🔥 HIGH  

## Program Overview

Uber Technologies operates one of the largest and most active bug bounty programs on HackerOne, consistently ranking in the top tier for payouts and researcher engagement. The program focuses on securing user data and company assets across their global mobility platform.

## Historical Activity (6-month window)

- **Total Payouts**: $20,340.00 (Rank #1)
- **Reports Resolved**: 24
- **Average Per Report**: $847.50
- **Activity Pattern**: Consistent monthly awards during 2025-03 to 2025-08
- **Bounty Ranges**: $300 (Low) to $11,000-$15,000 (Critical)

## Attack Surface Analysis (2025-09-01)

### Discovered Infrastructure
- **Subdomains Identified**: 17 active subdomains
- **Live Web Services**: 25 responsive endpoints  
- **CDN Provider**: Google Cloud CDN
- **Load Balancer**: Envoy proxy
- **Application Server**: Custom `ufe` (Uber Front End)

### Key Subdomains
| Subdomain | Purpose | Security Notes |
|-----------|---------|---------------|
| `accounts.uber.com` | User accounts | Redirects to `account.uber.com` (singular) |
| `admin.uber.com` | Administrative | Accessible, returns redirects |
| `api.uber.com` | API Gateway | Primary API endpoint |
| `auth.uber.com` | Authentication | Complex redirect chains |
| `test.uber.com` | Development | Test environment exposed |

### Critical Findings
1. **GraphQL Endpoint**: `/graphql` on `accounts.uber.com` redirects to authentication service
2. **Domain Confusion**: `accounts.uber.com` → `account.uber.com` (potential attack vector)
3. **Administrative Access**: `admin.uber.com` responds with redirects
4. **API Surface**: Extensive API infrastructure across multiple subdomains
5. **Test Environment**: Development systems accessible externally

### Security Posture
- ✅ **Strong Headers**: HSTS, X-Frame-Options, X-XSS-Protection implemented
- ✅ **CDN Protection**: Google CDN with edge caching
- ⚠️ **Complex Auth**: Multiple redirect flows increase attack surface
- ⚠️ **Admin Exposure**: Administrative interfaces discoverable
- ⚠️ **Test Leakage**: Development environments externally accessible

## Scope Snapshot (as of 2025-09-01)

See [scope.md](scope.md) for full policy text and breakdown.

### Key Scope Elements
- **Primary Focus**: User data protection and company asset security
- **In-Scope Domains**: Extensive asset list available via API endpoints
- **Special Testing**: SSRF Sheriff service for controlled testing
- **Rate Limits**: Respectful testing required
- **Notable Exclusions**: See full scope document

## Research Priorities

### Phase 1 - Authentication Analysis
- [ ] Deep-dive authentication flow mapping
- [ ] Session handling and JWT analysis  
- [ ] OAuth/SSO implementation review
- [ ] Cross-domain authentication bypass testing

### Phase 2 - API Security
- [ ] API endpoint enumeration and fuzzing
- [ ] Rate limiting bypass techniques
- [ ] Parameter pollution testing
- [ ] GraphQL query complexity abuse

### Phase 3 - Administrative Access
- [ ] Admin interface discovery and testing
- [ ] Privilege escalation vectors
- [ ] RBAC (Role-Based Access Control) bypass
- [ ] Administrative workflow abuse

## Notes & Intelligence

- **Responsive Team**: 95% response efficiency, average 17 hours to first response
- **Technical Focus**: High-quality submissions prioritized over volume
- **CVSS Scoring**: Uses CVSS 3.1 for most bounty calculations
- **Pay at Triage**: Minimum bounty paid at triage, full amount at resolution
- **Asset Discovery**: Official endpoints for authorized domain/IP lists

### Recent Observations
- Strong security header implementation across all tested endpoints
- Complex authentication architecture with multiple redirect services
- Extensive use of microservices architecture creating large attack surface
- Well-monitored infrastructure with detailed logging (visible in headers)

---

**Last Enumeration**: 2025-09-01  
**Next Review**: 2025-10-01  
**Analyst**: Bastet Security Research Team