# GitLab - HackerOne Bounty Program

**Program URL**: https://hackerone.com/gitlab  
**Primary Domain**: gitlab.com  
**Last Updated**: 2025-09-01  
**Risk Level**: 🟡 MEDIUM  

## Program Overview

GitLab operates a well-established bug bounty program for their DevOps platform. As a security-focused development tool company, GitLab maintains sophisticated security practices and demonstrates consistent engagement with researchers through smaller but regular bounty awards.

## Historical Activity (6-month window)

- **Total Payouts**: $600.00 (Rank #6)
- **Reports Resolved**: 12
- **Average Per Report**: $50.00
- **Activity Pattern**: Consistent monthly activity with smaller individual awards
- **Focus Areas**: DevOps pipeline security, source code management, CI/CD

## Attack Surface Analysis (2025-09-01)

### Discovered Infrastructure
- **Subdomains Identified**: 8 active subdomains
- **Live Web Services**: 12 responsive endpoints
- **Security Posture**: Well-hardened with professional security practices

### Key Subdomains
| Subdomain | Purpose | Security Notes |
|-----------|---------|---------------|
| `www.gitlab.com` | Main Platform | Primary GitLab application |
| `api.gitlab.com` | API Gateway | Well-protected API endpoints |
| `docs.gitlab.com` | Documentation | Technical documentation |
| `help.gitlab.com` | Support | Help and support resources |

### Security Analysis
- **Professional Hardening**: Fewer obvious misconfigurations detected
- **Standard Patterns**: Typical enterprise subdomain structure
- **Defensive Posture**: Evidence of mature security practices
- **Limited Exposure**: Minimal obvious attack surface

### Notable Characteristics
- **DevOps Focus**: Security-oriented development platform
- **Enterprise Grade**: Professional security implementation
- **Research Friendly**: Active engagement with security community
- **Continuous Improvement**: Regular updates and security enhancements

## Scope Snapshot (as of 2025-09-01)

See [scope.md](scope.md) for full policy text and breakdown.

### Key Focus Areas
- GitLab.com hosted service security
- Self-hosted GitLab instance vulnerabilities  
- CI/CD pipeline security
- Source code management features
- Container registry security

## Research Priorities

### Phase 1 - DevOps Pipeline Security
- [ ] CI/CD pipeline injection vulnerabilities
- [ ] Repository access control bypass
- [ ] Docker registry security assessment
- [ ] Secrets management analysis

### Phase 2 - Application Security
- [ ] Source code management vulnerabilities
- [ ] Issue tracking and project management
- [ ] User permission and role escalation
- [ ] Integration security (webhooks, APIs)

### Phase 3 - Infrastructure Security
- [ ] Self-hosted instance security
- [ ] Container security and isolation
- [ ] Network security and access controls
- [ ] Data protection and encryption

## Notes & Intelligence

- **Security-First Culture**: Company culture emphasizes security best practices
- **Transparent Development**: Open-source approach to security improvements
- **Community Engagement**: Active participation in security research community
- **Regular Updates**: Frequent security patches and feature updates

### Technical Characteristics
- **Ruby on Rails**: Primary application framework
- **Microservices**: Modern distributed architecture
- **Container-Based**: Heavy use of Docker and Kubernetes
- **Git-Centric**: All functionality built around Git workflow

### Research Considerations
- **Complex Permissions**: Sophisticated role-based access control system
- **CI/CD Security**: Unique attack vectors in DevOps pipeline
- **Multi-Tenancy**: Isolation between different organizations/projects
- **Integration Points**: Extensive third-party integrations

---

**Last Enumeration**: 2025-09-01  
**Next Review**: 2025-10-01  
**Analyst**: Bastet Security Research Team