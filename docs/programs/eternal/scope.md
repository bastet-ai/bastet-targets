# Scope - Eternal

**Snapshot Date**: 2025-09-01

**Program Policy URL**: https://hackerone.com/eternal

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
Collaborators
Program highlights
Fast Payment
Ensures payment within 1 month of receiving a vulnerability report. 
Platform Standards
Fully compliant with Platform Standards. 
Top Response Efficiency
This program's response efficiency is above 90%. 
Collaboration Enabled
Includes Retesting
1 hour
Average time to first response
1 hour
Average time to triage
5 hours
Average time to bounty
6 hours
Average time from submission to bounty
3 weeks, 1 day
Average time to resolution
Rewards summary
Last updated on June 3, 2025. View changes 
Each severity lists the 90-day average bounty and the percentage of total resolved reports, if applicable.
Asset
Low

Avg. bounty $169
31.53% submissions

Medium

Avg. bounty $368
40.63% submissions

High⚡️

Avg. bounty $536
18.47% submissions

Critical 🔥

Avg. bounty $567
9.37% submissions

Blinkit, Bistro and Hyperpure assets (in scope)
$100–$200
$200–$500
$500–$1,000
$1,000–$2,000
All District Assets (Other than Zomato, BlinkIT & Hyperpure)
$50–$100
$100–$250
$250–$500
$500–$1,000
All Zomato Assets (Other than BlinkIT & Hyperpure)
$100–$300
$300–$1,000
$1,000–$2,000
$2,000–$4,000
The Eternal Bug Bounty Program is a crucial part of our security efforts and we hope that this improvement will further motivate the hacker community. Thank you for your contribution to our program so far and we look forward to your reports!
We use CVSS to determine the severity of a vulnerability and bounties will be calculated based on the exact CVSS score finalized by the Eternal Security team.
Examples:
A critical vulnerability with CVSS 10.0 will be awarded $4,000
A critical vulnerability with CVSS 9.5 will be awarded $3,000 and so on
All final bounty decisions will be at the discretion of the Eternal Security Team.
Scope exclusions
Core Ineligible Findings are out of scope. 
Learn more 
Overview
Last updated on June 11, 2025. View changes 
We take security seriously at Eternal and are committed to protecting our community. If you are a security researcher or expert and believe you've identified a security-related issue with any of Eternal’s key verticals - Zomato, Blinkit, Hyperpure, or District websites or apps, we encourage you to report it to us responsibly.
Our team is committed to addressing all security reports in a timely and responsible manner. We kindly ask the security community to give us the opportunity to investigate and resolve any issues before making them public. Please include a detailed description of the issue and the steps to reproduce it in your submission.
We appreciate the efforts of the security community in helping us safeguard our users’ data and privacy.
Disclosure Policy
Let us know as soon as possible upon discovery of a potential security issue, and we'll make every effort to quickly resolve the issue.
Provide us a reasonable amount of time to resolve the issue before any disclosure to the public or a third-party.
Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our service. Only interact with accounts you own or with the explicit permission of the account holder.
Test Plan
Please include a header X-Hackerone: <h1_username> when you test so we can identify your requests easily.
Scope
The scope of issues is limited to technical vulnerabilities in the Eternal website or mobile apps. Please do not attempt to compromise the safety or privacy of our users (so please use test accounts), or the availability of Eternal through DoS attacks or spam. We also request you not to use vulnerability testing tools that generate a significant volume of traffic.
Certain vulnerabilities with a working proof of concept on some of our Android mobile app(s) may qualify for an additional bounty through the [Google Play Security Rewards Program] (https://hackerone.com/googleplay). To see which apps and vulnerabilities may qualify for a bounty, please refer to the [Google Play Security Rewards Program’s Scope and Vulnerability Criteria] (https://hackerone.com/googleplay).
Rewards
We will reward reports according to the severity of their impact on a case-by-case basis as determined by our security team. We may pay more for unique, hard-to-find bugs; we may also pay less for bugs with complex prerequisites that lower the risk of exploitation.
Below, you can find examples of vulnerabilities and their impacts grouped by our severity ranking. This is not an exhaustive list and it is designed to give you insight on how we rate vulnerabilities.
Critical
Remote Code Execution (RCE) - able to execute arbitrary commands on a remote device
SQL Injection - able to read Personally Identifiable Information (PII) or other sensitive data / full read/write access to a database
Server-Side Request Forgery (SSRF) - able to pivot to internal application and/or access credentials (not blind)
Information Disclosure - mass PII leaks including data such as names, emails, phone numbers and addresses (Combined)
High
Stored Cross-Site Scripting (XSS) - stored XSS with access to non HttpOnly cookies
Information Disclosure - leaked credentials
Subdomain Takeover - If a proper PoC is provided that can demonstrate an attacker geting access to confidential user data and able to perform unauthorized operations without leveraging phishing attack vectors.
Cross-Site Request Forgery (CSRF) - leading to account takeover
Account Takeover (ATO) - with no or minimal user interaction
Insecure Direct Object Reference (IDOR) - read or write access to sensitive data or important fields that you do not have permission to
SQL Injection - able to perform queries with a limited access user
Medium
CSRF - able to modify important information (authenticated)
ATO - required user interaction
IDOR - write access to modify objects that you do not have permission to
XSS - reflected/DOM XSS with access to cookies
Low
Directory listings
XSS - Without access to cookies/Auth Data
XSS - POST based XSS (with CSRF bypass)
Lack of HTTPS on dynamic pages (judged on a case-by-case basis)
Server information page (no credentials)
Subdomain Takeover - on an unused subdomain
Eligibility and Responsible Disclosure
To promote the discovery and reporting of vulnerabilities and increase user safety, we ask that you:
Give us a reasonable time to respond to the issue before making any information about it public.
Not access or modify data without the explicit permission of the owner.
Act in good faith not to degrade the performance of our services (including denial of service).
We only reward the first reporter of a vulnerability. Public disclosure of the vulnerability prior to resolution will result in disqualification from the program. You must report a qualifying vulnerability through the HackerOne reporting tool to be eligible for a monetary reward.
Non-qualifying vulnerabilities / Known Issues
When reporting vulnerabilities, please consider (1) attack scenario/exploitability, and (2) the security impact of the bug. The following issues are considered out of scope:
Informative Bugs
Broken Link Hijacking issues are categorized as low severity and are not eligible for rewards.
Credential leakage reports are considered informational if two-factor authentication (2FA) is in place
SSL Pinning/Root Detection Bypass
Security issues related to Zomato Legends are considered informational and are not eligible for rewards, regardless of whether the issue is resolved by the team
Not Applicable & Out of Scope Bugs
Issues related to Way Back Machine/Web Archive (e.g., leaked invoices or contract documents) will be marked as Not Applicable or (Spam - if reported repeatedly)
Google Maps API Keys Leakage
HTML Injection & Context Spoofing(Closed as NA)
Cache Poisoning DoS
Clickjacking on pages with no sensitive actions
Cross-Site Request Forgery (CSRF) on unauthenticated forms or forms with no sensitive actions
Attacks requiring MITM or physical access to a user's device.
Previously known vulnerable libraries without a working Proof of Concept.
Comma Separated Values (CSV) injection without demonstrating a vulnerability.
Missing best practices in SSL/TLS configuration.
Any activity that could lead to the disruption of our service (DoS/DDoS).
Content spoofing and text injection issues without showing an attack vector/without being able to modify HTML/CSS
Rate limiting or brute force issues
Invalidation/expiry on CDN assets
Missing best practices in Content Security Policy.
Missing HttpOnly or Secure flags on cookies
Missing email best practices (Invalid, incomplete or missing SPF/DKIM/DMARC records, etc.)
Vulnerabilities only affecting users of outdated or unpatched browsers [Less than 2 stable versions behind the latest released stable version]
Software version disclosure / Banner identification issues / Descriptive error messages or headers (e.g. stack traces, application or server errors).
Public Zero-day vulnerabilities that have had an official patch for less than 1 month will be awarded on a case by case basis.
Tabnabbing
Open redirect - unless an additional security implication can be demonstrated
Self XSS
Promo code abuse (e.g. ordering multiple times using the same promo code)
We're aware of Promotion offers/Cash backs Issues (e.g: logic issues in cash back reversing/applying)
Abuse of our promotional offers and referral codes
CSRF on www.zomato.com/php/ and www.zomato.com/clients/
Promo code enumeration, abuse of our promotional offers and referral codes.
Able to retrieve user's public information.
Username / email enumeration
Consequences of complying with this policy
We will not pursue a civil action or initiate a complaint to law enforcement for accidental, good faith violations of this policy. We consider activities conducted consistent with this policy to constitute “authorized” conduct under the Computer Fraud and Abuse Act (CFAA). We will not bring a DMCA claim against you for circumventing the technological measures we have used to protect the applications in scope.
If legal action is initiated by a third party against you and you have complied with Eternal's bug bounty policy, Eternal will take steps to make it known that your actions were conducted in compliance with this policy.
Please submit a HackerOne report to us before engaging in conduct that may be inconsistent with or unaddressed by this policy.
Thank you for helping keep @Eternal safe for the community!
Eternal Security Team
Top hackers
See all hackers 
1
gerben_javado
Reputation: 3k
2
prateek_0490
Reputation: 1k
3
pandaaaa
Reputation: 1k
4
parth
Reputation: 1k
5
ashoka_rao
Reputation: 824
6
adibou
Reputation: 674
7
kuromatae
Reputation: 658
8
thisishrsh
Reputation: 531
9
5eren1ty
Reputation: 423
10
yashrs
Reputation: 411
11
zzzhacker13
Reputation: 247
12
amsda
Reputation: 240
Eternal
https://www.eternal.com
@Zomato
Eternal is India’s largest new-age tech company by market cap, comprising of 4 businesses (as of now) – Zomato, Blinkit, District, & Hyperpure.
Bug Bounty Program launched in Feb 2016
Response efficiency: 100%
Submit report
Rewards

Severity

Rewards

Low

Avg. bounty $169
31.53% submissions

$50–$300
Medium

Avg. bounty $368
40.63% submissions

$100–$1,000
High

Avg. bounty $536
18.47% submissions

$250–$2,000
Critical

Avg. bounty $567
9.37% submissions

$500–$4,000
Stats
Total bounties paid	$412,822
Average bounty range	$200 - $250
Top bounty range	$1,000 - $5,000
Bounties paid | 90 days	$11,040
Reports received | 90 days	610
Last report resolved	15 hours ago
Reports resolved	1143
Hackers thanked	700
Assets In Scope	31
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