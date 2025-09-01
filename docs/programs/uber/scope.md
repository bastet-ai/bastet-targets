# Scope - Uber

**Snapshot Date**: 2025-09-01

**Program Policy URL**: https://hackerone.com/uber

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
Platform Standards
Fully compliant with Platform Standards. 
Top Response Efficiency
This program's response efficiency is above 90%. 
Managed by HackerOne
Collaboration Enabled
Includes Retesting
17 hours
Average time to first response
2 days, 16 hours
Average time to triage
5 days, 6 hours
Average time to bounty
1 week, 22 hours
Average time from submission to bounty
Rewards summary
Last updated on June 2, 2025. View changes 
Each severity lists the 90-day average bounty and the percentage of total resolved reports, if applicable.
Low

Avg. bounty $331
29.89% submissions

Medium

Avg. bounty $1,346
44.49% submissions

High

Avg. bounty $7,083
21.57% submissions

Critical

Avg. bounty n/a
4.04% submissions

$300
$500–$2,500
$4,000–$11,000
$11,000–$15,000
Scope exclusions
Core Ineligible Findings are out of scope. 
Learn more 
Overview
Last updated on January 15, 2025. View changes 
Uber Bug Bounty Program Terms
ㅤ
The scope for Uber’s Bug Bounty Program is focused on securing the data of our users and company assets. Therefore, our approach is to evaluate any given report based on the specific security impact for users (versus domain + vulnerability class). Issues that do not have an information security related impact will be closed. Below we describe the various security impact buckets that are in-scope, examples of admissible vulnerability types, and domains that could potentially have meaningful security impact.

