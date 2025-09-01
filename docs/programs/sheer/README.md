# Sheer - HackerOne Bounty Program

**Program URL**: https://hackerone.com/sheer_bbp  
**Last Updated**: 2025-09-01  

## Historical Activity (recent)

- Consistently appears in high-value targets with regular bounty activity.
- See High-Value index for 6-month payout ranking and cadence.
- Summaries derived from HackerOne hacktivity "BountyAwarded" events.

## Scope Snapshot (as of 2025-09-01)

See scope.md for full text capture and breakdown.

**Primary Domains**: sheer.com, my.sheer.com

## Attack Surface Enumeration (2025-09-01)

**Discovered Subdomains**: 2
**Live Web Services**: 4
**Services with Interesting Endpoints**: 4

### Key Findings:
- **🚨 HIGH PRIORITY - beta.sheer.com**: 
  - `/admin` endpoint accessible (HTTPS & HTTP)
  - `/.env` endpoint accessible (potential environment file exposure)
- **www.sheer.com**: Also has `/admin` and `/.env` endpoints accessible
- **Complete API Surface**: GraphQL, Swagger, API docs exposed on both domains
- **Security Infrastructure**: Proper `.well-known/security.txt` implementation
- **Development Exposure**: `/debug`, `/health`, `/status`, `/version` endpoints

### Research Priorities:
- **🔥 CRITICAL - Environment File Exposure**: Immediate investigation of `/.env` on both beta and www subdomains for credential leakage
- **Admin Panel Access Control**: Test `/admin` endpoints for authentication bypasses and privilege escalation
- **Beta Environment Security**: Analyze `beta.sheer.com` for development secrets, relaxed security controls
- **API Security Assessment**: Deep-dive into GraphQL introspection, Swagger documentation exposure
- **Configuration Disclosure**: Probe `/config`, `/debug` endpoints for sensitive information

### Attack Vectors Identified:
1. **Information Disclosure**: Environment files and debug endpoints
2. **Unauthorized Access**: Admin panels and development environments  
3. **API Abuse**: GraphQL and REST endpoints
4. **Configuration Exposure**: Debug and status endpoints

## Notes

- Track program policy updates and scope changes monthly.
- **URGENT**: Beta environment shows high-risk exposures requiring immediate attention.
