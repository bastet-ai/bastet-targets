# Program Documentation Templates

This page provides standardized templates for documenting HackerOne bounty programs. Using these templates ensures consistency and completeness across all program documentation.

## 📁 Template Structure

### Complete Program Directory Template

```
program-name/
├── README.md              # Program overview (use Template 1)
├── scope.md              # Detailed scope analysis (use Template 2)
├── reconnaissance/       # Subdomain enumeration, port scans, etc.
│   ├── subdomains.md     # Subdomain discovery results
│   ├── ports-services.md # Port scans and service enumeration
│   ├── technologies.md   # Tech stack identification
│   └── assets.md         # Digital asset inventory
├── vulnerabilities/      # Security findings
│   ├── README.md         # Vulnerability summary
│   ├── high-severity/    # Critical and high severity issues
│   ├── medium-severity/  # Medium severity issues
│   └── informational/    # Low severity and informational findings
├── timeline.md           # Chronological program updates
├── tools-config/         # Tool configurations and scripts
└── assets/              # Screenshots, evidence, diagrams
    ├── images/
    ├── reports/
    └── poc/
```

## 📋 Template 1: Program Overview (README.md)

```markdown
# [Program Name] - HackerOne Bounty Program

**Organization**: [Company Name]  
**Program URL**: [HackerOne Program URL]  
**Research Start Date**: YYYY-MM-DD  
**Last Updated**: YYYY-MM-DD  
**Status**: Active/Paused/Completed/Archived

## 📊 Quick Stats

| Metric | Value |
|--------|-------|
| Program Launch | YYYY-MM-DD |
| Max Bounty | $X,XXX |
| Total Bounties Paid | $XXX,XXX+ |
| Resolved Reports | XXX+ |
| Current Scope | X domains, X mobile apps |

## 🎯 Scope Summary

### In Scope
- **Web Applications**: 
  - https://example.com
  - https://api.example.com
- **Mobile Applications**:
  - iOS App (App Store URL)
  - Android App (Play Store URL)
- **Other Assets**: 
  - Specific services or APIs

### Out of Scope
- Social engineering attacks
- Physical attacks
- Denial of service attacks
- [Additional exclusions as per program policy]

## 🔍 Research Progress

### Reconnaissance Status
- [ ] Subdomain enumeration
- [ ] Port scanning
- [ ] Technology identification
- [ ] Asset inventory
- [ ] Content discovery

### Testing Status
- [ ] Authentication mechanisms
- [ ] Input validation
- [ ] Business logic
- [ ] API security
- [ ] Mobile application security

## 🏆 Findings Summary

| Severity | Count | Status |
|----------|-------|--------|
| Critical | 0 | - |
| High | 0 | - |
| Medium | 0 | - |
| Low | 0 | - |
| Info | 0 | - |

## 📋 Key Findings

*No findings yet - research in progress*

## 🛠️ Tools Used

- **Reconnaissance**: List tools and configurations
- **Vulnerability Scanning**: List tools and configurations
- **Manual Testing**: Methodologies and approaches

## 📚 References

- [Program Policy](HackerOne_Program_URL)
- [Company Security Page](Company_Security_URL)
- [Related Documentation](Internal_Links)

## 📝 Notes

*Add any program-specific notes, observations, or important context here.*

---

**Last Updated By**: [Your Name/Username]  
**Next Review Date**: YYYY-MM-DD
```

## 📋 Template 2: Scope Analysis (scope.md)

