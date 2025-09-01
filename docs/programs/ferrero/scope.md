# Scope - Ferrero

**Snapshot Date**: 2025-09-01

**Program Policy URL**: https://hackerone.com/ferrero

## Official Policy / Scope

Skip to main content  >
Learn more about HackerOne
Log in
Security page
Program guidelines
Scope
Hacktivity
Thanks
Updates
Safe harbor
Introduction
Hi & Welcome to Ferrero's VDP Program! 🍫
We value security researchers helping us protect our systems. Please report vulnerabilities in our websites, applications, and digital infrastructure. Follow responsible disclosure practices, avoid data manipulation, and no DoS/physical testing. Provide clear steps to reproduce.
Happy hacking!
Ferrero Cyber Offence Team
Program highlights
Open Scope
Accepts reports for all owned assets based on impact, even if not listed in scope. 
Gold Standard
Adheres to Gold Standard Safe Harbor. 
Coordinated Vulnerability Disclosure
Standard 
Managed by HackerOne
13 hours
Average time to first response
1 week, 1 day
Average time to triage
1 month, 2 weeks
Average time to resolution
Scope exclusions
Core Ineligible Findings are out of scope. 
Learn more 
Overview
Last updated on April 16, 2025. View changes 
Scope Exclusions
All domains or subdomains not explicitly listed in the Scope of the program
Overview
Ferrero International S.A. is an Italian multinational manufacturer of branded chocolate and confectionery products, and the second biggest chocolate producer and confectionery company in the world. It was founded in 1946 in Alba, Piedmont, Italy, by Pietro Ferrero, a confectioner and small-time pastry maker who laid the groundwork for Nutella and added hazelnut to save money on chocolate, taking the idea from gianduia, a sweet chocolate spread containing about 30% hazelnut paste, invented in Turin during Napoleon's regency (1796–1814).
The Ferrero Group has a strong global presence and Ferrero products are present and sold, directly or through authorised retailers, in more than 170 countries belonging to the entire international community.
We believe that no technology is perfect and that working with skilled security researchers is crucial in identifying weaknesses in our technology.
The Purpose of the Vulnerability Disclosure Policy (VDP) is to give security researchers clear guidelines for conducting vulnerability research, discovery, and reporting on Ferrero's systems.
Ferrero looks forward to working with the security community to find vulnerabilities in order to keep our businesses and customers safe.
Program Rules
Recognition
Once a report is resolved and closed, the researcher will receive a +7 count on their public profile under “Thanks Received” and be listed on Ferrero’s HackerOne webpage under “Hackers Thanked.”
Ferrero will determine, in its sole discretion, whether recognition will be provided, and Ferrero will only recognize the first researcher to have discovered a specific, and previously unreported, vulnerability. Ferrero reserves the right to withhold recognition for researchers who have violated this policy in the past.
The report submitted will be reviewed by a team of security experts.
We are happy to thank everyone who submits valid reports which help us improve our security posture.
Rules Of Engagement
While researching for Cyber Security related issues the following rules of engagement must be followed:
DO NOT alter compromised accounts by creating, deleting or modifying any data
DO NOT use compromised accounts to search for post-auth vulnerabilities
DO NOT include Personally Identifiable Information (PII) in your report and please REDACT/OBFUSCATE the PII that is part of your PoC (screenshot, server response, JSON file, etc.) as much as possible.
In case of exposed credentials or secrets, limit yourself to verifying the credentials validity
In case of sensitive information leak, DO NOT extract/copy every document or data that is exposed and limit yourself to describe and list what is exposed.
You must avoid tests that could cause degradation or interruption of our service (refrain from using automated tools, and limit yourself about requests per second).
You must not leak, manipulate, or destroy any user data.
Avoid further unnecessary exploitation when you've found a critical vulnerability, stop to what is strictly required to produce a functional PoC, for instance:
For RCE PoC, it would be sufficient to perform whoami ; uname commands, no need to compromise the entire OS.
For SQLi, it would be sufficient to print the DB banner or show the DB name, username, table names, but no need to dump the entire DB.
Other techniques and procedures for lateral movement, post-exploitation or establishing persistence through back-doors are completely forbidden.
Customer or employee account compromise through bruteforce, dictionary or password guessing attacks are forbidden. However, default system/aplication passwords can be reported if present.
Phishing, spear phishing or any type of social engineering tests, against either employees or customers are prohibited.
You must not be a former or current employee of Ferrero or one of its contractor.
You must not have compromised the privacy of our users
Only interact with test accounts you own
Unqualifying Issues
The following issues are outside the scope of our vulnerability disclosure program:
Stolen secrets, credentials or information gathered from a third-party asset that we have no control over
Tabnabbing
Missing cookie flags, security-related HTTP headers and Expired certificate or best practices and other related issues for TLS/SSL certificates which do not lead directly to a vulnerability
Session expiration policies (no automatic logout, invalidation after a certain time or after a password change)
Disclosure of information without direct security impact (e.g. stack traces, secrets, credentials, path disclosure, software versions, IP disclosure, 3rd party secrets)
Content/Text/HTML/CSV injections and Mixed Content warnings
Clickjacking/UI redressing
Denial of Service (DoS) attacks
Known CVEs without working PoC and outdated libraries without a demonstrated security impact
Reports from automated web vulnerability scanners that have not been manually validated
Invalid or missing SPF (Sender Policy Framework) records (Incomplete or missing SPF/DKIM/DMARC)
Open ports without real security impact
Physical or Social engineering of staff or contractors and/or any issues that require physical access to a victim’s computer/device
Presence of autocomplete attribute on web forms
Vulnerabilities affecting outdated browsers or platforms
Any hypothetical flaw or best practices without exploitable PoC
Unexploitable vulnerabilities (ex: Self XSS, Blind SSRF without direct impact (e.g. DNS pingback), XSS or Open Redirect in HTTP Host Header)
Reports with attack scenarios requiring MITM or physical access to victim's device
Unauthenticated / Logout / Login and other low-severity Cross-Site Request Forgery (CSRF)
Subdomain takeover without a full working PoC
Lack of rate-limiting, brute-forcing or captcha issues and password requirements policies (length / complexity / reuse)
Ability to spam users (email / SMS / direct messages flooding)
Testing Instructions
Hacker Account Creation
We require to use your HackerOne email alias [username]@wearehackerone.com to create your test accounts on the in-scope assets.
User agent
Please append to your user-agent header the following value:
-VDP-ferrero-international-s.a-[H1 username]
Disclosure Policy
You must not discuss any vulnerabilities (even resolved ones) outside of the program without express and explicit consent from the organization.
Legal Notice:
If we conclude, in our sole discretion, that you have complied with the requirements above when reporting a security vulnerability, Ferrero will not pursue claims against you or initiate a law enforcement investigation in response to your report:
You do not cause harm to Ferrero or our customers;
You make a good faith effort to avoid compromising the privacy of our customers or employees, or disrupting the operation of our products, services or IT infrastructure;
You do not violate any law;
Once you have confirmed a vulnerability, you report it in a timely manner and do not exploit it further;
To the extent that you have accessed non-public Ferrero information in the course of your research, you do not maintain copies of any such information or share any such information with any third party;
You do not publicly disclose or share the vulnerability details without the written permission of Ferrero. Violation of these requirements may result in permanent disqualification from the program.
Any activity determined to involve the intentional compromise of the privacy of our customers or employees or the intentional disruption of the operation of our products, services or IT infrastructure will result in permanent disqualification from the program.
We may collect information that could reasonably be used to identify you (e.g., IP address). Ferrero uses this information to evaluate a reported vulnerability and protect Ferrero products, services or information technology infrastructure.
Top hackers
See all hackers 
1
rajdip_1998
Reputation: 28
2
arielrachamim
Reputation: 28
3
nyxtairo
Reputation: 28
4
raiihan
Reputation: 21
5
yassen119
Reputation: 16
6
lelemora
Reputation: 14
7
d3str0y3r_xabit
Reputation: 14
8
pirate78
Reputation: 14
9
mickhat
Reputation: 11
10
laalaji
Reputation: 11
11
etchoo
Reputation: 9
12
vulnera
Reputation: 9
Ferrero
https://www.ferrero.com
Vulnerability Disclosure Program launched in Apr 2025
Response efficiency: 82%
Submit report
Stats
Reports received | 90 days	111
Last report resolved	7 hours ago
Reports resolved	25
Hackers thanked	72
Assets In Scope	62
© HackerOne
Opportunities
Security
Leaderboard
Blog
Status
Docs
Support
Disclosure Guidelines
Press
Privacy
Terms

## Parsed Scope (to fill)

### In Scope
-

### Out of Scope
-

### Changes
- 2025-09-01: Snapshot recorded.