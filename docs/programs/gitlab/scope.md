# Scope - GitLab

**Snapshot Date**: 2025-09-01

**Program Policy URL**: https://hackerone.com/gitlab

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
Safe harbor
Program highlights
Gold Standard
Adheres to Gold Standard Safe Harbor. 
Top Response Efficiency
This program's response efficiency is above 90%. 
Managed by HackerOne
Collaboration Enabled
Includes Retesting
18 hours
Average time to first response
1 month, 3 weeks
Average time to bounty
1 month, 3 weeks
Average time from submission to bounty
3 months, 1 week
Average time to resolution
Rewards summary
Last updated on November 22, 2021. View changes 
Each severity lists the 90-day average bounty and the percentage of total resolved reports, if applicable.
Low

Avg. bounty $614
29.15% submissions

Medium

Avg. bounty $1,170
45.73% submissions

High

Avg. bounty $9,132
19.65% submissions

Critical

Avg. bounty $20,505
5.47% submissions

$100–$750
$1,000–$2,500
$5,000–$15,000
$20,000–$35,000
Scope exclusions
Core Ineligible Findings are out of scope. 
Learn more 
Platform standards deviations
This program has not committed to the following Platform Standards. As such the report severity or outcome may differ.
Setting the CVSS Privilege Requirement for Self Sign-Up Vulnerabilities
Note that even if GitLab.com allows self-registration, most GitLab instances in the wild don't -- which makes vulnerabilities that are exploitable without authentication a lot more impactful. For this reason, any vulnerability that requires an account will not be scored with "Privilege Required: None".
Check here for the full Platform Standards page list.
Overview
Last updated on June 6, 2025. View changes 
Rewards
We have different rewards depending on the business impact of each asset. A more complete description of each asset will be in the scope section, but in general GitLab.com and all our products' source code is rewarded the highest, then non-production environments have reduced bounties and our static websites have the lowest payouts.
See the Rewards section above for our bounty ranges. For reports with critical or high severity we pay $1000 at the time the report is triaged, and for medium severity reports we pay $500. The remainder, if any, will be paid as soon as the severity has been fully analyzed internally. The calculator we use to calculate CVSS-based bounty amounts is accessible to everyone.
Reports about intended behavior resulting in an update of our documentation will be rewarded with a $100 bounty, as long as this update is security related.
GitLab assigns CVE identifiers to vulnerabilities affecting GitLab products. While the CVSS score for those should generally align with the severity set in the HackerOne report, sometimes they will differ depending on our assessment of the business impact based on existing mitigations, the sensitivity of the impacted data, and number of impacted customers among other factors.
While we try to be as consistent as possible with rewards, our program is also evolving and rewards may change accordingly to how our program evolves with time.
For valid reports for which the author can't accept monetary rewards, we offer to plant trees in our GitLab forest on their behalf.
GitLab Ultimate License
Reporters which have submitted three or more valid findings to our program are eligible to receive a one year self-hosted Ultimate license supporting up to five users. If you believe you're eligible, please request the Ultimate license via a comment in one of your reports mentioning the assigned security engineer, and include links to your other two valid reports. Once verified, the license will be sent to your [username]@wearehackerone.com email address. Any further valid submissions in that year will extend you the next year's license for free too.
How severity is determined
Upon receipt of the finding, we will conduct an internal investigation to understand the full impact of the vulnerability. We then assess the severity using the Common Vulnerability Scoring System (CVSS) and score according to the guidelines you can see in the "help & definitions" section of our CVSS calculator. Note that even if GitLab.com allows self-registration, most GitLab instances in the wild don't -- which makes vulnerabilities that are exploitable without authentication a lot more impactful. For this reason, any vulnerability that requires an account will not be scored with "Privilege Required: None".
Reports for security issues that aren't vulnerabilities in our systems and where CVSS isn't appropriate (for example a leaked confidential document) will receive a discretionary bounty based on our assessment of the impact of the finding.
We collaborate with HackerOne Triage Service for quickly identifying valid and impactful reports. By-passing the HackerOne triage service by opening issues in GitLab project or reaching out to GitLab team members directly on reports or via other mediums is a violation of HackerOne Code of Conduct (CoC) and might attract CoC enforcement actions.
CVSS scores and bounty awards are determined by the consensus of the GitLab Bug Bounty Council. Multiple team members review and validate the CVSS for each triaged report to ensure accurate and impartial assessments. Reporters can raise concerns if they believe a CVSS metric has been misjudged. However, the final decision on CVSS scoring and bounty awards rests with the council.
Duplicates
For different attack vectors that result in the same mitigation, GitLab reserves the right to reward the first report that is validated for that fix. All subsequent reports that are addressed by that mitigation will be considered as duplicates, regardless of the attack vector.
Rules of Engagement, Testing, and Proof-of-concepts
When researching security issues, especially those which may compromise the privacy of others, you must use only test accounts in order to respect our users’ privacy. Accessing private information of other users, performing actions that may negatively affect GitLab’s users (e.g., spam, denial of service) will disqualify the report. Activity that is disruptive to GitLab operations will result in account bans and disqualification of the report. Examples of disruptive activity include, but are not limited to:
Generating abuse requests
Submission of support, sales or other requests to 3rd party systems
Mass creation of users, groups, and projects
Typosquatting or other namesquatting
Spam-like or other high volume activity
Sending reports from automated tools without verifying them will immediately disqualify the report.
Disruptive activity such as that listed above can be researched freely on your own installation of gitlab. GitLab is an open-core company, with the source code powering GitLab.com available in the main GitLab Project. You are encouraged to install your own standalone instance for researching vulnerabilities. Screen captures, logs, and videos showing vulnerabilities against your own GitLab installation are encouraged.
Behave professionally. Failure to follow HackerOne's policies, such as the Code of Conduct, may result in the report being ineligible for a bounty at GitLab's sole discretion, in addition to any enforcement action HackerOne may decide to take.
Demonstrating Impact
Always choose a non disruptive option to demonstrate the impact. If the only way to demonstrate an impact is a disruptive one then stop and report the issue, we will validate the impact.
In the case of reports related to credential leaks do not create additional access credentials using the leaked one. We will determine impact ourselves and award for the maximum impact we uncover.
In the case of reports related to Subdomain Takeovers, PoC's should create a simple page with your HackerOne handle as a single line of text at the affected URL. The page should utilize a UUID or complex string that wouldn't ordinarily be accessed. An example would be vulnerable-subdomain.example.com/$UUID-poc.txt where $UUID is a hard-to-guess value.
For sharing POC videos, directly upload the video in the report. Do not upload POC videos in public platforms until the report is disclosed. Please refer to our disclosure policy for more details.
Testing on GitLab.com
When testing on GitLab.com, your @wearehackerone.com address must be associated with the testing account. If separate accounts are necessary, you can use an alias. This will help us separate testing from other forms of abuse, and help inform the decision of blocking an account. Note that this does not provide immunity and the Rules of engagement must be followed at all times.
Please keep note of any IP addresses you use during your research, as this can help us when investigating and remediating vulnerabilities.
Please don't request Developer access to our projects, including the GitLab Community Forks group. While it can indeed be a security risk for the company that a random person joins those projects, it is something the security team handles and we don't want bug bounty hunters to test those workflows as it creates unnecessary noise for our teams.
SLA
GitLab will make a best effort to meet the following SLAs for hackers participating in our program:
Time to first response (from report submit) - 1 business day
Time to triage (from report submit) - 5 business days
Time to bounty (from triage) - between 5 and 45 business days
The only appropriate place to inquire about a HackerOne report's status is on the report itself. Please refrain from submitting your report or inquiring about its status through additional channels including any other unrelated HackerOne report, as this unnecessarily binds resources in the security team.
Scope
All GitLab Inc. products are in scope unless explicitly noted otherwise.
Testing on subdomains that are neither explicitly in scope nor out of scope isn't encouraged, but if you can find a vulnerability with business impact on such a subdomain please report it. We normally close sufficiently clear reports as Informative so there will be no negative effect on your reputation score if we decide that it's out of scope. However, remember that GitLab subdomains that are running third party services are strictly out of scope.
GitLab Releases
We release new features every month. You can learn more about our release process, see the latest monthly release blog post and see what's coming in future releases. If you're bug hunting, might we suggest a newly released feature? 😉
Vulnerabilities in 3rd-party dependencies & packaged software
Reports on vulnerabilities in third-party software which GitLab depends on will be accepted and a bounty rewarded if and only if:
The report includes a new vulnerability, for which a patch is not available, or
A patch has been available for more than 30 days.
It has a clear and working proof of concept that illustrates the impact to GitLab.
It has Critical or High impact to GitLab.
This does not include websites of third party software and services and only includes dependencies & packaged software.
AI related vulnerabilities
We only accept issues related to the content of model prompts and responses if they have a directly verifiable security impact on GitLab.
Out of scope
Automated scanning of any kind
GitLab sites of third party software and services (marketing services, third-party mail services, developer/support installations etc.)
This includes gitlab.cn and the JiHu-specific GitLab distribution which are property of GitLab Information Technology (Hubei) Co., Ltd. (JiHu), security issues in those products should be reported to security@gitlab.cn
User content on GitLab.com (for example, a user that is not using proper permissions on their projects containing sensitive information)
Access tokens that do not provide access to GitLab company projects/groups/infrastructure or GitLab team member accounts (Please contact the owner of the token (you can find their email address by querying the /api/v4/user API). If unable to find the token owner's email address you can disclose leaked tokens by creating a confidential issue assigned to the token owner in the project where the token was leaked)
Our customers' GitLab installs
Gitter (no longer owned by GitLab)
Intentionally public information and hosts, for example our marketing issues at https://gitlab.com/gitlab-com/marketing
Attacks requiring physical access to the victim's computer, including employee computer compromise
Man-in-the-middle attacks
Social engineering, phishing, or other fraud including but not limited to: internationalized domain name (IDN) homograph attacks, Right-to-left (RTL) Ambiguity, RTL Override (RTLO), SPF and DKIM issues, most HTML content injection, Tabnabbing
HTML or text injection is eligible only when significant impact can be achieved with minimal user interaction
Missing Security Headers (eg. HSTS, CSP) and Missing Secure Flags on Cookies
SSL or ssh issues (weak ciphers/key-size/BEAST/CRIME)
CSRF without any security impact
User and project enumeration/path disclosure unless an additional impact can be demonstrated
Reports where an attacker can validate a guess will not be accepted. Examples include but are not limited to:
An API route returning different status codes depending on if a private path exists or not
An identical response but with significantly different timing depending on if a private path exists or not
A response validating that a specific email address is registered
Reports where an attacker can only disclose the ID of a private element will not be accepted
Client side Denial Of Service that can be solved by tuning application limits
Client side Denial Of Service that is caused by browser bugs
SVG rendering bugs are an example of this and the browsers are tracking these issues (see Chromium and Mozilla bugtrackers for example)
Server side Denial Of Service with a temporary impact on performance that can be solved by tuning application limits or additional rate limiting
Lack of, or insufficient, rate limiting. (We are aware of the lack of rate-limiting in many places and our application-wide application limits initiative aims to improve that)
Server-side Denial of Service on customers.gitlab.com
Reports about CVEs published on mailing lists, groups etc. without demonstrating an impact on GitLab
GitLab Runner reports that do not demonstrate the ability to impact data of other projects or GitLab infrastructure
Note that it is documented behavior of the Shell Executor to be able to see other projects on the same server
Scenarios in which only the number of private objects is exposed, unless it can be used to extract any sensitive information contained in those objects
For example a report showing that it's possible to see that a certain project has 17 issues even if only 15 are publicly visible would not be accepted
However being able to demonstrate that there are 4 confidential issues with the word "SECRET TOKEN" in them would be a valid report
Spoofing email and username in git commits that aren't signed with GPG
Clickjacking on pages with no sensitive actions
500 errors or any other error that affects only the attacking request (please see the Rules of Engagement, Testing, and Proof-of-concepts for the rules concerning testing for Denial of Service (DoS) and other potentially disruptive activities)
High privilege users (maintainers, owners) using a bug to sabotage/deface their own projects
Being able to access attachments directly with a known URL (this is a documented behavior and we have an issue discussing ways to improve this)
Issues affecting only Internet Explorer as it is not a supported web browser
Note that Microsoft Edge is supported
EXIF metadata not being stripped from images
We are aware of ways to bypass the EXIF metadata stripping and intend to improve this, but we don't consider this impactful enough to be eligible for bounty
Bypassing or creating fake licenses, or bypasses of feature restrictions where there is no security impact
Name squatting on dependencies without demonstrating automated impact (e.g. namesquatting a rubygem on rubygems.org where GitLab only ever installs a locally vendored gem)
Dangling DNS records on gitlabsandbox.net
Ability of banned users to behave as if they are unbanned. We have a confidential epic to improve this feature.
Open redirects - in general these type of issues are informational and we only accept them if chained with other issues in order to create a more severe vulnerability
Team member personal data leaked through YouTube videos - unless our own automation missed it.
Vulnerabilities in Debian packages in the Package Registry
GitLab's ServiceNow platform.
*.runway.gitlab.net endpoints
ReDoS issues from 2024-03-27, until further notice.
DoS vulnerabilities caused by unlimited input fields starting from 2025-04-03: (we are addressing these systematically through our Input Field Size Limits Implementation initiative and will determine, at our sole discretion, whether a report falls into this category)
Takeover of S3 buckets, domains or subdomains that are used for testing or if the takeover don't have an impact on GitLab infrastructure or to GitLab customers. Domains listed below are not eligible for vulnerability reports (GitLab reserves the right to adjust this list):
*.gitlab-private.org
Server-side Denial of Service on *.gitlab.net assets.
CI/CD Variable Disclosure - as it stands, we currently see our guidance to use external secret storage as sufficient for addressing reports that rely on disclosing Masked CI/CD variables to prove impact.
Taking over third party domains, such as external sites linked in old blog posts, or claiming unused employee social media accounts.
Attacks that require having a victim share or leak a privileged access token (e.g. personal access token, OAuth token, project or group access token, deploy token, _gitlab_session token, or runner authentication token). Reports about leaked team member access tokens are still in-scope and eligible for non-CVSS bounties.
DSN credentials for new-sentry.gitlab.net. As per sentry document:
The secret part of the DSN is optional and effectively deprecated. While clients will still honor it, if supplied, future versions of Sentry will entirely ignore it.
Disclosure
All Resolved reports will be made public via issues on GitLab.com 30 days after releasing a fix. We will redact all information we consider sensitive (such as cookies or tokens), but do not hesitate to let us know if additional content should be hidden. If you also want the report to be disclosed via HackerOne, please request disclosure.
Informative or self-closed reports that are determined to be bugs or new feature requests with no current security impact may be imported as public issues in our issue tracker at https://gitlab.com/gitlab-org/gitlab/issues.
Safe Harbor
The Gold Standard Safe Harbor applies.
Practices authorized under this GitLab HackerOne Bug Bounty Program policy are exceptions to GitLab's Acceptable Use Policy.
Eligibility for Participation
You are responsible for complying with any applicable laws. You are not eligible to participate in this program if you are currently an employee of GitLab, Inc. or any of its subsidiaries. Reports from former employees, immediate family of current employees, or other associates of GitLab.com that may present a conflict of interest of the goals of the program will be more thoroughly reviewed and may not qualify for the stated bounty awards at GitLab's discretion.
Our Process and Additional Information of Interest
For more details on the process the GitLab Security Team follows when working with HackerOne reports, please see our handbook. This includes further details on our triage and award review process.
Practice bug hunting with our Reproducible Vulnerabilities resource.
Check out our Ask Me Anything (AMA) series with @rpadovani, @ajxchapman, @vakzz, @joaxcar, and @0xn3va in our Live AMA playlist on YouTube.
Want to see how Bug Bounty Hunters use GitLab to improve their research efforts? Check out "How do bug bounty hunters use GitLab to help their hack?". See all of our bug bounty related blog posts.
See our Ask a Hacker blog series, where we profiled some of our top hackers. See the blog profiling @0xn3va, the blog profiling @rpadovani and this blog where we profile @ajxchapman, and this blog where we chat with @joaxcar
The GitLab Red Team hosted a live, public AMA/Ask Me Anything on Jan. 26, 2021. Check out the replay.
If you have suggestions for improving this program, please open an issue in our HackerOne Questions GitLab project
Work at GitLab
GitLab is regularly looking to hire talented security professionals. Learn more at our jobs page.
Top hackers
See all hackers 
1
joaxcar
Reputation: 4k
2
ashish_r_padelkar
Reputation: 3k
3
xanbanx
Reputation: 3k
4
yvvdwf
Reputation: 2k
5
ngalog
Reputation: 1k
6
0xn3va
Reputation: 1k
7
mateuszek
Reputation: 1k
8
pwnie
Reputation: 1k
9
albatraoz
Reputation: 1k
10
taraszelyk
Reputation: 1k
11
vakzz
Reputation: 1k
12
saltyyolk
Reputation: 1k
GitLab
https://about.gitlab.com
@gitlab
A single application for the entire software development lifecycle.
Bug Bounty Program launched in Feb 2016
Response efficiency: 92%
Submit report
Rewards

Severity

Rewards

Low

Avg. bounty $614
29.15% submissions

$100–$750
Medium

Avg. bounty $1,170
45.73% submissions

$1,000–$2,500
High

Avg. bounty $9,132
19.65% submissions

$5,000–$15,000
Critical

Avg. bounty $20,505
5.47% submissions

$20,000–$35,000
Stats
Total bounties paid	$5,614,564
Average bounty range	$1,000 - $1,370
Top bounty range	$8,000 - $36,500
Bounties paid | 90 days	$291,538
Reports received | 90 days	583
Last report resolved	14 hours ago
Reports resolved	1905
Hackers thanked	706
Assets In Scope	20
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