```markdown
# Scope Analysis: [Program Name]

## 📄 Official Scope

*Copy the exact scope from the HackerOne program page*

## 🔍 Detailed Scope Breakdown

### Web Applications

| Asset | URL | Technology | Notes |
|-------|-----|------------|-------|
| Main Application | https://example.com | React, Node.js | Primary target |
| API Gateway | https://api.example.com | Express.js | RESTful API |
| Admin Panel | https://admin.example.com | Vue.js | Restricted access |

### Mobile Applications

| Platform | App Name | Version | Package ID | Notes |
|----------|----------|---------|------------|-------|
| iOS | Example App | 1.2.3 | com.example.app | Current version |
| Android | Example App | 1.2.3 | com.example.app | Current version |

### Network Infrastructure

| Type | Asset | Port/Service | Notes |
|------|-------|--------------|-------|
| Web Server | example.com | 80, 443 | HTTPS only |
| API Server | api.example.com | 443 | Rate limited |

## ⚠️ Out of Scope Details

### Explicitly Excluded
- List specific exclusions
- Physical security testing
- Social engineering attacks
- DoS/DDoS attacks

### Scope Clarifications
*Document any clarifications received from the program team*

## 🎯 Attack Surface Analysis

### High-Value Targets
1. **Authentication Systems**: Login, registration, password reset
2. **Payment Processing**: Billing, subscriptions, financial data
3. **User Data**: Personal information, privacy controls
4. **Administrative Functions**: Admin panels, privileged operations

### Potential Entry Points
- User registration and authentication
- File upload functionality
- Search and filtering mechanisms
- API endpoints
- Mobile app deep links

## 📊 Scope Evolution

### Historical Changes

| Date | Change | Impact |
|------|--------|--------|
| YYYY-MM-DD | Initial scope definition | Baseline established |
| YYYY-MM-DD | Added mobile applications | Expanded attack surface |

### Monitoring for Changes
- Check program page weekly
- Monitor security policy updates
- Track new asset announcements

---

**Analysis Date**: YYYY-MM-DD  
**Analyst**: [Your Name]  
**Next Review**: YYYY-MM-DD
```

## 📋 Template 3: Vulnerability Report

```markdown
# Vulnerability Report: [Vulnerability Title]

**Discovery Date**: YYYY-MM-DD  
**Report Date**: YYYY-MM-DD  
**Severity**: Critical/High/Medium/Low/Informational  
**Status**: Draft/Submitted/Triaged/Resolved/Duplicate/N/A  
**Report ID**: H1-XXXXXXX (if submitted)  

## 📝 Summary

Brief description of the vulnerability and its impact.

## 🎯 Affected Assets

- **URL/Endpoint**: https://example.com/vulnerable-endpoint
- **Parameter**: vulnerable_parameter
- **Method**: GET/POST/PUT/DELETE

## 🔍 Technical Details

### Vulnerability Type
- OWASP Category (if applicable)
- CWE Reference (if applicable)

### Root Cause
Detailed explanation of what causes the vulnerability.

### Proof of Concept

#### Request
```http
POST /vulnerable-endpoint HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "vulnerable_parameter": "malicious_payload"
}
```

#### Response
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "error": "Sensitive information exposed"
}
```

#### Steps to Reproduce
1. Step one
2. Step two
3. Step three

## 💥 Impact Assessment

### Security Impact
- Confidentiality: High/Medium/Low
- Integrity: High/Medium/Low
- Availability: High/Medium/Low

### Business Impact
Description of potential business consequences.

### CVSS Score
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

## 🛡️ Mitigation

### Immediate Fixes
- Short-term mitigation steps

### Long-term Solutions
- Comprehensive fixes and preventive measures

## 📎 Evidence

- Screenshot 1: Description
- Screenshot 2: Description
- Video demonstration: URL or file reference

## 🔗 References

- Related vulnerabilities
- Security advisories
- Documentation links

---

**Discovered By**: [Your Name]  
**Validated By**: [Name if peer-reviewed]  
**Report Status**: Last updated YYYY-MM-DD
```

## 🔧 Quick Start Guide

### Setting Up a New Program

1. **Create Directory Structure**:
   ```bash
   mkdir -p docs/programs/program-name/{reconnaissance,vulnerabilities/{high-severity,medium-severity,informational},tools-config,assets/{images,reports,poc}}
   ```

2. **Copy Templates**: Use the templates above to create initial documentation

3. **Update Navigation**: Add the new program to `mkdocs.yml` navigation

4. **Start Documentation**: Begin with scope analysis and reconnaissance

### Best Practices

- **Consistent Naming**: Use lowercase with hyphens
- **Regular Updates**: Update documentation after each research session
- **Evidence Collection**: Always include proof-of-concept and evidence
- **Cross-References**: Link related findings and techniques
- **Version Control**: Track changes with meaningful commit messages

---

*These templates ensure consistent, comprehensive documentation across all programs.*
