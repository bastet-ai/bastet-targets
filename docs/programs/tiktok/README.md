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

### Scope Watch (cross-verified via multiple independent trackers 2026-10-02; HackerOne page itself still JS-rendered)
- **2026-08 (verified via 3 independent trackers)**: Prior single-tracker lead is now corroborated by bbscope.com, bountyhunte.rs, and bugrater-style mirrors. TikTok HackerOne program currently lists **68 scope entries / ~35 in-scope asset groups**. In-scope set confirmed to include commerce/pay assets absent from our 2025-09-01 snapshot: `*.pipopay.com` (wildcard, bounty-eligible, Critical), `*.soundon.global` + `www.soundon.global`, `*.tiktokpublishers.com`, Tokopedia commerce assets (`affiliate-id.tokopedia.com`, `seller-id.tokopedia.com`, `shop-id.tokopedia.com`, `pay.tokopediax.com`), `fp-sg.tiktokv.com`, TikTok Shop Seller Center app (`com.tiktokshop.seller`). Sources: https://bbscope.com/program/h1/tiktok , https://bountyhunte.rs/programs/tiktok
- **2026-08-17 scope change (new, verified)**: Program **moved US-entity assets OUT of scope**: `drama.tiktok.com`, `shortdrama.tiktok.com`, Android `com.ss.android.ttmd.video`, iOS `6754134922`. This continues a clear pattern of US-joint-venture carve-outs — out-of-scope now also holds `*tiktokv.us`, `*us.tiktokv.com`, `usds.tiktok.com`, `usdsjv.tiktok.com`, `p16-*/p19-* tiktokcdn-us.com` endpoints, and `https://developers.tiktok.com/minis/`. The `ttmd` suffix and usds/usdsjv hosts align with the TikTok US JV entity structure. Hunting read: **do not submit against US-entity assets** (recently and deliberately excluded), while the non-US payments (pipopay) + Tokopedia commerce surface remains the freshest in-scope attack territory in this program. Scope-change history (158 entries) tracked at https://bbscope.com/program/h1/tiktok
- **Caveat**: All of the above is tracker-derived, not scraped from hackerone.com/tiktok directly. Trackers lag and can duplicate entries (bbscope shows several doubled change rows). Re-verify on the program page before submitting any report that hinges on an asset's eligibility.
- **2026-11-15 DIRECT SOURCE VERIFICATION (closes the 2026-11-01 re-verify task)**: Scope re-fetched directly from HackerOne's anonymous public projection (`POST https://hackerone.com/graphql`, `team(handle:"tiktok")` with `structured_scopes(archived:false)` — the same read-only query this wiki's public-scope publisher uses), not tracker-derived. Verified live: program **public_mode, submissions open, bounties offered**; **structured_scope_versions.max_updated_at = 2026-08-17T11:21:57Z — no scope change since the 2026-08-17 US-entity carve-out.** **49 non-archived scope assets** enumerated: all 2026-08 tracker leads confirmed as real bounty-eligible entries — `*.pipopay.com`, `*.soundon.global` + `www.soundon.global`, `*.tiktokpublishers.com`, `*.tiktokcdn.com`, Tokopedia commerce quartet (`affiliate-id`/`seller-id`/`shop-id.tokopedia.com`, `pay.tokopediax.com`), `fp-sg.tiktokv.com`, `partner.tiktokshop.com`, `shop.tiktok.com`, `effecthouse.tiktok.com`, `creatormarketplace.tiktok.com`, `www.pangleglobal.com`, `com.tiktokshop.seller` + 4 other Google Play IDs + 4 Apple app IDs, `*.tiktokv.com`, an `Other Asset (Campaigns)` bucket. All US-JV carve-outs confirmed sitting in the **bounty-ineligible** set: `drama.tiktok.com`, `shortdrama.tiktok.com`, `usds.tiktok.com`, `usdsjv.tiktok.com`, `com.ss.android.ttmd.video`, iOS `6754134922`, `*tiktokv.us`, `*us.tiktokv.com`, `p16-*/p19-*.tiktokcdn-us.com`, `developers.tiktok.com/minis/`. **Correction to the 2026-10-02 entry: the tracker "68 scope entries" figure overcounts — the direct anonymous source shows 49 non-archived assets (trackers include archived/duplicated rows). Trust the direct projection.** Hunting read unchanged: non-US payments (pipopay) + Tokopedia commerce + TikTok Shop assets are the freshest in-scope territory; US-JV assets remain a hard do-not-submit line. Source: https://hackerone.com/graphql (anonymous team/structured_scopes projection, fetched 2026-11-15), canonical https://hackerone.com/tiktok/policy_scopes

---

**Last Enumeration**: 2025-09-01  
**Last Intel Review**: 2026-11-15 (direct anonymous HackerOne GraphQL projection re-verify: public_mode/open, max_updated_at 2026-08-17 — no scope drift; 49 non-archived assets enumerated; tracker 68-entry figure corrected)  
**Next Review**: 2026-12-15 (monthly scope watch via anonymous GraphQL projection; escalate on max_updated_at change)  
**Analyst**: Bastet Security Research Team

<!-- bastet-public-scope-link:v1 -->
## Current public scope

[Verified public scope and policy](public-scope.md)

Historical research notes on this page are not verified authorization or current scope. Consult the linked public snapshot and the current HackerOne policy before testing.
<!-- /bastet-public-scope-link:v1 -->
