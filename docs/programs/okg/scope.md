# Scope - OKG

**Snapshot Date**: 2025-09-01

**Program Policy URL**: https://hackerone.com/okg

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
Top Response Efficiency
This program's response efficiency is above 90%. 
Managed by HackerOne
Collaboration Enabled
Includes Retesting
14 hours
Average time to first response
1 week, 1 day
Average time to bounty
1 week, 1 day
Average time from submission to bounty
Rewards summary
Last updated on October 31, 2024. View changes 
Each severity lists the 90-day average bounty and the percentage of total resolved reports, if applicable.
Asset
Low

Avg. bounty $200

Medium

Avg. bounty $1,583

High

Avg. bounty n/a

Critical

Avg. bounty n/a

Mac OS Executable
$50–$200
$200–$600
$600–$1,200
$1,200–$2,000
Windows OS Executable
$50–$200
$200–$600
$600–$1,200
$1,200–$2,000
All assets
$50–$600
$600–$2,000
$2,000–$5,000
$5,000–$1,000,000
New Vulnerability Tier(s)	Description	Reward
Extreme	Vulnerabilities in essential assets that have the potential to result in significant business disturbances or unauthorized entry to OKX wallets, funds, or private keys of wallets.	Up to $1,000,000
Vulnerability Tier(s)	Reward
Extreme	Up to $1,000,000
Critical	$5,000 to $30,000
High	$2,000 to $5,000
Medium	$600 to $2,000
Low	$50 to $600
For more information on the Tier level, please kindly refer to the policy page.
Our rewards are based on OKG's internal alternative matrix.
Please note these are general guidelines, and reward decisions are up to the discretion of OKG.
The maximum severity for Mac OS Executable and Windows OS Executable reports has been increased to critical. Rewards for reports on these assets will not exceed $2000.
Scope exclusions
Core Ineligible Findings are out of scope. 
Learn more 
Platform standards deviations
This program has not committed to the following Platform Standards. As such the report severity or outcome may differ.
Severity Rating for Insecure Direct Object References (IDORs) with Unpredictable IDs
Check here for the full Platform Standards page list.
Overview
Last updated on June 30, 2025. View changes 
About OKG:
OKG Technology Holdings Limited is a leading innovator in the blockchain sector, dedicated to the research, development, and commercial application of blockchain technology. Founded in 2013, the company has emerged as a global blockchain service provider with a presence in over 10 countries and regions. OKG's commitment to innovation is evidenced by its state-of-the-art products.
Response Targets
OKG will make a best effort to meet the following SLAs for hackers participating in our program.
We’ll try to keep you informed about our progress throughout the process.
Program Rules:
Avoid using web application scanners for automatic vulnerability searching which generates massive traffic
Make every effort not to damage or restrict the availability of products, services, or infrastructure
Avoid compromising any personal data, interruption, or degradation of any service
Don’t access or modify other user data, localize all tests to your accounts
Perform testing only within the scope
Don’t exploit any DoS/DDoS vulnerabilities, social engineering attacks, or spam
Don’t spam forms or account creation flows using automated scanners
In case you find chain vulnerabilities we’ll pay only for vulnerabilities with the highest severity.
Don’t break any law and stay within the defined scope
Any details of found vulnerabilities must not be communicated to anyone who is not a HackerOne Team or an authorized employee of this Company without appropriate permission
Please limit your requests to 5 requests per second.
Please do not blast the support centre tickets with too many requests.
Disclosure Guidelines:
As this is a private program, please do not discuss this program or any vulnerabilities (even resolved ones) outside of the program without express consent from the organization
No vulnerability disclosure, including partial, is allowed for the moment.
Please do not publish/discuss bugs.
Eligibility and Coordinated Disclosure:
We are happy to thank everyone who submits valid reports, which help us improve security. However, only those who meet the following eligibility requirements may receive a monetary reward:
You must be the first vulnerability reporter.
The vulnerability must be a qualifying vulnerability
Any vulnerability found must be reported no later than 24 hours after discovery, and exclusively through hackerone.com
You must send a clear textual description of the report along with steps to reproduce the issue, including attachments such as screenshots or proof of concept code as necessary.
Provide detailed but to-the-point reproduction steps
Please submit a working video proof of concept (PoC) upon request. Failure to provide a complete video PoC after we have asked for it may result in a reduction of the reward for the report. Additionally, all reports must be clearly written and straightforward. We reserve the right to reject any submissions that are vague or not directly to the point.
You must not be a former or current employee of ours or one of its contractors.
Only use your HackerOne address (in case of violation, no bounty will be awarded)
Vulnerability Classification
Web2 Vulnerabilities
Focus: Issues found on OKG web platforms (e.g., okx.com).
Critical
Remote Code Execution (RCE): Executing arbitrary code on OKG servers
SQL Injection (Core DB): Large-scale data access/modification in OKG’s core production database
Admin Backend Takeover: Gaining critical admin privileges
Mass Account Takeover: Systemic takeover of a large portion of user accounts, typically affecting >50% of users
System Command Execution: Running OS commands on servers
High
Stored XSS Worms: Self-replicating cross-site scripting on critical user-facing pages.
CSRF (Critical Actions): CSRF that leads to account compromise or unauthorized asset actions.
Account Access at Scale: Unauthorized access to multiple user accounts due to flaws in authentication or authorization logic.
SQL Injection (Limited): Extracting specific sensitive data
Source Code Leakage: Exposure of significant backend or internal source code
SSRF (Contextual Impact): SSRF that reaches internal services (SSRF severity is dependent on the impact of the internal access achieved.)
Medium
Stored XSS (Interaction): Persistent cross-site scripting requiring user interaction to trigger.
CSRF (Core Business): CSRF targeting non-critical business actions.
Auth Bypass (Limited): Unauthorized access to backend or user data without financial impact.
Subdomain Takeover: Control of unused subdomains with reputational or phishing risk.
Verification Code Flaws: Weaknesses in login or password reset verification logic.
Sensitive Data Exposure: Disclosure of encrypted or internal user data through accessible interfaces.
Cleartext Credentials: Hardcoded credentials in source code or configuration files, excluding API keys.
Low
Reflected XSS: Non-persistent cross-site scripting in URLs or parameters.
DOM/Flash XSS: Client-side cross-site scripting with no backend interaction.
Open Redirects: Redirecting users to external domains without validation.
General Info Leaks: Exposure of internal paths, directories, or debug interfaces.
Common CSRF: CSRF targeting non-sensitive user actions.
HTTP Header Manipulation: Modifying headers with low impact, such as cache behavior or redirects.
Mobile Application Vulnerabilities
Focus: Issues found in OKX official mobile apps.
Critical
Remote Exploits: Remote compromise of app integrity or execution of code on OKX infrastructure.
Mass Data Breach: Unauthorized access to large volumes of user data through application flaws.
Admin Privilege Takeover: Gaining backend administrative access via mobile vectors.
System Command Execution: Executing operating system commands on application servers.
SQL/NoSQL Injection : Exploiting mobile API endpoints to manipulate backend database queries, leading to mass exfiltration/modification of sensitive data (PII, financial info, credentials) or backend system compromise.
High
CSRF (Critical Actions): CSRF that leads to account compromise or unauthorized asset actions.
SSRF (Contextual Impact): SSRF accessing internal systems or services via mobile endpoints.
Sensitive Data Exposure: Leaking encrypted or sensitive information stored or processed by the app.
Logic Flaws (Fund Impact): Exploiting application logic to manipulate balances or perform unauthorized transactions.
Source Code Leakage: Exposure of significant application source code.
Unauthorized Operations: Performing unauthorized transactions or financial operations through app exploits.
Medium
Stored XSS (Interaction): Persistent cross-site scripting within mobile app components that requires user interaction.
CSRF (Core Business): Cross-site request forgery targeting non-critical business logic.
Auth Bypass (Limited): Unauthorized access to user data or configurations without financial impact.
Local Storage Leaks: Disclosure of sensitive app-stored data, such as session tokens or encrypted credentials.
Verification Flaws: Weaknesses in OTP, login, or reset mechanisms due to insufficient validation or rate limiting.
Cleartext Credentials: Hardcoded secrets in app files, excluding API keys.
Transaction Disruptions: Application flaws that interfere with trade, deposit, or withdrawal flows.
Low
Component Exposure: Unintended exposure of app components, such as exported Android activities or iOS services.
Open Redirects: Unvalidated redirects in app flows.
HTTP Header Issues: Minor header manipulation with negligible impact.
Desktop Clients Vulnerabilities
Focus: Issues found in OKX desktop clients - Windows / MacOS (downloaded from okx.com).
Critical
Remote Code Execution (RCE): Execution of arbitrary code on the client or connected server via the desktop application.
Admin Privilege Takeover: Gaining backend administrative control through the client (e.g., server-side SSRF).
System Command Execution: Execution of operating system commands on the client or backend server via misconfigurations or unsafe input handling.
High
CSRF (Account Takeover or Fund Transfers): Forged client requests that result in critical authenticated actions.
SSRF (Contextual Impact): Forged requests from the app to internal services.
Sensitive Data Exposure: Exposure of encrypted seeds or local sensitive data via app functionality.
Transaction Disruptions: Client-side bugs that prevent valid trading, deposits, or withdrawals.
Logic Flaws (Fund Impact): Exploiting client-side logic to manipulate account balances or transfer behaviors.
Medium
CSRF (Core Business): Forging non-sensitive client actions, such as settings changes.
Auth Bypass (Limited): Gaining unauthorized access to user-level configurations or restricted client views.
Local Storage Leaks: Exposure of exploitable data stored by the client, such as session tokens or authentication secrets, without adequate protection or access control.
Cleartext Credentials: Hardcoded secrets (excluding API keys) embedded in client configurations or binaries.
Low
Local DoS: Crashing the desktop app via malformed files or inputs.
Minor Misconfigurations: Exposure of temporary or local files with no sensitive data or direct exploitability.
Web3 Vulnerabilities
Focus: Issues affecting OKX Web3 Wallet, blockchain infrastructure, or funds.
Extreme
Criteria: Affects all of users, >60 min downtime, or >$500K potential loss.
Zero-interaction mass compromise of funds/private keys or large-scale data breaches.
Critical
Criteria: Affects >50% of users, >15 min downtime, or >$100K potential loss.
Remote exploits on validators/contracts or admin takeovers.
High
Criteria: Affects >30% of users, >10 min downtime, or >$50K potential loss.
Validator issues, fund logic flaws, or code leaks.
Medium
Criteria: Requires interaction or limited scope.
Interaction-based wallet exploits or transaction disruptions.
Low
Criteria: Minimal impact or exploitability.
Node stability issues or minor leaks.
Other classifications
IDOR Vulnerabilities
Researchers must be able to prove a feasible way to gain an ID as an attacker and we will not accept reports where IDs are being brute forced.
Web3 Wallet Extensions reports
The wallet extensions share the same codebase. Therefore, if you identify a vulnerability, submitting a single report for any one wallet is sufficient. Submitting the same vulnerability report for another wallet extension will be considered a duplicate and will not be eligible for separate rewards.
Mobile application reports
Submitting a single report for any one of the mobile applications is sufficient. Submitting the same vulnerability report for another mobile application will be considered a duplicate and will not be eligible for separate rewards.
Additional notes
In addition to identified vulnerabilities, we appreciate you reporting any broken links, potential Denial-of-Service (DoS) vulnerabilities, or leaked credentials you encounter during your research.
Please note that we will review these findings on a case-by-case basis to determine if they are eligible for a bounty award.
OUT OF SCOPE – WEB / DESKTOP CLIENT VULNERABILITIES
When reporting vulnerabilities, please consider (1) attack scenario / exploitability, and (2) security impact of the bug. The following issues are considered out of scope:
Reports from automated tools or scans
False positive SQL Injection
To avoid submitting a false positive, please ensure that you are able to provide a working PoC that demonstrates the ability to retrieve the current database / current user name
Spam vulnerability, mail spoofing, mail bomb, etc
Self-XSS
Use of known-vulnerable library or component
Clickjacking on pages with no sensitive actions
Cross-Site Request Forgery (CSRF) on unauthenticated forms or forms with no sensitive actions
Attacks requiring MITM or physical access to a user's device
Previously known vulnerable libraries without a working Proof of Concept
Comma Separated Values (CSV) injection without demonstrating a vulnerability
Missing best practices in SSL/TLS configuration
Any activity that could lead to the disruption of our service (DoS).
Content spoofing and text injection issues without showing an attack vector/without being able to modify HTML/CSS
Rate limiting or brute-force issues on non-authentication endpoints
Missing best practices in Content Security Policy
Missing HttpOnly or Secure flags on cookies
Missing email best practices (Invalid, incomplete or missing SPF/DKIM/DMARC records, etc.)
Vulnerabilities only affect users of outdated or unpatched browsers [Less than 2 stable versions behind the latest released stable version]
Software version disclosure / Banner identification issues / Descriptive error messages or headers (e.g. stack traces, application or server errors)
Public Zero-day vulnerabilities that have had an official patch for less than 1 month will be awarded on a case by case basis
Tabnabbing
Issues that require unlikely user interaction
Vulnerabilities that are already known (e.g. discovered by an internal team)
Best practice reports are not eligible for bounties but are appreciated
Wordpress related vulnerability
DLL hijacking reports that fail to demonstrate how they achieve elevated privileges.
Reports that bypass rate limiting through changing of IP addresses / Device IDs
Address bar / URL / domain spoofing in dApp browser
Sensitive data exposure on social media accounts
Internal domain takeovers that are not okx.com / okg.com / oklink.com
Reports with desktop client versions not downloaded from our official sites listed in our scope
Proof of reserves being reported as "sensitive document" leak
Sensitive information leak from web archive / wayback machine
Broken link / social media account takeovers
OUT OF SCOPE – MOBILE VULNERABILITIES
Attacks requiring physical access to a user's device
Vulnerabilities that require root/jailbreak
Vulnerabilities requiring extensive user interaction
Exposure of non-sensitive data on the device
Reports from static analysis of the binary without PoC that impacts business logic
Lack of obfuscation/binary protection/root(jailbreak) detection
Bypass certificate pinning on rooted devices
Lack of Exploit mitigations i.e., PIE, ARC, or Stack Canaries
Sensitive data in URLs/request bodies when protected by TLS
Path disclosure in binary
OAuth & app secret hard-coded/recoverable in IPA, APK
Sensitive information retained as plaintext in the device’s memory
Crashes due to malformed URL Schemes or Intents sent to exported Activity/Service/Broadcast Receiver
Any kind of sensitive data stored in-app private directory
Runtime hacking exploits using tools like but not limited to Frida / Appmon (exploits only possible in a jailbroken environment)
Shared links leaked through the system clipboard
Any URIs leaked because a malicious app has permission to view URIs opened.
Exposure of API keys with no security impact (Google Maps API keys etc.)
Reports that bypass rate limiting through changing of IP addresses / Device IDs
Address bar / URL / domain spoofing in dApp browser
Reports with mobile versions not downloaded from official sites listed in our scope
Reward List
High-quality reports (such as complicated attack chains with video PoC) may be awarded an extra bonus. A high-quality report is a thoroughly written vulnerability report that includes (when applicable) a working proof-of-concept, root cause analysis, a suggested fix, and any other relevant information.
Known issues
Please note that the OKG Security Team also actively looks for vulnerabilities across all assets internally. For reported issues that are already known to us, we will close them as duplicates.
We seek your kind cooperation to respect our final decision and to refrain from making multiple negotiations once the decision has been made.
Safe Harbor
Any activities conducted in a manner consistent with this policy will be considered authorized conduct and we will not initiate legal action against you. If legal action is initiated by a third party against you in connection with activities conducted under this policy, we will take steps to make it known that your actions were conducted in compliance with this policy.
Thank you for helping keep OKG and our users safe!
Top hackers
See all hackers 
1
ice_oranges
Reputation: 838
2
nasserwashere
Reputation: 369
3
gh057_php
Reputation: 232
4
yao1111
Reputation: 223
5
4us71n0
Reputation: 220
6
hij4cker
Reputation: 118
7
fr4via
Reputation: 111
8
t41nk
Reputation: 98
9
ocheanm
Reputation: 91
10
aroly
Reputation: 89
11
zelzal
Reputation: 79
12
usualwyy
Reputation: 79
OKG
A pioneer in blockchain industry dedicated to the R&D and the commercialization of blockchain technology.
Bug Bounty Program launched in Mar 2023
Response efficiency: 98%
Submit report
Rewards

Severity

Rewards

Low

Avg. bounty $200

$50–$600
Medium

Avg. bounty $1,583

$200–$2,000
High

Avg. bounty n/a

$600–$5,000
Critical

Avg. bounty n/a

$1,200–$1,000,000
Stats
Total bounties paid	$176,659
Average bounty range	$300 - $450
Top bounty range	$1,575 - $23,750
Bounties paid | 90 days	$4,950
Reports received | 90 days	162
Last report resolved	18 hours ago
Reports resolved	182
Hackers thanked	128
Assets In Scope	10
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