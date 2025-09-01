# OKX (formerly OKEx) - HackerOne Bounty Program

## Company Profile

**OKX** is a blockchain technology company operating one of the world's largest cryptocurrency exchanges by daily trading volume. Founded in 2013 by Star Xu in China, the company was originally launched as "Okcoin" and later rebranded to "OKEx" in 2017, before adopting the "OKX" name in 2022.

**Wikipedia**: https://en.wikipedia.org/wiki/OKX

### Corporate Overview:
- **Founded**: 2013 (as Okcoin → OKEx 2017 → OKX 2022)
- **Founder**: Star Xu (Mingxing Xu)
- **Headquarters**: San Jose, California, USA (Global HQ)
- **Employees**: ~5,000+ worldwide (2025)
- **Global Offices**: New York, Dubai, Singapore, Turkey, Australia, Brazil, EEA

### Financial Profile (2025):
- **Daily Trading Volume**: #2 globally by volume
- **Supported Assets**: 350+ cryptocurrencies and tokens
- **Global Users**: 50+ million registered users
- **Regional Licenses**: USA, UAE, EU, Singapore, Australia
- **Market Position**: World's second-largest crypto exchange

### Business Evolution & Recent Acquisitions:
- **2013**: Founded as Okcoin (spot trading)
- **2017**: Rebranded to OKEx, added derivatives trading
- **2022**: Rebranded to OKX, expanded Web3 ecosystem
- **2025**: MiFID II license acquisition for EU institutional services
- **Strategy**: Web3 infrastructure, DeFi integration, regulatory compliance

### Key Products & Services:
- **OKX Exchange**: Spot and derivatives trading platform
- **OKX Wallet**: Self-custody Web3 wallet with DeFi integration
- **OKX Chain**: Layer-1 blockchain (formerly OKC)
- **OKX NFT**: NFT marketplace and trading platform
- **OKX DeFi**: Decentralized finance protocol integrations

### Notable Features:
- **OKTC Safe**: Multi-signature wallet solution
- **Cross-Chain Bridge**: Supporting 40+ blockchains
- **Layer 2 Solutions**: X-Layer protocol development
- **Institutional Services**: Prime brokerage, custody solutions

---

## HackerOne Bug Bounty Program

**Program URL**: https://hackerone.com/okg  
**Last Updated**: 2025-09-01  

## Historical Activity (recent)

- OKG/OKX consistently ranks in top 3 programs with significant payouts.
- See High-Value index for 6-month payout ranking and cadence.
- Summaries derived from HackerOne hacktivity "BountyAwarded" events.

## Scope Snapshot (as of 2025-09-01)

See scope.md for full text capture and breakdown.

**Primary Domains**: okx.com, okg.com, oklink.com

## Attack Surface Enumeration (2025-09-01) - UPDATED WITH ENHANCED TOOLS

**Comprehensive Discovery Statistics:**
- **okx.com**: 219 subdomains, 110 live services
- **okg.com**: 49 subdomains, 7 live services  
- **oklink.com**: 72 subdomains, 37 live services
- **Total**: 337 subdomains, 154 live services
- **Verified Interesting Endpoints**: 2 (all properly protected)

### Technology Stack Analysis:
- **Primary CDN**: Cloudflare (95%+ coverage)
- **Cloud Providers**: AWS, Google Cloud (mixed infrastructure)
- **Web Framework**: React 19.0.0 (modern frontend)
- **Security Implementation**: Bot Management, HSTS widespread
- **Backend**: Nginx, Tengine (load balancing/proxy)

### Core Business Infrastructure:
- **Main Platform**: www.okx.com (exchange), app.okx.com (trading)
- **Regional Variants**: us.okx.com (US), hk.okx.com (HK), tr.okx.com (Turkey), eea.okx.com (EEA)
- **Web3 Integration**: web3.okx.com (wallet), wallet.okx.com (crypto services)
- **Blockchain Infrastructure**: chainrpc.okx.com, xlayerrpc.okx.com, oktcsafe.okx.com

### API & WebSocket Ecosystem:
```
Real-time Trading Infrastructure:
- wspri.okx.com, wspap.okx.com, wsdex.okx.com
- Regional WebSockets: wsus.okx.com, wseea.okx.com  
- All properly protected (404/405 for unauthorized access)
```

### Notable Third-Party Integrations:
- **ICP Integration**: Multiple *.icp0.io blockchain domains
- **DeFi Protocols**: Various DEX and protocol integrations
- **Customer Support**: HubSpot integration infrastructure

### Research Priorities & Interesting Leads:

#### 🎯 **High Priority Research Areas:**
1. **Authentication Ecosystem Security**
   - Complex SSO implementation across regional variants
   - OAuth flow analysis: `oauth.okx.com`, `sso.okx.com`
   - Cross-domain authentication token handling
   - Regional authentication bypass potential

2. **Trading API Security & Business Logic**
   - WebSocket authentication mechanisms (multiple ws*.okx.com endpoints)
   - Real-time trading order manipulation
   - Rate limiting effectiveness across trading pairs
   - Cross-region arbitrage logic flaws

3. **Web3 & Blockchain Integration**
   - Wallet connectivity security (`web3.okx.com`, `wallet.okx.com`)
   - Blockchain RPC endpoint abuse (`chainrpc.okx.com`, `xlayerrpc.okx.com`)
   - Smart contract interaction validation
   - Cross-chain bridge security

4. **Regional Infrastructure Analysis**
   - Geo-blocking bypass techniques (US vs international)
   - Regional compliance control differences
   - Cross-regional data flow analysis
   - Regulatory arbitrage opportunities

#### 🔍 **Interesting Technical Leads:**
- **OKTC Safe Integration**: Custom blockchain tools (`oktcsafe.okx.com`, `okctools.okx.com`)
- **ICP Blockchain Integration**: Multiple Internet Computer domains suggest novel DeFi features
- **Layer Protocol Implementation**: `xlayer*` endpoints indicate proprietary L2 solution
- **HubSpot Customer Data Flow**: Potential for social engineering attack vectors

#### 📊 **Business Logic Focus Areas:**
- **Trading Engine**: Order execution, slippage manipulation, flash loan integration
- **Custody Services**: Multi-signature wallet implementation, key management
- **Yield Farming**: DeFi integration, liquidity pool manipulation
- **Cross-Exchange Arbitrage**: Price oracle manipulation, MEV opportunities

## Notes

- Track program policy updates and scope changes monthly.
- OKX is a major cryptocurrency exchange - high-impact financial vulnerabilities prioritized.
