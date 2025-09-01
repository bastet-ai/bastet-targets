# OKG (OKX) - HackerOne Bounty Program

**Program URL**: https://hackerone.com/okg  
**Last Updated**: 2025-09-01  

## Historical Activity (recent)

- OKG/OKX consistently ranks in top 3 programs with significant payouts.
- See High-Value index for 6-month payout ranking and cadence.
- Summaries derived from HackerOne hacktivity "BountyAwarded" events.

## Scope Snapshot (as of 2025-09-01)

See scope.md for full text capture and breakdown.

**Primary Domains**: okx.com, okg.com, oklink.com

## Attack Surface Enumeration (2025-09-01)

**Discovered Subdomains**: 32 (okx.com), 32 (okg.com)
**Live Web Services**: 2 (okx.com), 1 (okg.com)
**Services with Interesting Endpoints**: 2

### Key Findings:
- **app.okx.com**: Main application endpoint with `/status` endpoint accessible
- **Extensive Infrastructure**: 32 high-value subdomains including:
  - `accounts.okx.com`, `admin.okx.com`, `api.okx.com` 
  - `auth.okx.com`, `beta.okx.com`, `dashboard.okx.com`
  - `oauth.okx.com`, `sso.okx.com`, `secure.okx.com`
  - `staging.okx.com`, `test.okx.com`, `dev.okx.com`
- **Security Infrastructure**: Has `.well-known/security.txt`, robots.txt, sitemap.xml
- **API Endpoints**: Multiple API-related subdomains and GraphQL endpoints

### Research Priorities:
- **Authentication System Analysis**: Focus on `auth.okx.com`, `oauth.okx.com`, `sso.okx.com` for SSO vulnerabilities
- **Admin Panel Investigation**: Probe `admin.okx.com` and `dashboard.okx.com` for access control issues
- **API Security Testing**: Deep-dive into `api.okx.com` for rate limiting, authorization bypasses
- **Development Environment Exposure**: Investigate `staging.okx.com`, `test.okx.com`, `dev.okx.com` for information leakage
- **Cryptocurrency Platform Specifics**: Focus on trading, wallet, and financial transaction security

## Notes

- Track program policy updates and scope changes monthly.
- OKX is a major cryptocurrency exchange - high-impact financial vulnerabilities prioritized.
