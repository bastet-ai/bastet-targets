# TikTok (ByteDance Ltd.) - HackerOne Bounty Program

## Company Profile

**TikTok** is a short-form video hosting service owned by Chinese company ByteDance Ltd. Founded in 2016 as "Douyin" in China, it was launched internationally as "TikTok" in 2018, becoming one of the world's most downloaded mobile applications and the fastest-growing social media platform in history.

**Wikipedia**: https://en.wikipedia.org/wiki/TikTok

### Corporate Overview:
- **Founded**: September 2016 (as Douyin), International launch: 2018
- **Parent Company**: ByteDance Ltd. (founded 2012 by Zhang Yiming)
- **Headquarters**: Singapore (TikTok), Beijing (ByteDance)
- **Employees**: ~110,000+ worldwide (ByteDance total)
- **CEO**: Shou Zi Chew (TikTok), Liang Rubo (ByteDance)

### Financial Profile (2024):
- **Parent Company Valuation**: ~$220 billion USD (ByteDance)
- **Annual Revenue**: ~$80 billion USD (ByteDance total, 2023)
- **Global Users**: 1+ billion monthly active users
- **Market Presence**: 150+ countries and regions
- **App Downloads**: 4.7+ billion total downloads

### Business Evolution & Key Events:
- **2012**: ByteDance founded by Zhang Yiming
- **2016**: Douyin launched in China
- **2017**: Acquired Musical.ly for $1 billion
- **2018**: Merged Musical.ly with TikTok for global expansion
- **2020-2025**: Ongoing regulatory challenges and data localization efforts
- **2023**: TikTok Shop launched (e-commerce integration)

### Key Products & Services:
- **TikTok**: Short-form video social media platform
- **TikTok Shop**: E-commerce marketplace integrated into the app
- **TikTok for Business**: Advertising and marketing platform
- **TikTok Live**: Live streaming and virtual gifting
- **CapCut**: Video editing mobile application

### Regulatory & Security Landscape:
- **Data Localization**: Project Texas (US user data stored in Oracle servers)
- **Government Scrutiny**: Banned in India (2020), ongoing US regulatory review
- **Content Moderation**: AI-powered systems + human reviewers
- **Algorithm Transparency**: Limited disclosure due to competitive concerns

---

## HackerOne Bug Bounty Program

**Program URL**: https://hackerone.com/tiktok  
**Primary Domain**: tiktok.com  
**Last Updated**: 2025-09-01  
**Risk Level**: 🔥 MEDIUM-HIGH  

## Program Overview

TikTok operates a significant bug bounty program focused on securing their global short-form video platform. The program demonstrates consistent engagement with the security research community and regular bounty awards.

## Historical Activity (6-month window)

- **Total Payouts**: $6,000.00 (Rank #4)
- **Reports Resolved**: 12
- **Average Per Report**: $500.00
- **Activity Pattern**: Regular bounty activity throughout August 2025
- **Focus Areas**: Mobile app security, API endpoints, content delivery

## Attack Surface Analysis (2025-09-01)

### Discovered Infrastructure
- **Subdomains Identified**: 9 active subdomains
- **Live Web Services**: 10 responsive endpoints
- **Primary Attack Vectors**: API services, authentication flows, support systems

### Key Subdomains
| Subdomain | Purpose | Security Notes |
|-----------|---------|---------------|
| `api.tiktok.com` | API Gateway | Dedicated API infrastructure |
| `login.tiktok.com` | Authentication | Extensive endpoint exposure |
| `support.tiktok.com` | Customer Support | Support backend accessible |
| `test.tiktok.com` | Development | Test environment exposed |
| `www.tiktok.com` | Main Platform | Primary application endpoint |

### Critical Findings
1. **API Infrastructure**: Dedicated `api.tiktok.com` subdomain with broad surface area
2. **Authentication Surface**: `login.tiktok.com` exposes multiple sensitive endpoints
3. **Support System Access**: Customer service backend potentially accessible
4. **Development Leakage**: Test environment externally reachable
5. **Endpoint Enumeration**: Multiple services respond to common path probing

### Security Analysis
- **API Gateway**: Centralized API management via dedicated subdomain
- **Authentication Service**: Separate login service with extensive endpoints
- **Support Infrastructure**: Customer service systems discoverable
- **Development Environment**: Test systems accessible for analysis

## Scope Snapshot (as of 2025-09-01)

See [scope.md](scope.md) for full policy text and breakdown.

### Key Focus Areas
- Mobile application security (iOS/Android apps)
- Web platform vulnerabilities
- API security and abuse prevention
- Content delivery network security
- User data protection

## Research Priorities

### Phase 1 - API Security Assessment
- [ ] API endpoint comprehensive enumeration
- [ ] Authentication and authorization bypass testing
- [ ] Rate limiting and abuse prevention analysis
- [ ] Mobile API vs web API differences

### Phase 2 - Authentication Flow Analysis
- [ ] Login service deep-dive analysis
- [ ] Session management review
- [ ] Multi-factor authentication bypass
- [ ] Social login integration security

### Phase 3 - Platform-Specific Vectors
- [ ] Video upload and processing pipeline
- [ ] Content moderation bypass techniques
- [ ] User-generated content XSS/injection
- [ ] Mobile app specific vulnerabilities

## Notes & Intelligence

- **Mobile Focus**: Primary application is mobile-first with web interface
- **API-Driven**: Heavy reliance on API services for all functionality
- **Global Scale**: Massive user base requires robust security measures
- **Content Platform**: Unique attack vectors around user-generated content

### Technical Observations
- Dedicated API infrastructure suggests microservices architecture
- Separate authentication service indicates complex identity management
- Support system exposure may provide administrative access vectors
- Test environment accessibility creates information disclosure risks

### Recent Activity Patterns
- Consistent bounty awards in August 2025
- Focus on API and authentication vulnerabilities
- Mobile security research prioritized
- Regular program policy updates

---

**Last Enumeration**: 2025-09-01  
**Next Review**: 2025-10-01  
**Analyst**: Bastet Security Research Team