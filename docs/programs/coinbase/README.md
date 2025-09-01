# Coinbase - HackerOne Bounty Program

**Program URL**: https://hackerone.com/coinbase  
**Last Updated**: 2025-09-01  

## Historical Activity (recent)

- Coinbase operates an active HackerOne program with substantial rewards
- Critical vulnerabilities start at $50,000 according to their blog
- Also has a $5M smart contract bounty program via Cantina
- Major cryptocurrency exchange with extensive bug bounty history

## Scope Snapshot (as of 2025-09-01)

See scope.md for full text capture and breakdown.

**Known Primary Domains**: 
- coinbase.com (main platform)
- pro.coinbase.com (Coinbase Pro)
- wallet.coinbase.com (Coinbase Wallet)

## Attack Surface Enumeration (2025-09-01) - COMPREHENSIVE ANALYSIS COMPLETE

**Discovery Statistics:**
- **Total Subdomains**: 519 discovered
- **Live Web Services**: 222 active endpoints
- **Verified Interesting Endpoints**: 3 (all properly protected)
- **Business Units Mapped**: 7+ major service divisions

### Technology Stack Analysis:
- **Primary CDN**: Cloudflare (universal coverage)
- **Cloud Infrastructure**: Amazon Web Services (AWS)
  - CloudFront distribution
  - S3 storage integration
  - Enterprise-grade architecture
- **Security Implementation**: 
  - Cloudflare Bot Management
  - HSTS headers universal
  - reCAPTCHA integration
  - Proper SSL certificate management
- **Content Management**: Contentful CMS integration
- **Third-Party Services**: PayPal, Plaid, Onfido, LinkedIn Ads

### Core Business Units Infrastructure:

#### 🏦 **Exchange & Trading Platforms:**
- **coinbase.com**: Main consumer exchange platform
- **exchange.coinbase.com**: Institutional trading platform (Coinbase Pro successor)
- **international.coinbase.com**: International markets and compliance
- **institutional.coinbase.com**: High-volume institutional services

#### 🛠️ **Developer & Enterprise Services:**
- **developer.coinbase.com**: Coinbase Developer Platform (CDP)
- **cloud.coinbase.com**: Cloud infrastructure services
- **console.cloud.coinbase.com**: Developer console and management
- **api.coinbase.com**: Core API gateway (redirects to versioned APIs)

#### 💼 **Business & Commerce:**
- **commerce.coinbase.com**: Merchant payment processing
- **custody.coinbase.com**: Institutional custody services
- **prime.coinbase.com**: Prime brokerage for institutions

#### 🔗 **API Infrastructure:**
```
Discovered API Endpoints:
- api.coinbase.com (main gateway)
- api.custody.coinbase.com (custody services)
- api.developer.coinbase.com (developer tools)
- api.cdp.coinbase.com (cloud platform)
- api-public.sandbox.pro.coinbase.com (testing environment)
- api-public.sandbox.exchange.coinbase.com (exchange testing)
```

### SSL Certificate Analysis:
```
Primary Certificate: coinbase.com
SAN Coverage: *.cdp.coinbase.com (Developer Platform wildcard)
Validity: 2025-08-03 to 2025-11-01
Provider: Let's Encrypt/Cloudflare
```

### Network Infrastructure (Nmap Results):
```
Open Ports on coinbase.com:
- 80/tcp: HTTP (redirects to HTTPS)
- 443/tcp: HTTPS (main application)
- 8080/tcp: HTTP proxy (redirects)
- 8443/tcp: HTTPS proxy
All services behind Cloudflare proxy
```

### Research Priorities & Interesting Leads:

#### 🎯 **High Priority Research Areas:**

1. **Multi-Platform Authentication Security**
   - Cross-platform SSO implementation (consumer, pro, custody, commerce)
   - OAuth flow security across business units
   - API key management and rotation policies
   - Regional authentication differences

2. **Trading Engine & Business Logic**
   - Order execution algorithms and manipulation
   - Cross-platform arbitrage opportunities
   - Liquidity pool interaction vulnerabilities
   - Flash loan integration security

3. **Developer Platform (CDP) Security**
   - Cloud infrastructure provisioning vulnerabilities
   - API rate limiting and abuse prevention
   - Sandbox environment isolation
   - Developer key privilege escalation

4. **Institutional vs Consumer Separation**
   - Data isolation between retail and institutional platforms
   - Privilege escalation from consumer to institutional access
   - Compliance control bypasses
   - Cross-platform transaction analysis

#### 🔍 **Interesting Technical Leads:**

- **Sandbox Environment Discovery**: Multiple sandbox APIs suggest extensive testing infrastructure
- **CDP Platform Integration**: Wildcard certificate coverage indicates comprehensive developer services
- **Multi-Business Unit Architecture**: 7+ distinct service domains with potential integration vulnerabilities
- **Payment Integration Complexity**: PayPal, Plaid integration suggests multiple payment flow attack vectors
- **KYC/AML Integration**: Onfido integration for identity verification presents social engineering opportunities

#### 📊 **Business Logic Focus Areas:**

- **Custody vs Exchange Separation**: Multi-billion dollar custody services with strict separation requirements
- **Compliance Engine**: International regulatory compliance across multiple jurisdictions
- **Payment Processing**: Commerce platform handling merchant transactions
- **Institutional Onboarding**: Prime and institutional customer verification workflows
- **Cross-Platform Analytics**: Data flow between consumer, institutional, and developer platforms

#### 🛡️ **Security Model Analysis:**

- **Defense in Depth**: Cloudflare + AWS + application-level security
- **Certificate Management**: Proper SSL implementation with wildcard coverage
- **API Versioning**: Structured API evolution with sandbox environments
- **Regional Isolation**: International compliance through geographic separation

### Next Phase Research Recommendations:

1. **Authenticated API Testing**: 
   - Create test accounts across platforms (consumer, developer, institutional)
   - Analyze cross-platform privilege escalation
   - Test API rate limiting and abuse detection

2. **Business Logic Deep Dive**:
   - Trading engine logic analysis
   - Cross-platform transaction flow mapping
   - Compliance control effectiveness testing

3. **Infrastructure Analysis**:
   - CDP platform security assessment
   - Sandbox environment escape testing
   - Multi-tenant isolation verification

## Notes

- Major cryptocurrency exchange with high-value targets
- Substantial bug bounty payouts indicate serious security program
- Multiple platforms: Exchange, Pro, Wallet, Commerce
- Track program policy updates and scope changes monthly.