By submitting a report or otherwise disclosing a vulnerability to us (making a “Submission”), you are indicating that you have read and agree to follow the rules set forth on this page (“Program Terms”).
Ground Rules
Do:
Do abide by these Program Terms
Do be patient & make a good faith effort to provide clarifications to any questions we may have about your submission
Do be respectful when interacting with our team, and our team will do the same
Do perform testing only using accounts that are your own personal/test accounts. By default, we expect your report to clearly reference your @wearehackerone.com email address
Do exercise caution when testing to avoid negative impact to data or services
Do respect privacy & make a good faith effort not to change or destroy Uber or personal data
Do stop whenever you are unsure if your test case may cause, or have caused, destructive data or systems damage with testing a vulnerability; report your initial finding(s) and request authorization to continue testing
Do NOT:
Do not leave any system in a more vulnerable state than you found it
Do not use or interact with accounts you do not own
Do not brute force credentials or guess credentials to gain access to systems or accounts
Do not change passwords of any account that is not yours or that you do not have explicit permission to change. If ever prompted to change a password of an account you did not register yourself or an account that was not provided to you, stop and report the finding immediately
Do not perform denial of service (DoS) attacks or related tests that would cause availability interruptions or degradation of our services
Do not publicly disclose a vulnerability submission without our explicit review and consent
Do not engage in any form of social engineering of Uber employees, customers, or partners
Do not engage or target any specific Uber employees, customers, or partners during your testing
Do not access, extract, or download personal or business information beyond that which is minimally necessary for your Proof-of-Concept purposes
Do not do anything that would cause destruction of Uber data or systems
Good Faith Disclosures and Safe Harbor
ㅤ
You must act in good faith when investigating and reporting vulnerabilities to us. Acting in good faith means that you will:
Follow the rules outlined in this policy: This includes the Program Terms, Uber Terms of Use, and any terms and conditions for Uber’s in-scope domains. If there is any inconsistency between these Program Terms and any of Uber’s other terms, these Program Terms will control.
Respect our users’ privacy: You should only interact with Uber accounts you own or with explicit permission from the account holder. The intent of the program is designed to hunt for vulnerabilities in our products and services. If you encounter user information during the course of your research:
Stop at that point in your testing where you have an adequate proof of concept for submission purposes. Actions taken beyond this are not authorized
Report the Submission with a complete proof of concept immediately to our security team so we can investigate
Keep user information confidential; Do not save, copy, store, transfer, disclose, or otherwise retain the information
Work with us if we have any further requests
Extortion: You should never illegally or in bad faith leverage the existence of a vulnerability or access to sensitive or confidential information, such as making extortionate demands or ransom requests. If you find a vulnerability, report it to us with no conditions attached.
Test with care: You should never leave a system or users in a more vulnerable state than when you found them. This means that you should not engage in testing or related activities that degrades, damages, or destroys information within our systems, or that may impact our users, such as denial of service, social engineering or spam. If you have made a good faith effort to abide by these Program Terms, we will not initiate or recommend legal action against you, and if a third party initiates legal action, we will make it known that your activities were conducted pursuant to the Bug Bounty Program. Failure to act in good faith will result in immediate disqualification from the Bug Bounty Program and ineligibility for receiving any benefit of the Bug Bounty Program. If at any point while researching a vulnerability, you are unsure whether you should continue, immediately engage with our security team.
Eligibility to Participate
ㅤ
To be eligible to participate in our Bug Bounty Program, you must:
Be at least 18 years of age if you test using an Uber account
Not be employed by Uber or any of its affiliates or an immediate family member of a person employed by Uber or any of its affiliates
Not be a resident of, or make Submissions from, a country against which the United States has issued export sanctions or other trade restrictions
Not be in violation of any national, state, or local law or regulation with respect to any activities directly or indirectly related to the Bug Bounty Program
Not be using duplicate HackerOne accounts
If (i) you do not meet the eligibility requirements above; (ii) you breach any of these Program Terms or any other agreements you have with Uber or its affiliates; or (iii) we determine that your participation in the Bug Bounty Program could adversely impact us, our affiliates or any of our users, employees or agents, we, in our sole discretion, may remove you from the Bug Bounty Program and disqualify you from receiving any benefit of the Bug Bounty Program.
Out-of-Scope
ㅤ
Certain vulnerabilities are considered out-of-scope for the Bug Bounty Program. Those out-of-scope vulnerabilities include, but are not limited to:
Vulnerabilities not involving product or coding flaws, but solely relying upon possession of stolen or compromised credentials or authentication obtained by ATO or credential stuffing, and by enumeration with pre-defined and known list of UUIDs
Vulnerabilities dependent on Phishing in a DNS domain that is not in one of our primary service domains
Most vulnerabilities that rely on a runtime context within a sandbox, lab, staging, testing or non-production environment
Vulnerabilities involving stolen or compromised credentials
Open redirect resulting in a low security impact. In the event you are able to chain with other vulnerabilities (e.g., steal tokens, SSRF, etc.), please let us know
Credential stuffing or physical access to a device
Any vulnerabilities requiring significant and unlikely interaction by the victim, such as disabling browser controls
Man-in-the-Middle attacks except in mobile applications
Account enumeration with a pre-defined and known list of UUIDs
Invite/Promo code enumeration
Ability to send push notifications/SMS messages/emails without the ability to change content
Information disclosures related to existence of accounts: Account oracles, the ability to submit a phone number, email, UUID and receive back a message indicating an account exists
Reports against Uber services that state that a particular software component is of a specific version, and is vulnerable without an accompanying proof-of-concept
Vulnerabilities only affecting users using outdated, unpatched, or unsupported browsers, mobile application, mobile operating system, and end-point client software, including the versions of our applications currently in the app stores
Stack traces, path disclosure, and directory listings
CSV injection vulnerabilities
Best practices concerns without a demonstrable information assurance issue and proof-of-concept
Ability to take over social media pages (Twitter, Facebook, Linkedin, etc.)
Negligible security severity
Speculative reports about theoretical damage -- please always provide a proof-of-concept
Vulnerabilities that cannot be used to exploit other users or Uber (e.g., self-xss or having a user paste JavaScript into the browser console)
Vulnerabilities as reported by automated scanning and/or enumeration tools without additional analysis, validation, or reasoning as to how such Submissions have a demonstrable information assurance impact and vulnerability
Distributed or denial of service attacks (DDoS/DoS) and/or reports on rate limiting issues
Content injection or content spoofing issues
Cross-site Request Forgery (CSRF) with minimal security implications or lack of information assurance issues (e.g., Logout CSRF, etc.)
Missing cookie flags on non-authentication cookies
Submissions that require physical access to a victim’s computer/device for successful exploitation
SSL/TLS protocol scan reports reporting purported vulnerable protocol versions or handshakes
Banner grabbing issues (figuring out what web server we use, etc.).
Open ports or services without an accompanying proof-of-concept demonstrating a vulnerability or bonafide information assurance issues
Physical or social engineering attempts (this includes phishing attacks against Uber employees)
Exposed login panels without an accompanying proof-of-concept demonstrating a vulnerability or path of exploitation
Dangling IPs
Subdomain takeovers - please demonstrate that you are able to take over the page by leaving a non-offensive message, such as your username
Reports on third-party products, services, or applications not owned by Uber
Out-of-scope domains – Please refer to the scoping section
Account & Financial Fraud
ㅤ
Certain types of account fraud are in-scope provided that part of the attack chain relies on exploiting the workflow logic caused by technical product and services vulnerabilities, coupled with additional operational security loopholes for a hybrid end-to-end exploit. Vulnerabilities associated with fraud will be allotted a bonus payment upon validation related to financial impact. Examples of fraud exploits that are potentially in-scope would include, but are not limited to the items listed below.
Please ensure to read the Out of Scope section prior to submitting a vulnerability associated with a fraud issue. Submissions associated with credential stuffing, brute forcing, or compromised passwords from data breaches are out of scope.
Financial Fraud:
Financial exploits in Uber services that require multi-account collusion and abuse
Identity Fraud:
Identity exploits involving stolen, hi-jacked and/or synthetic identities
Identity exploits that can potentially culminate into safety issues
Each submission in this area will be reviewed on a case by case basis, and must be determined to be related to a technical product vulnerability to be considered in-scope.
Calculating Security Impact
ㅤ
Understanding the security impact of a given report is understanding which security buckets it lands in, understanding the scale of exposure in each of those situations, understanding what mitigating factors exist, and finally understanding what multiplying factors exist. Below are some categories to consider when assessing security impact.
Multiplying Factors
Sensitivity of user data exposed -- when a vulnerability exposes user data, the sensitivity of the type of information exposed influences the security impact
Scale of exposure -- when considering security impact of any given vulnerability, it’s important to understand the scale of exposure and how many potential victims exist if the vulnerability was exploited at scale
Severity of forged actions -- when a vulnerability allows an attacker to forge requests/actions on behalf of the user, the sensitivity/severity of those actions determine the security impact. For example, changing a user’s last name, versus adding new payment information, have drastically different security impacts
Forge communication from Uber -- when a vulnerability allows an Attacker to send communication (and control the content) to a Victim and have it come officially from Uber. An example would be the ability to control the contents of an in-app push notification
Mitigating Factors
Requires user interaction -- when an exploit scenario requires a human from Uber or a Victim to manually interact before the exploit is successful
Authorized relationship -- when an exploit scenario involves an authorized relationship or is given express permission from the Victim
Requires brute forcing -- exploit scenarios that require an Attacker to brute force a value in order for the exploit to be successful. For example, the need to brute force a phone number, email, or UUID. The amount this mitigating factor comes into play is dependent on how “hard” it is to brute force the value in question -- brute forcing phone numbers is much “easier” than a UUID
Existence of rate limiting -- exploit scenarios that are mitigated by rate limiting the number of requests, inhibiting the ability to exploit a vulnerability at scale. Forging various IP headers (X-Forwarded-For, X-Real-IP, Client-IP, True-Client-IP) are not considered to be “mitigating” factor since it doesn’t require actually having unique IPs
Physical access -- exploit scenarios requiring physical access to a device
Noticeable to the victim -- exploits that are noticeable to the victim. For example, changing someone’s password on their account would lock them out of their account and would be immediately noticeable
Account put into arrears or banned -- when an exploit then puts the Attacker’s account into arrears or results in a ban
Social engineering -- when an exploit requires social engineering a person to be successful.
Requires privileged network position -- when an exploit (often times MiTM) requires having privileged network position to be successful
Requires multiple accounts -- when an exploit requires the ability to mint new accounts indefinitely
Confidentiality
ㅤ
Any information you receive or collect about us, our affiliates or any of our users, employees or agents in connection with the Bug Bounty Program (“Confidential Information”) must be kept confidential and only used in connection with the Bug Bounty Program. You may not use, disclose or distribute any such Confidential Information, including without limitation any information regarding your Submission, without our prior written consent. You must get written consent by submitting a disclosure request through the HackerOne platform.
Report Quality
ㅤ
High quality submissions allow our team to understand the issue better and engage the appropriate teams to fix. The best reports provide enough actionable information to verify and validate the issue without requiring any follow up questions for more information or clarification.
Check the scope page before you begin writing your report to ensure the issue you are reporting is in scope for the program
Think through the attack scenario and exploitability of the vulnerability and provide as many clear details as possible for our team to reproduce the issue (include screenshots when applicable)
Please include your understanding of the security impact of the issue. Our bounty payouts are directly tied to security impact, so the more detail you can provide, the better. We cannot payout after the fact if we don’t have evidence and a mutual understanding of security severity
In some cases, it may not be possible to have all of the context on the impact of a bug. If you’re unsure of the direct impact, but feel you may have found something interesting, feel free to submit a detailed report and ask
Video proof-of-concepts (PoCs) will only be considered with a completed report. Stand alone video proof-of-concepts will automatically be closed
A vulnerability must be verifiable and reproducible for us to be considered in-scope
All reports must demonstrate security impact to be considered for bounty reward
Please note: Known vulnerabilities or submissions by researchers leading back to the same root cause will be classified as a duplicate finding.
Report States
ㅤ
We strive to be consistent with how we close reports and below are the details for each state:
Spam: a report with no useful information
Needs more info: not enough actionable information in report to triage
Not applicable: no reproducible security vulnerability or explicitly out-of-scope per our guidelines
Duplicate: a vulnerability that has previously been found either internally or via Hackerone
Informative: a reproducible issue with negligible security impact or an issue with a product that doesn't affect our service/software (e.g. an S3 bucket named uber-secret-stuff that isn't actually related to us)
Triaged: either a valid report or a report that needs more investigation from an internal team, typically the former
Resolved: a verified vulnerability that has been fixed
Bounty Amounts
ㅤ
Reports that require an attacker to be authenticated, including accounts they can sign up for, will have the Privileges Required metric set to Low (PR:L) when calculating the CVSS severity score.
Previous bounty amounts are not considered precedent for future bounty amounts -- software is constantly changing and therefore the given security impact of the exact same issue at different times in the development timeline can have significantly different security impacts.
Bounty awards are not additive and are subject to change as our internal environment evolves. We determine the upper bound for security impact and award based on that impact.
We focus bounty amounts on the security impact of any given issue -- things that influence security impact are the scale of exposure and the various mitigating and multiplying factors.
We recognize that researchers value receiving bounties sooner than later, but basing payouts on security impact often requires us to get to resolution before we completely understand the potential security impact. To accomplish both of these needs, we have a hybrid model where we pay out our minimum bounty at time of triage and then full bounty at resolution once we completely understand security impact.
The general process for determining bounty:
Determine which security impact buckets the issue falls in. It’s likely that any given issue will land in several different impact buckets -- we choose the most impactful and severe bucket. We try to answer the question “What is the most damaging thing you could do with this issue?”
Determine the approximate scale of exposure to try and answer “how many users could be exploited by an Attacker?”
Determine mitigating factors that reduce the security impact of different issues -- this often involves asking “What could make this vulnerability hard to exploit?” or “How sensitive are the things being changed/accessed by the vulnerability?”
Determine multiplying factors that increase the security impact of different issues -- this also often involves asking “How sensitive are the things being changed/accessed by the vulnerability?” or “What other exposure exists that the researcher didn’t explicitly call out?”
With the answers from above, we have a good picture of security impact and potential exploitability of any given issue and can use those details to determine bounty amount
Follow up security bypasses on reported vulnerabilities are subject to bonus payments
The bounty ranges for the different security impact buckets:
Exposure of User Data -- the payout ranges for this bucket range from $0 to $10,000
Unauthorized Requests on Behalf of User/Employee -- the payout ranges for this bucket range from $0 to $10,000
Monetary Impact -- the payout ranges for this bucket range from $0 to $10,000
Phishing -- the payout ranges for this bucket range from $0 to $5,000
Safety -- the payout ranges for this bucket range from $0 to $10,000
Bounty payouts and amount, if any, will be determined by us in our sole discretion. In no event are we obligated to provide a payout for any submission. The format, currency and timing of all bounty payouts shall be determined by us in our sole discretion. You are solely responsible for any tax implications related to any bounty payouts you may receive.
If we receive several reports for the same issue, we offer the bounty to the earliest report for which we had enough actionable information to identify the issue.
Bounty payouts are generally determined based on the criticality of the finding. The following chart illustrates sample ranges of vulnerabilities and the severity they have historically been associated with.
Vulnerability	Common Severity Range
IDOR	Low - Critical
Information disclosure	Low - Critical
Server-Side Request Forgery	Medium - Critical
XSS	Medium - High
Benefits and rewards
ㅤ
Pay at Triage
We strive to reward valid reports within 14 days from the date the report reaches the triage stage, often sooner.
Bounty rewards will be calculated according to CVSS 3.1 as applicable and using the bounty ranges published on our program page.
The official CVSS 3.1 reference used by our program is:
https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator
At our discretion as program owners, some report types will not receive rewards based on CVSS 3.1 score. These reports will receive either a fixed amount reward or the reward will be determined on a case-by-case basis. See Section 2 below.
CVSS Scoring Exceptions
There are several situations in which Uber will determine a reward without calculating a CVSS 3.1 score. An example of set price per exploit has been listed below:
The report types listed below will receive rewards without calculating a CVSS 3.1 score:
Type	Reward
Subdomain Takeover	$500
Broken URL links on *.uber.com	$100 or $0 (Case by case)
3rd Party Info Disclosures (Prezi, Trello, Google Doc, etc)	Case by case
Additional Reward Policy
Previous bounty amounts are not considered a precedent for future bounty amounts. Bounty awards are not additive and are subject to change as our internal environment evolves. We determine the upper bound for security impact and award based on that impact.
When determining bounty amounts, we consider the security impact of any given issue -- things that influence security impact are the scale of exposure and the various mitigating and multiplying factors.
Bounty payouts and amounts, if any, will be determined by us in our sole discretion. In no event are we obligated to provide a payout for any Submission. The format, currency and timing of all bounty payouts shall be determined by us in our sole discretion. You are solely responsible for any tax implications related to any bounty payouts you may receive.
If we receive several reports for the same issue, only the earliest valid report that meets requirements and provides enough actionable information to identify the issue may be considered for a bounty.
SSRF Sheriff
We have set up a "sheriff" service for SSRF testing. If you believe you have an SSRF in production, please use either of the following IP/port combinations for testing:
'http://dca11-pra.prod.uber.internal:31084/<handle>@wearehackerone.com`
This service will accept HTTP requests to any endpoint, of any request type, and will return a secret token in both headers and response body. It also responds with valid response types for all of the file extensions listed below (just append the extension to your request path, e.g., /foobar.json):
xml
json
gif, png, jpg/jpeg
html
txt
mp4
csv
For additional information about the SSRF Sheriff Service, including the source code, see: https://github.com/teknogeek/ssrf-sheriff
Asset Recon
Uber provides endpoints to determine whether an asset belongs to Uber:
https://appsec-analysis.uber.com/public/bugbounty/ListDomains
https://appsec-analysis.uber.com/public/bugbounty/ListIPs
All of the endpoints support offset and limit as optional parameters.
Example: https://appsec-analysis.uber.com/public/bugbounty/ListDomains?offset=0&limit=100.
The public endpoints for asset information are for recon purposes. Information returned by those endpoints (or not) does not mean a bounty is guaranteed.
Rights and Licenses
ㅤ
We may modify the Program Terms or cancel the Bug Bounty Program at any time.
By making a Submission, you represent and warrant that the Submission is original to you and you have the right to submit the Submission.
By making a Submission, you give us the right to use your Submission for any purpose.
FAQ
ㅤ
Can I get Uber swag?
Uber does not currently offer swag.
Can Uber provide me with a pre-configured test account?
If credentials are necessary to access any of our assets, this will be included in our policy page under test plan or test instructions. If you do not see any instructions about test accounts in our policy, none are available or provided.
What is required when submitting a report?
https://docs.hackerone.com/hackers/submitting-reports.html
How do I make my report great?
https://docs.hackerone.com/hackers/quality-reports.html
I submitted a report. Now what? I have questions.
https://www.hackerone.com/blog/how-bug-bounty-reports-work
What causes a report to be closed as Informative, Duplicate, N/A, or Spam?
https://docs.hackerone.com/hackers/report-states.html
What is an example of an accepted vulnerability?
Valid and accepted vulnerabilities would be the type of report that identifies a unique security impact on this program’s specific scope. The report must also meet any submission criteria outlined in the policy, such as test plan instructions and a working proof of concept.
What if I find Uber accounts or passwords on the Internet?
Passwords / accounts found on The Internal would be considered an informational finding.
Top hackers
See all hackers 
1
shubs
Reputation: 4k
2
sicksec
Reputation: 4k
3
ngalog
Reputation: 3k
4
wkcaj
Reputation: 2k
5
mashoud1122
Reputation: 1k
6
kadusantiago
Reputation: 1k
7
vijay_kumar
Reputation: 1k
8
fransrosen
Reputation: 1k
9
anandpingsafe
Reputation: 1k
10
todayisnew
Reputation: 1k
11
akashpawar
Reputation: 1k
12
cache-money
Reputation: 990
Uber
https://www.uber.com
Bug Bounty Program launched in Mar 2016
Response efficiency: 95%
Submit report
Rewards

Severity

Rewards

Low

Avg. bounty $331
29.89% submissions

$300
Medium

Avg. bounty $1,346
44.49% submissions

$500–$2,500
High

Avg. bounty $7,083
21.57% submissions

$4,000–$11,000
Critical

Avg. bounty n/a
4.04% submissions

$11,000–$15,000
Stats
Total bounties paid	$4,200,197
Average bounty range	$500 - $700
Top bounty range	$3,000 - $50,000
Bounties paid | 90 days	$61,259
Reports received | 90 days	305
Last report resolved	6 hours ago
Reports resolved	2484
Hackers thanked	1110
Assets In Scope	4
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