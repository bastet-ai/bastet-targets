# GitLab Inc. - HackerOne Bounty Program

## Company Profile

**GitLab Inc.** is an American multinational software company that develops and maintains a web-based DevOps lifecycle tool providing Git repository management, issue tracking, continuous integration/continuous deployment (CI/CD), and software development collaboration features.

**Wikipedia**: https://en.wikipedia.org/wiki/GitLab

### Corporate Overview:
- **Founded**: 2011 by Dmitriy Zaporozhets and Valery Sizov (Ukraine)
- **Incorporated**: 2014 in Delaware, USA by Sid Sijbrandij
- **Headquarters**: San Francisco, California, USA
- **Employees**: ~2,000+ worldwide (2024)
- **CEO**: Sid Sijbrandij (Co-founder)
- **Public Company**: NASDAQ: GTLB (IPO: October 2021)

### Financial Profile (2024):
- **Market Cap**: ~$8 billion USD
- **Annual Revenue**: ~$650 million USD (2024)
- **Subscription Model**: Freemium SaaS with enterprise tiers
- **Customer Base**: 30+ million registered users
- **Enterprise Customers**: 50,000+ organizations

### Business Evolution & Key Milestones:
- **2011**: Created as open-source Git repository management
- **2013**: GitLab.com SaaS platform launched
- **2014**: Company incorporated, raised Series A ($1.5M)
- **2015-2020**: Rapid feature expansion, DevOps platform evolution
- **2021**: Public IPO on NASDAQ
- **2022-2025**: AI/ML integration, competitive positioning vs GitHub

### Key Products & Services:
- **GitLab SaaS**: Cloud-hosted DevOps platform
- **GitLab Self-Managed**: On-premises/private cloud deployment
- **GitLab.com**: Free public repository hosting
- **CI/CD Pipelines**: Integrated continuous integration/deployment
- **Security & Compliance**: SAST, DAST, dependency scanning
- **Issue Tracking**: Project management and collaboration tools

### Competitive Landscape:
- **Primary Competitor**: Microsoft GitHub (acquired 2018, $7.5B)
- **Differentiation**: All-in-one DevOps platform vs GitHub's ecosystem approach
- **Market Position**: #2 in Git-based source code management
- **Enterprise Focus**: Strong presence in regulated industries

---

## HackerOne Bug Bounty Program

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