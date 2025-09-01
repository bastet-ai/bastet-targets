# Scope - TikTok

**Snapshot Date**: 2025-09-01

**Program Policy URL**: https://hackerone.com/tiktok

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
18 hours
Average time to first response
2 weeks, 2 days
Average time to triage
1 week, 11 hours
Average time to bounty
3 weeks, 3 days
Average time from submission to bounty
Rewards summary
Last updated on October 21, 2021. View changes 
Each severity lists the 90-day average bounty and the percentage of total resolved reports, if applicable.
Low

Avg. bounty $500
43.55% submissions

Medium

Avg. bounty $1,806
44.81% submissions

High

Avg. bounty $7,500
9.61% submissions

Critical

Avg. bounty n/a
2.03% submissions

$500
$1,000–$4,500
$5,000–$10,000
$10,500–$15,000
At TikTok, we are committed to the ongoing security and safety of our community and platform. We encourage security researchers to focus their efforts on finding security vulnerabilities demonstrating meaningful impact.
Our rewards are determined by the TikTok security team based on the potential impact of a vulnerability. Please note these are general guidelines, and reward decisions are up to the discretion of TikTok. Previous bounty amounts are not considered as a precedent for future bounty amounts.
Certain vulnerabilities with a working proof of concept on the TikTok Android app may qualify for an additional reward through the Google Play Security Rewards Program. To see which vulnerabilities may qualify, please refer to the Google Play Security Rewards Program’s Scope and Vulnerability Criteria.
Note: All submissions prior to Oct 21, 2021 12 am PST will apply to our previous bounty table.
Scope exclusions
Core Ineligible Findings are out of scope. 
Learn more 
Category
Exclusion details
Insecure file uploads leading to XSS on the CDN domain
Tiktok does not currently pay out on every XSS on CDN Domain. The finding will only be considered acceptable if it clearly demonstrates a direct impact on in-scope domains.
Platform standards deviations
This program has not committed to the following Platform Standards. As such the report severity or outcome may differ.
Severity Rating for Insecure Direct Object References (IDORs) with Unpredictable IDs
Tiktok does not currently pay out on every IDOR finding with unpredictable ID's. Our acceptance and associated bounty will be determined by the Bug Bounty Program team based on the complexity of the ID.
Check here for the full Platform Standards page list.
Overview
Last updated on May 25, 2025. View changes 
TikTok Bug Bounty Program Policy
TikTok's mission is to inspire creativity and bring joy to our vibrant community. We recognize and value external feedback from the global security research community on potential vulnerabilities which helps strengthen our overall platform security posture. Before submitting a vulnerability report, please review our program policy and terms. We appreciate your contribution and thank you for helping make TikTok a safer place for our community!
General Program Terms
By participating in the program, you agree that you are bound by and subject to this policy. By submitting a vulnerability or other report to us, you grant to us, our subsidiaries and its affiliates, a perpetual, irrevocable, royalty free license to all intellectual property rights licensable by you in or related to the use of this material. You agree that no third party rights are involved in your report and you have all rights to submit such a report. We may modify the terms of this policy or terminate the policy at any time.
If you do not comply with this policy or if we determine that your participation in the program is not in good faith or could adversely impact us, our affiliates, or our business partners (or any of our or their users, employees, or contractors), we, in our sole discretion, may remove you from the program and disqualify you from receiving any reward under the program.
Program Rules and Guidelines
Provide detailed reports with reproducible steps. If the report is not detailed enough to reproduce the issue, the issue will not be eligible for a reward.
Submit one vulnerability per report unless you need to chain vulnerabilities to provide impact.
If more than one person reports the same security vulnerability, the reward will generally be given to the first person to successfully submit the report. Exceptions may be made on a case by case basis.
Multiple vulnerabilities caused by one underlying issue may be awarded one bounty.
Social engineering of any kind (including without limitation phishing, vishing, smishing) is prohibited.
Do not commit privacy violations, destruction of data, or interruption or degradation of our service.
Create test accounts or test content to avoid affecting real users.
Do not test/exploit vulnerabilities on user accounts that you do not own or have rights to access or control.
Example: Do not generate millions of fraudulent "likes" for your own videos
If you encounter user information / internal resources during research, stop there and report the issue immediately via HackerOne. We will evaluate the impact and reward accordingly.
Do not attack or enumerate any internal resources for testing SSRF vulnerability. Please only use the program provided SSRF sheriff for testing (Refer to the "SSRF Testing Rules" section below for more details).
Always read and adhere to community guidelines, terms of service, or privacy policies.
If you have any questions about a particular report, please reach out via the corresponding HackerOne ticket for tracking purposes.
SSRF Testing Rules
Please see below for the usage of SSRF Sheriff:
Test SSRF only with the following payload
Full-read SSRF (A Flag will be returned to you): https://ssrf-bait.byted.org/full-read-ssrf
Blind SSRF (Provide your own Flag as payload): https://ssrf-bait.byted.org/blind-ssrf/YOUR_OWN_FLAG
Check if your SSRF was successful with the SSRF Flag with the following URL
https://sf-ssrf-sherif.byted.app/obj/ssrf-detector-us/YOUR_OWN_FLAG
If the response shows "True", the SSRF was successful
PS: The "Flag" used here is a 32 character-long hex string in lowercase, which works as a unique identifier for our sheriff to validate SSRF request
Please note that this SSRF Sheriff should only be used for SSRF vulnerability testing and PoC development purposes. Any kind of attack / exploitation on this SSRF Sheriff service is strictly prohibited.
Testing Notes
Where possible, register accounts using your <username>+x@wearehackerone.com addresses.
Provide your IP address/test domain in the bug report. We will keep this data private and only use it to review logs related to your testing activity.
For valid Proof of Concept please include your HackerOne username in the file name and file content as a comment in the markup.
Asset Priorities
Vulnerabilities will be evaluated based on impact to TikTok systems and certain assets may be of higher impact.
We currently consider the following assets to be of greater interest:
Android app: Com.zhiliaoapp.musically
Android app: Com.ss.android.ugc.trill
iOS app: 835599320
iOS app: 1235601864
Tiktok.com
*.tiktokv.com
Disclosure and Confidentiality Policy
TikTok supports public recognition and disclosure of contributions and findings for in-scope reports closed as resolved. We will seek to allow participants to be publicly recognized whenever possible.
Public disclosure of a vulnerability (either full or partial) is only permitted after the TikTok Team receives a Disclosure Request within the HackerOne platform and the TikTok Team agrees to disclose the report.
Retention, copying, or disclosure of TikTok information gained as a result of participation is not permitted.
TikTok may redact any sensitive information prior to disclosure.
If requesting beyond a HackerOne disclosure (e.g. in a blog or at a conference):
Request approval before commencing a write up.
Share your final blog edits and where the content is to be hosted with TikTok for approval.
Do not publicly disclose information until you have explicit written consent to do so from TikTok.
Rewards
Vulnerability	Severity
Remote Code Execution, Command injection, shell upload	Critical
SQL Injection, XML External Entity Injection (XXE), Command injection, unsafe deserialization, exploitable memory corruption	High - Critical
Leaked Credential, Cryptographic flaw	Medium - High
Cross-Site Scripting (XSS)	Medium - High
Server-Side Request Forgery	Medium - High
Directory Traversal	Medium - High
Authentication/Authorization Bypass (Broken Access Control)	Medium - High
File Inclusion	Medium - Critical
Insecure Direct Object Reference	Medium - Critical
Misconfiguration/ Open Redirect	Low - Medium
CRLF Injection	Low - Medium
Cross Site Request Forgery	Low - High
Information Disclosure	Low - Medium
Subdomain takeover	Medium - High
XSS on harmless subdomains, attacks requiring unlikely user interaction	Low - Medium
High-quality reports may be awarded an extra bonus. A high-quality report is a thoroughly written vulnerability report that includes (when applicable) a working proof-of-concept, root cause analysis, a suggested fix, and any other relevant information. We also ask that researchers be responsive and collaborative which helps us efficiently implement and deliver fixes in a timely manner.
The criteria used to determine reward amount, bonuses, and eligibility are solely at our discretion.
Program Exclusions
When reporting vulnerabilities, please consider (1) attack scenario / exploitability, and (2) potential security impact of the bug. The following issues are considered out of scope:
Clickjacking on pages with no sensitive actions or requiring multiple user interactions.
Cross-Site Request Forgery (CSRF) on unauthenticated forms or forms with no sensitive actions
Attacks requiring MITM or physical access to a user's device
Previously known vulnerable libraries without a working Proof of Concept
Comma Separated Values (CSV) injection without demonstrating a vulnerability
Missing best practices in SSL/TLS configuration
Any activity that could lead to the disruption of our service (DoS) or a violation of the privacy of any user, employee or contractor of TikTok or any of its affiliates or business partners
Content spoofing and text injection issues without showing an attack vector/without being able to modify HTML/CSS
Rate limiting or bruteforce issues on non-authentication endpoints
Missing best practices in Content Security Policy
Missing Referrer Policy
Missing Subresource Integrity directives
Missing anti-clickjacking mechanisms
Missing HttpOnly, Secure, SameSite cookie attributes
Missing email best practices (Invalid, incomplete or missing SPF/DKIM/DMARC records, etc.)
Vulnerabilities only affecting users of outdated or unpatched browsers (more than 2 stable versions behind the latest released stable version)
Software version disclosure / Banner identification issues / Descriptive error messages or headers (e.g. stack traces, application or server errors).
Public Zero-day vulnerabilities that have had an official disclosure less than 1 month before are on a case by case basis.
Tabnabbing
Open redirect - unless an additional security impact can be demonstrated
Issues that require unlikely user interaction
Vulnerabilities that are already known (e.g. discovered and reported by other researchers or by an internal team)
Self-XSS, which includes any payload entered by the victim
HTML Injection with no actual harm or that require unlikely user interaction
Known Issues
Please note that these known issues will not be accepted:
Cross-Site Request Forgery (CSRF) findings reported after 5th July, 2023 on all TikTok products.
Insecure Direct Object Reference (IDOR)/Privilege Escalation/Improper Access Control findings reported after 13th March, 2024 on all TikTok Partner Shop API
All access control / privilege escalation / IDOR issues related to "Tiktok Subscription" feature in all Tiktok assets reported after 7th July, 2024
All access control / privilege escalation / IDOR issues related to "Tiktok One / Tiktok Business Center" feature reported after 16 December 2024
We are working on a fix for the above issues and seek your kind patience.
Good Faith Guidelines
To encourage good faith research and responsible disclosure of security vulnerabilities, we will not threaten or bring legal action against what we determine to be accidental or good faith violation of this policy. This includes claims under the DMCA for circumventing technological measures to protect the services and applications eligible under this policy.
To the extent your security research activities are inconsistent with certain restrictions in our relevant site policies but are consistent with the terms of our bug bounty program, we may waive those restrictions for the sole and limited purpose of permitting good faith security research under this bug bounty program.
If your security research involves the networks, systems, information, applications, products, or services of a third party, including any TikTok users, we cannot bind that third party, and they may pursue legal action or law enforcement notice. We cannot, and do not, authorize security research in the name of other entities or individuals, and cannot in any way offer to defend, indemnify, or otherwise protect you from any third party action based on your actions.
You must, as always, comply with all laws applicable to you, and not disrupt or compromise any data beyond what our bug bounty program permits.
Be proactive in contacting us before engaging in any action that may violate or is unaddressed by this policy or good faith. We reserve the sole right to determine whether a violation of this policy is accidental or in good faith.
Top hackers
See all hackers 
1
supermancyber
Reputation: 4k
2
imran_nisar
Reputation: 3k
3
datph4m
Reputation: 2k
4
s3c
Reputation: 1k
5
696e746c6f6c
Reputation: 1k
6
sinayeganeh
Reputation: 1k
7
freesec
Reputation: 1k
8
mrhavit
Reputation: 1k
9
amr_id
Reputation: 1k
10
rojab
Reputation: 1k
11
ibrahim0936356
Reputation: 884
12
amakki
Reputation: 857
TikTok
http://tiktok.com
Bug Bounty Program launched in Oct 2020
Response efficiency: 62%
Submit report
Rewards

Severity

Rewards

Low

Avg. bounty $500
43.55% submissions

$500
Medium

Avg. bounty $1,806
44.81% submissions

$1,000–$4,500
High

Avg. bounty $7,500
9.61% submissions

$5,000–$10,000
Critical

Avg. bounty n/a
2.03% submissions

$10,500–$15,000
Stats
Total bounties paid	$3,091,826
Average bounty range	$533 - $1,000
Top bounty range	$5,000 - $30,000
Bounties paid | 90 days	$70,500
Reports received | 90 days	689
Last report resolved	a day ago
Reports resolved	1438
Hackers thanked	574
Assets In Scope	29
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