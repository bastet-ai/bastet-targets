<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/amazonvrp) · [Scope](https://hackerone.com/amazonvrp/policy_scopes)

Publicly verified: 2026-10-06T23:26:54.537Z.

Public source digest: 479bec7188ba53abde9c96c80496dedb503aeef5356a1e7d6a8a46eccd9e381b

### Program

    Amazon Vulnerability Research Program
    Handle: amazonvrp
    Program state: public_mode
    Submission state: open
    Offers bounties: yes

### Policy

    # Amazon Vulnerability Research Program (VRP) - Program Policy (8/13/2026)
    
    ## Introduction
    
    At Amazon, we take security and privacy very seriously. If you believe that you have found a security vulnerability that affects any Amazon product or service, please report it to us. Reports that fall within the scope of Amazon’s Vulnerability Research Program (VRP) are eligible for a reward. We appreciate your efforts in helping protect customer trust and make Amazon more secure.
    
    ## Other Amazon Programs
    
    Please submit reports for suspected vulnerabilities relating to AWS, Ring and eero via:
    
    - The [AWS Bug Bounty page](https://aws.amazon.com/security/vulnerability-reporting/)
    
    - The [Ring Bug Bounty page](https://hackerone.com/ring)
    
    - The [eero Bug Bounty page](https://hackerone.com/eero)
    
    ## What is VRP?
    
    VRP is a security research initiative driven by Amazon's Stores Security Bug Bounty Team.
    
    ## Who Can Participate in VRP?
    
    Anyone who discovers a potential security finding within Amazon products or services can report it to VRP, with the following exceptions:
    
    - Amazon employees and contractors, as well as their immediate family members (e.g., parent, sibling, spouse, child) are strictly prohibited from participating in VRP. Amazon employees and contractors may not share information with a third party to bypass this prohibition or otherwise enable another person to participate in VRP.
    
    - Residents of any countries/regions that are subject to United States sanctions, such as Cuba, Iran, North Korea, Sudan, and Syria or Crimea, and any person designated on the U.S. Department of the Treasury’s Specially Designated Nationals List are strictly prohibited from participating in VRP.
    
    You must be 18 or older to be eligible for a reward.
    
    ## How VRP Works
    
    Security researchers and Amazon customers are encouraged to report any behavior impacting the information security posture of Amazon products and services. Document your findings thoroughly. For a quicker response, submit a report with complete details, including steps to reproduce the issue and screenshots or videos. We will contact you to confirm receipt of your report and attempt to reproduce your research. We will work with internal teams to validate the report, contain and remediate vulnerabilities, and make other improvements. Amazon will issue rewards for validated findings if they are eligible under this Policy. To be eligible for rewards, reports must comply with all parts of this Policy, and you must be the first to report the issue to Amazon.
    
    Qualified researchers who regularly submit high-quality findings may be added to the **Amazon Private Program** (invited researchers only).
    
    ## How to Conduct Testing
    
    1.  **Accounts.** Use the User-Agent string `amazonvrpresearcher_yourh1username` while testing. Create Amazon accounts using a HackerOne email (yourh1username@wearehackerone.com) to help us track security research activity. You can create match and replace proxy rules in Burp by going to Proxy \>\> Options \>\> Match and Replace with the following options: **Type:** Request header **Match:** ^User-Agent.\*\$ **Replace:** User-Agent: amazonvrpresearcher_yourh1username.
    
    2.  **Banned/Blocked Accounts.** If your Amazon account is banned because of good faith research activity, log into the account and follow the on-screen instructions. Be prepared with a recent payment card statement, which may be necessary to prove ownership. Use a valid payment method to avoid account blocks. Restoration typically takes 24 hours. If your account is not reinstated, create a new one.
    
    3.  **Scanning.** Limited usage of automated scanners/tools is allowed with above User-Agent applied. Scanners/tools must be configured to not send more than 5 requests per second to a single service. Use of scanning tools without the User-agent string amazonvrpresearcher_yourh1username may result in your account/IP getting blocked by automated protections. It will take time to reinstate blocked accounts and delay your research.
    
    4.  **SSRF Testing.** You can use [bugbounty-sheriff.aka.amazon.com](https://bugbounty-sheriff.aka.amazon.com/) (port 443) for testing SSRF issues. SSRF sheriff is installed on this server, and it supports HTTPS.\
        To validate dependency confusion issues, use the following command in the "preinstall" field in the package.json file: `curl https://bugbounty-sheriff.aka.amazon.com/foobar -e '<package-name>+<hackerone-alias>`. We will review logs to verify a successful hit, so be sure to include your alias in the command to allow Amazon to identify your hit.
    
    5.  **Third Party Sites.** Do not use third party sites (e.g., XSS Hunter variants) when testing. When conducting blind XSS or other testing, only use assets that you own and control yourself. For example, using a home-forked version of the xsshunter-express repo is permitted. Make sure that all traffic goes through domains only you have control over. Testing using third party infrastructure could expose discovered issues or other sensitive data to third parties and may result in ineligibility for any reward.
    
    6.  **Subdomain Takeovers.** Prove control by serving an HTML file at a hidden/non-root path containing your HackerOne username in an HTML comment. Do not publish content at the index path or simulate downstream attacks.
    
    ## How to Submit a Report
    
    1.  **Identify the Asset.** Use \*.amazon.\* for the HackerOne general asset field unless the asset is specifically mentioned as a scope item. Copy and paste the URL that pertains to your report next to Asset URL:.
    
    2.  **Required Detail.** Include as much information as you can to help Amazon address issues and issue rewards quickly.
    
    3.  **Bypass Reports.** If you find a bypass of a previous report you’ve created, create a new report. Include the ID of the original finding under Custom Field Bypass Reference to help with secondary data tracking.
    
    4.  **Validation Assistance.** We may contact you with questions or requests for clarification to help Amazon validate, reproduce, investigate, or remediate an issue you submit. You must provide this additional information to be eligible for a reward.
    
    HackerOne provides guidance on how to write quality reports:
    
    - <https://docs.hackerone.com/hackers/quality-reports.html>
    
    - <https://www.hacker101.com/sessions/good_reports>
    
    ## Rules of Engagement
    
    1.  **Only Test In-Scope Assets & Vulnerabilities.** If an asset is not associated with a domain or product identified as in-scope in this Policy, do not test it as part of VRP. Only test for eligible vulnerabilities. Do not test for ineligible vulnerabilities or other out-of-scope issues.
    
    2.  **Avoid and Immediately Report Safety Issues.** If you identify an issue in a physical system (e.g., robotics, an autonomous vehicle, a satellite), do not attempt to change physical state or degrade, disrupt, or interfere with service availability or stability. If you believe you have found an issue that could impact safety, mission-critical operations, or service availability at scale, immediately stop testing and report the issue to us, even if your report is incomplete or the affected system is not authorized for testing. Do not attempt further validation. We will work with you to validate safely.
    
    3.  **Minimize Access and Delete Information.** Conduct the minimum testing needed to validate an issue. Do not attempt to execute instructions that may directly or visibly alert other people to your activity or that may access, modify, or delete other people’s accounts or data. Delete any retained data from your devices upon request from Amazon or after a reward decision has been made. If the vulnerability or your testing causes a public and readily visible issue, immediately report the issue to us, even if your report is incomplete.
    
    4.  **No Post-Exploitation Actions.** Do not attempt to conduct post-exploitation: modification or destruction of data, interruption or degradation of Amazon services, and pivoting with access not normally granted.
    
    5.  **No Denial of Service.** Do not attempt to perform actions that could hinder Amazon in serving customers or carrying out other business functions. This includes brute-force, denial-of-service (DoS/DDoS), and other similar attacks or techniques.
    
    6.  **No Account Takeovers.** Do not compromise or test Amazon accounts that are not your own. You are not authorized to access or otherwise interact with other people's accounts or data. If you discover an issue that could allow you to bypass an authentication control and gain access to another account, report it but do not access the account or its data or take other further action.
    
    7.  **No Accessing Others’ Data.** If you encounter personal data that is not your own during research, immediately stop and report the issue. In your report, include information about what information was accessed. Do not save, copy, transfer, or otherwise use the personal data. If you have already inadvertently transferred or copied the data to a system you own or control, delete it. Retaining or continuing to access another person’s data will be regarded as evidence of a lack of good faith, resulting in ineligibility for any reward and inapplicability of this Policy’s Legal Safe Harbor.
    
    8.  **No Graphic Material.** Do not attempt to generate sexually explicit images, extremely graphic or violent images, or Child Sex Abuse Material (CSAM) using Amazon products. While ineligible for a reward, you can responsibly disclose related issues to Amazon if you inadvertently encounter graphic materials during testing. If you make such a report, do not include copies of the graphic material. Amazon will not review graphic material if submitted, and it may be illegal to possess. 
    
    9.  **No Social Engineering.** Do not attempt to target Amazon employees or customers, including social engineering and phishing attacks. Do not perform any testing against assets that involves directly engaging in communication with Amazon personnel, including support chats, even if they appear to be automated—or Contact Us pages.
    
    10. **No Physical or Wireless Attacks.** Do not perform physical attacks against any Amazon facility or infrastructure. Do not transmit, jam, spoof, interfere with, or intentionally manipulate any radio communications (including satellite, cellular, GPS/GNSS, Wi-Fi, Bluetooth, or other wireless signals).
    
    11. **No Breaking the Law.** Don’t do anything illegal or unethical. You are responsible for complying with all applicable laws, regulations, and other restrictions. You also must abide by the [HackerOne Code of Conduct](https://www.hackerone.com/policies/code-of-conduct).
    
    Violation of these Rules of Engagement may result in loss of bounty eligibility, or further, disqualification from participation in VRP at Amazon’s discretion. Amazon may update this Policy, including the scope of VRP and these Rules of Engagement, from time to time.
    
    ## Responsible Disclosure
    
    By participating in VRP, you agree not to share publicly or privately any details or descriptions of your findings with any third party. You also agree not to attempt to threaten or extort Amazon. 
    
    Amazon commits to timely triage of reports, remediation of verified findings, and response to relevant questions.
    
    ## Out-of-Scope Assets
    
    AWS and AWS customer assets are strictly out of scope, as are some corporate and non-production assets. Never test:
    
    - Anything with aws in the subdomain
    
    - Zoox autonomous vehicles and autonomous driving technology
    
    - Amazon Leo satellite command-and-control or other operational control paths
    
    - Anything that is .a2z
    
    - Anything that redirects to [midway-auth.amazon.com](http://midway-auth.amazon.com/)
    
    - Anything that ends with \*.dev
    
    - Anything that redirects to AWS
    
    - Anything that is non-production asset (e.g. - test, qa, integ, preprod, gamma, beta, user-aliases, regions)
    
    Security issues discovered in the AWS IP Space (<https://ip-ranges.amazonaws.com/ip-ranges.json>) are not in scope for VRP. AWS customers operate assets in this space. Discovering and testing against AWS and AWS customer assets is strictly out of scope for VRP and may violate the AWS Acceptable Use Policy (<https://aws.amazon.com/aup/>).
    
    Note that Shodan may indicate an affiliation with Amazon for AWS customers, and should not be used to determine whether an asset is owned by Amazon.
    
    Unless specifically identified in this Policy, all Amazon subsidiary businesses (e.g., Twitch) and their assets are out of scope. Security issues related to Amazon’s physical stores, including Whole Foods Market and its mobile applications, are out of scope.
    
    You are not authorized to test any asset, domain, or IP address outside the scope of VRP. If you become aware of an out-of-scope vulnerability, you may report the security finding for our review, but it may be ineligible for rewards.
    
    ## In-Scope Assets
    
    Please see the Scope tab for complete details on current in-scope assets. In general, bounty-eligible findings are limited to the following marketplaces and mobile apps:
    
    - All retail marketplaces (wildcard scoped, i.e., \*.amazon)
    
      - [amazon.com](https://www.amazon.com/) (United States)
    
      - [amazon.co.uk](https://www.amazon.co.uk/) (UK)
    
      - [amazon.in](https://www.amazon.in/) (India)
    
      - [amazon.de](https://www.amazon.de/) (Germany)
    
      - [amazon.fr](https://www.amazon.fr/) (France)
    
      - [amazon.co.jp](https://www.amazon.co.jp/) (Japan)
    
      - [amazon.ca](https://www.amazon.ca/) (Canada)
    
      - [amazon.cn](https://www.amazon.cn/) (China)
    
      - [amazon.it](https://www.amazon.it/) (Italy)
    
      - [amazon.es](https://www.amazon.es/) (Spain)
    
      - [amazon.nl](https://www.amazon.nl/) (Netherlands)
    
      - [amazon.ae](https://www.amazon.ae/) (United Arab Emirates)
    
      - [amazon.sg](https://www.amazon.sg/) (Singapore)
    
      - [amazon.se](https://www.amazon.se/) (Sweden)
    
      - [amazon.sa](https://www.amazon.sa/) (Saudi Arabia)
    
      - [amazon.eg](https://www.amazon.eg/) (Egypt)
    
      - [amazon.pl](https://www.amazon.pl/) (Poland)
    
      - [amazon.com.au](https://www.amazon.com.au/) (Australia)
    
      - [amazon.com.tr](https://www.amazon.com.tr/) (Turkey)
    
      - [amazon.com.br](https://www.amazon.com.br/) (Brazil)
    
      - [amazon.com.mx](https://www.amazon.com.mx/) (Mexico)
    
      - [amazon.com.be](https://www.amazon.com.be/) (Belgium)
    
      - [amazon.co.za](https://www.amazon.co.za/) (South Africa)
    
      - [amazon.com.ng](https://amazon.com.ng) (Nigeria)
    
      - [amazon.com.co](https://amazon.com.co) (Colombia)
    
      - [amazon.cl](https://amazon.cl) (Chile)
    
    - Android and iOS Apps – Retail & Shopping
    
      - MShop (Android: com.amazon.mShop.android.shopping; iOS: amazon-shopping-297606951)
    
    - Android and iOS Apps – Device Companions
    
      - FreeTime (Android: com.amazon.tahoe.freetime; iOS:1324809509)
    
      - Alexa Companion App (Android: com.amazon.dee.app; iOS: 944011620)
    
      - FireTV (Bison) (Android: com.amazon.storm.lightning.client.aosp; iOS: 947984433)
    
      - Kindle (Android: com.amazon.kindle; iOS: 302584613)
    
      - Amazon Photos (Android: com.amazon.clouddrive.photos; iOS: 621574163)
    
      - Amazon Key (Android: com.amazon.cosmos; iOS: 1291586307)
    
      - Amazon Luna (Android: com.amazon.tails; iOS: 1528364633)
    
    - Amazon Devices: Fire devices and tablets, Echo, Kindle, Blink, Alexa, and Luna Gaming devices (running latest available software)
    
    - Device-Related Web Applications
    
      - [developer.amazon.com/alexa/\*](https://developer.amazon.com/alexa/) (Alexa Developer)
    
      - [developer.amazon.com/apps-and-games/\*](https://developer.amazon.com/apps-and-games/) (Amazon App Store)
    
      - [alexa.amazon.com](https://alexa.amazon.com) (Alexa Web)
    
      - [skills-store.amazon.com](https://skills-store.amazon.com) (Skills Store)
    
      - [read.amazon.com](https://read.amazon.com) (Kindle Cloud Reader)
    
      - [kdp.amazon.com](https://kdp.amazon.com) (Kindle Publishing)
    
      - [alexaanswers.amazon.com](https://alexaanswers.amazon.com) (Alexa Answers)
    
      - [blueprints.amazon.com](https://blueprints.amazon.com/) (Alexa BluePrints)
    
      - [creator.amazon.com](http://creator.amazon.com/) (Amazon FireTV App Creator)
    
      - [amazon.com/hz/mycd/\*](https://amazon.com/hz/mycd/) (Device Content Manager)
    
      - [amazon.com/photos](https://www.amazon.com/photos) (Amazon Photos)
    
      - [luna.amazon.com](https://luna.amazon.com/) (Amazon Luna)
    
      - [api.amazonalexa.com](https://api.amazonalexa.com) (Alexa API)
    
    **Device Software Update Reference.** Only devices running the latest available software are considered in-scope. The latest available software may be found here:  
    
    - [FireTV Software Versions](https://www.amazon.com/gp/help/customer/display.html?nodeId=201497590)
    
    - [Fire Tablet Software Versions](https://www.amazon.com/gp/help/customer/display.html?nodeId=G2JXLC4L34GX73TE)
    
    - [Echo Software Versions](https://www.amazon.com/gp/help/customer/display.html?nodeId=GMB5FVUB6REAVTXY)
    
    - [Kindle E-Reader Software Versions](https://www.amazon.com/gp/help/customer/display.html?nodeId=GKMQC26VQQMM8XSW)
    
    - [Blink Software Versions](https://support.blinkforhome.com/en_US/security-and-app-updates/2016136)
    
    - [Luna Controller Software Versions](https://www.amazon.com/gp/help/customer/display.html?nodeId=G6F4QENEFP5Q5JRZ)
    
    ## In-Scope Security Issues
    
    The following is a non-exhaustive list of common in-scope security issues and the usual severity range.
    
    |  | **Vulnerability** | **Severity Range** |
    |----|----|----|
    | 1 | Remote Code Execution | Critical |
    | 2 | SQL Injection | High - Critical |
    | 3 | XXE | High - Critical |
    | 4 | XSS | High - Critical |
    | 5 | Server-Side Request Forgery | Medium - Critical |
    | 6 | Directory Traversal - Local File Inclusion | Medium - High |
    | 7 | Authentication/Authorization Bypass (Broken Access Control) | Medium - High |
    | 8 | Privilege Escalation | Medium - High |
    | 9 | Insecure Direct Object Reference | Medium - High |
    | 10 | Misconfiguration | Low - High |
    | 11 | Web Cache Deception | Low - Medium |
    | 12 | CORS Misconfiguration | Low - Medium |
    | 13 | CRLF Injection | Low - Medium |
    | 14 | Cross Site Request Forgery | Low - Medium |
    | 15 | Open Redirect | Low - Medium |
    | 16 | Information Disclosure | Low - Medium |
    | 17 | Request Smuggling | Low – Medium |
    | 18 | Mixed Content | Low |
    
    **Fraud and Abuse.** Fraud and abuse reports may, in our discretion, be reward-eligible if they indicate substantial impact, are clear and concise, and result in action by Amazon. Reports should describe realistic, unique, and systemic behavior in detail that is not reliant on contrived scenarios but based on realizable human behavior at scale.
    
    **Zero Days.** Reports of zero-day vulnerabilities (vulnerabilities that were not previously known to the security community) within in-scope services and products will be eligible for a reward at Amazon’s discretion if the issue has not previously been identified by another researcher or the report provides significant insight that assists Amazon with remediation efforts.
    
    **Devices.** Issues demonstrated with Android Debug Bridge (ADB) are generally accepted only if ADB is used to demonstrate a behavior that is possible to implement in an app. Severity will generally be assessed according to these criteria:
    
    - **Critical:** Remote threat actor can gain device control or cause permanent failure. For example: secure boot bypass, arbitrary code execution, remote access to sensitive credentials/tokens (e.g., Amazon account), or permanent device failure even after factory reset.
    
    - **High:** Local threat actor can bypass critical security controls or brick device. For example: temporary bypass of critical security controls; arbitrary code execution in unprivileged processes or privileged processes with user interaction; local access to sensitive data; bypass of mandatory access controls, sandboxing, or user interaction requirements; permanent device failure requiring factory reset (local access vector) or temporary failure (remote access vector).
    
    - **Medium:** Local threat actor can cause temporary device failure or expose sensitive information through physical access (additional vulnerabilities or user interaction would be required to achieve High-level impacts). For example: temporary device failure requiring factory reset; protocol weaknesses allowing sensitive information observation via physical access; exploit mitigation bypasses.
    
    - **Low:** Little or no direct security impact. For example: bypasses of non-security features (e.g., parental controls) with no security implications.
    
    ## In-Scope LLM/GenAI Issues
    
    For any reports related to generative AI, please include as much of the following information as you can: timestamp, IP address, consumed content or prompt string, responses, and security impact.
    
    The following is a list of in-scope security issues related to generative AI and the usual severity range.
    
    | **Potential Vulnerabilities** | **Severity** | **Comments** |
    |----|----|----|
    | Unauthorized access/disclosure of PII/PHI data | High-Critical | Severity will be dependent on the context and influencing factors. |
    | Cross customer sensitive data access | High-Critical | Severity will be dependent on the context and influencing factors. |
    | Unauthorized system or environment changes | High-Critical | Severity will be dependent on the context and influencing factors. |
    | Model Theft and LLM training data poisoning | High-Critical | Depending on the overall impact and application context. |
    | Adversaries can retrieve personal customer data without consent | High-Critical | Severity will be dependent on the context and influencing factors. |
    | Information Disclosure | Low-Critical | Severity will be dependent on the context and influencing factors. |
    | Prompt Injection | Medium – Critical | Severity will be dependent on the context and influencing factors. Please make sure to read notes above |
    | Insecure Output Handling | Medium-Critical | Impact will depend on resulting potential vulnerabilities like HTML injection, XSS, SSRF, RCE etc. |
    | Insecure plugins impacting models | Medium-High | Depending on the impact like content injection, code execution, differential error responses, system data exfiltration, |
    | Excessive functionality, permissions and autonomy | Low-High | Depending on the actions allowed by excessive agency issues |
    | Response manipulation providing guidance to customers | Medium-High | Severity will be dependent on the context and the guidance. |
    | Adversaries can perform unauthorized actions on behalf of users | Medium-Critical | Depending on the impact, ease and issue radius. |
    | LLM vulnerable to solicitation and social engineering | Medium-High | Depending on the overall impact and application context. |
    | In context data could be used to de-anonymize users | Medium | Severity will be dependent on the context and influencing factors. |
    | Absent customer API or data opt out mechanisms | Medium | Severity will be dependent on the context and influencing factors. |
    | Command Injection | High-Critical | Depending on the impact, ease and issue radius. |
    | API Auth Bypass | High-Critical | Depending on the impact, ease and issue radius. |
    | Runtime Information Disclosure | Low-Medium | Severity will be dependent on the context and influencing factors. |
    
    Amazon will confirm validity and severity of the issues on a case-by-case basis. Issue severity and bounty amount are discretionary, as evaluated by Amazon. 
    
    ## Out-of-Scope Issues
    
    1.  **Security Issues.** The following are not eligible for rewards under VRP:
    
    - Clickjacking
    
    - Self-XSS
    
    - Email spoofing – SPF records misconfiguration
    
    - Bitflipping, bitsquatting
    
    - Security practices where other mitigating controls exist (e.g., missing security headers)
    
    - Social engineering, phishing
    
    - Physical attacks
    
    - Missing cookie flags
    
    - CSRF with minimal impact (e.g., Login CSRF, Logout CSRF)
    
    - Content spoofing
    
    - Stack traces, path disclosure, directory listings
    
    - SSL/TLS controls where other mitigating controls exist
    
    - Banner grabbing
    
    - CSV injection
    
    - Reflected file download
    
    - Reports on outdated browsers
    
    - Reports on outdated version/builds of in-scope Mobile Apps
    
    - Reports on devices running outdated software
    
    - DoS/DDoS
    
    - Host header injection without a demonstrable impact
    
    - Scanner outputs
    
    - Vulnerabilities in third-party products, services, or assets
    
    - User enumeration
    
    - Password complexity
    
    - HTTP TRACE method
    
    2.  **GenAI Issues.** Reports related to the generative AI prompt response content are out of scope where there is no clear application security impact. Responsible AI issues are out of scope and ineligible for a reward without a direct security impact. Examples of out-of-scope issues include generation of inappropriate text/visual content with the model, inappropriate suggestions from the model, and malicious code generation. Any issues which are result of model hallucinations are out of scope as well.
    
    3.  **Amazon Account Issues.** For issues related to your personal use of an Amazon product or service such as suspicious orders, password changes, account changes, or potential fraud, contact [Customer Service](https://www.amazon.com/gp/help/customer/contact-us/).
    
    4.  **Copyright Infringement.** For issues related to copyright infringement, please use Amazon’s [Report Infringement Form](https://www.amazon.com/report/infringement).
    
    5.  **Operational Security Issues.** We do not reward but will accept reports related to operational security, including leaked Amazon personnel passwords, leaked business documents, and similar issues. These reports will receive only reputation points.
    
    ## Legal Points
    
    1.  **Limited Safe Harbor.** Amazon will not bring any legal action against anyone who makes a good faith effort to comply with this Policy, or for any accidental or good faith violation of this Policy. If you comply with this Policy:
    
        1.  Amazon considers your security research to be "authorized" and lawful under the U.S. Computer Fraud and Abuse Act (CFAA), U.S. Digital Millennium Copyright Act (DMCA), and similar laws in the United States and other jurisdictions. This limited authorization does not provide you with authorization to access company data or another person’s account.
    
        2.  Amazon waives any restrictions in its applicable Terms of Service and Acceptable Use Policy that would prohibit your participation in VRP in accordance with the terms of, for the limited purpose of your security research under, this Policy.
    
        3.  If legal action is initiated by a third party against you in connection with activities conducted under this Policy, Amazon will take steps to make it known that your actions were conducted in compliance with this Policy.
    
        4.  Amazon cannot authorize any activity on third-party systems or assets or guarantee that those third parties won’t pursue legal action against you. Amazon is not responsible for your liability from actions performed on third-party systems or assets. Amazon is not responsible if you commit a crime during our testing and is not able to prevent criminal liability.
    
    2.  **Privacy.** To protect your privacy, Amazon will not, unless served with legal process or to address a violation of this Policy, share your personal data with third parties or share your HackerOne points or participation without your permission. If your report relates to an issue with a third party’s products, services, or assets, we may report your contact information and findings to the relevant third party.
    
    3.  **Rewards Discretionary.** This is an experimental and discretionary rewards program. You should understand that we can cancel the program at any time and have sole and complete discretion on reward decisions.
    

### Current non-archived assets

Complete anonymous pagination: 131 assets across 2 pages, including ineligible assets. Archived assets are not represented.

    Amazon Web Services (AWS)
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Currently, anything related to AWS should be considered out of scope and should be reported directly to AWS: https://aws.amazon.com/security/vulnerability-reporting/

    Other Amazon Retail Sites (Please only actively test explicitly stated scope)
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    Other Amazon Retail Mobile Apps (Please only actively test explicitly stated scope)
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    amazongames.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    Amazon Subsidiaries (Please only actively test explicitly stated scope)
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.amazon.*
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: All international retail marketplaces
    * Brazil: www.amazon.com.br
    * Canada: www.amazon.ca
    * Mexico: www.amazon.com.mx
    * United States: www.amazon.com
    * China: www.amazon.cn
    * India: www.amazon.in
    * Japan: www.amazon.co.jp
    * Singapore: www.amazon.sg
    * Turkey: www.amazon.com.tr
    * United Arab Emirates: www.amazon.ae
    * France: www.amazon.fr
    * Germany: www.amazon.de
    * Italy: www.amazon.it
    * Netherlands: www.amazon.nl
    * Spain: www.amazon.es
    * Sweden: www.amazon.se
    * United Kingdom: www.amazon.co.uk
    * Australia: www.amazon.com.au

    com.amazon.mShop.android.shopping
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping

    297606951
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://apps.apple.com/us/app/amazon-shopping/id297606951

    Other Amazon Retail Assets (Please only actively test explicitly stated scope)
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    amazonpayinsurance.in
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.cl
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.co.za
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.com.au
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.com.br
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.com.co
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.com.mx
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.com.ng
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.com.tr
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.pl
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.com.be
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    AWS and AWS customer assets are strictly out of scope
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.amazon.ae
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.ca
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.cn
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.co.jp
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.co.uk
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.de
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.eg
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.es
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.fr
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.in
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.it
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.nl
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.sa
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.se
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.sg
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.amazon.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.*a2z*.*
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.dev
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.aws.*
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    Anything considered a non-prod asset
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    Anything which redirects to AWS
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    learning.logistics.amazon.com
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    GenAI Apps under *.amazon.*
    Type: AI_MODEL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: This is a catchall for any GenAI applications found under \*.amazon.\*. Rufus is an example of this.

    primevideo.com/*
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    amazon.speech.sim
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Alexa - Show Mode for L
    https://play.google.com/store/apps/details?id=amazon.speech.sim
    

    1552455423
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Astro
    https://apps.apple.com/us/app/amazon-astro/id1552455423
    

    com.amazon.mShop.android.business.shopping
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Business
    https://play.google.com/store/apps/details?id=com.amazon.mShop.android.business.shopping
    

    1498197033
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Business	https://apps.apple.com/us/app/amazon-business-b2b-shopping/id1498197033
    

    1265170914
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Live Creator	https://apps.apple.com/us/app/amazon-live-creator/id1265170914
    

    com.amazon.mp3
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Music
    https://play.google.com/store/apps/details?id=com.amazon.mp3
    
    Amazon Music (Watch) is also in scope
    
    **wearOS**: follow the documentation [here](https://developer.android.com/training/wearables/get-started/creating#run-emulator) to create a wearOS virtual device. The “Android 14.0 (Wear OS 5)” image includes the Play Store and can be used to install and run the in-scope apps. The documentation [here](https://developer.android.com/training/wearables/get-started/connect-phone) explains how to pair a physical/virtual phone to the virtual wearOS device to complete setup.

    510855668
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Music	https://apps.apple.com/us/app/amazon-music-songs-podcasts/id510855668
    

    6452192521
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon One	https://apps.apple.com/us/app/amazon-one/id6452192521
    

    545519333
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Prime Video	https://apps.apple.com/us/app/amazon-prime-video/id545519333
    

    1475021574
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Music for Artists
    https://apps.apple.com/us/app/amazon-music-for-artists/id1475021574

    1454725763
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Flex
    https://apps.apple.com/us/app/itunes-store/1454725763
    

    com.amazon.astro
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Astro
    https://play.google.com/store/apps/details?id=com.amazon.astro

    com.amazon.warhol.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Live Creator
    https://play.google.com/store/apps/details?id=com.amazon.warhol.android

    com.amazon.amazonone.androidapp
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon One
    https://play.google.com/store/apps/details?id=com.amazon.amazonone.androidapp

    com.amazon.kisan.app
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Kisan
    https://play.google.com/store/apps/details?id=com.amazon.kisan.app

    1276296103
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Relay
    https://apps.apple.com/us/app/itunes-store/1276296103
    

    com.amazon.flex.rabbit
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Flex
    https://play.google.com/store/apps/details?id=com.amazon.flex.rabbit

    com.imdbtv.livingroom
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Freevee (TV) https://play.google.com/store/apps/details?id=com.imdbtv.livingroom
    
    **Android TV**: follow the documentation [here](https://developer.android.com/training/tv/get-started/create#run-on-a-virtual-device) to create an Android TV virtual device. The “Android 14.0 (Google TV)” image includes the Play Store and can be used to install and run the in-scope apps.

    com.amazon.amazonvideo.livingroom
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Prime Video (TV) - Android TV https://play.google.com/store/apps/details?id=com.amazon.amazonvideo.livingroom
    
    **Android TV**: follow the documentation [here](https://developer.android.com/training/tv/get-started/create#run-on-a-virtual-device) to create an Android TV virtual device. The “Android 14.0 (Google TV)” image includes the Play Store and can be used to install and run the in-scope apps.

    com.amazon.mp3.automotiveOS
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Music - Automotive
    https://play.google.com/store/apps/details?id=com.amazon.mp3.automotiveOS
    
    **Android Automotive (AAOS)**: follow the documentation [here](https://developer.android.com/training/cars/testing/emulator) to create an AAOS virtual device. The “Android 14.0 (Automotive)” image includes the Play Store and can be used to install and run the in-scope apps.

    com.amazon.dee.alexaonwearos
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.localqueen
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: GlowRoad: Resell & Earn Online
    https://play.google.com/store/apps/details?id=com.localqueen

    com.amazon.helix.prod
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Hub Counter
    https://play.google.com/store/apps/details?id=com.amazon.helix.prod

    6471528064
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Kids + Parents Dashbaord
    https://apps.apple.com/us/app/amazon-kids-parent-dashboard/id6471528064

    com.amazon.tahoe.grownups
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Kids + Parent Dashboard
    https://play.google.com/store/apps/details?id=com.amazon.tahoe.grownups

    com.amazon.sft.rangoli.seller.app
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: SmartBiz by Amazon Web Builder
    https://play.google.com/store/apps/details?id=com.amazon.sft.rangoli.seller.app

    1532153219
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Freevee
    https://apps.apple.com/us/app/amazon-freevee-movies-live-tv/id1532153219

    com.amazon.imdb.tv.mobile.app
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Freevee
    https://play.google.com/store/apps/details?id=com.amazon.imdb.tv.mobile.app

    com.amazon.minitv.android.app
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon miniTV
    https://play.google.com/store/apps/details?id=com.amazon.minitv.android.app

    com.amazon.ziggy.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Music for Artists
    https://play.google.com/store/apps/details?id=com.amazon.ziggy.android

    com.amazon.music.tv
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Music TV
    https://play.google.com/store/apps/details?id=com.amazon.music.tv
    
    **Android TV**: follow the documentation [here](https://developer.android.com/training/tv/get-started/create#run-on-a-virtual-device) to create an Android TV virtual device. The “Android 14.0 (Google TV)” image includes the Play Store and can be used to install and run the in-scope apps.

    1579372261
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: 
    Amazon Business (IN)
    https://apps.apple.com/in/app/amazon-business-india-b2b/id1579372261

    in.amazon.mShop.android.business.shopping
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Business (IN)
    https://play.google.com/store/apps/details?id=in.amazon.mShop.android.business.shopping

    1478350915
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shopping (IN)
    https://apps.apple.com/in/app/amazon-india-shop-pay-minitv/id1478350915

    in.amazon.mShop.android.shopping
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shopping (IN)
    https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&hl=en_US

    com.amazon.relay
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Relay
    https://play.google.com/store/apps/details?id=com.amazon.relay

    com.amazon.avod.thirdpartyclient
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Prime Video
    https://play.google.com/store/apps/details?id=com.amazon.avod.thirdpartyclient

    794141485
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Seller
    https://apps.apple.com/us/app/itunes-store/794141485

    com.amazon.sellerflexmobile
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Seller Flex App	https://play.google.com/store/apps/details?id=com.amazon.sellerflexmobile
    

    com.amazon.shopperpanel.android.mobile.app
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shopper Panel	https://play.google.com/store/apps/details?id=com.amazon.shopperpanel.android.mobile.app
    

    1494755014
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shopper Panel	https://apps.apple.com/us/app/amazon-shopper-panel/id1494755014
    

    342576766
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shopping (CN)	https://apps.apple.com/cn/app/%E4%BA%9A%E9%A9%AC%E9%80%8A%E8%B4%AD%E7%89%A9/id342576766
    

    358861688
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shopping (FR)	https://apps.apple.com/fr/app/amazon-fr/id358861688
    

    348712880
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shopping (DE)	https://apps.apple.com/de/app/amazon/id348712880
    

    374254473
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shopping (JP)	https://apps.apple.com/jp/app/amazon-%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%82%A2%E3%83%97%E3%83%AA/id374254473
    

    335187483
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shopping (UK)	https://apps.apple.com/gb/app/amazon/id335187483
    

    1592204907
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Sidewalk Bridge Pro	https://apps.apple.com/us/app/amazon-sidewalk-bridge-pro/id1592204907
    

    6444868926
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Vendor	https://apps.apple.com/us/app/amazon-vendor/id6444868926
    

    com.amazon.vendormobile.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Vendor	https://play.google.com/store/apps/details?id=com.amazon.vendormobile.android
    

    988788863
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Selling Services on Amazon	https://apps.apple.com/us/app/selling-services-on-amazon/id988788863
    

    com.amazon.technician.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Selling Services on Amazon	https://play.google.com/store/apps/details?id=com.amazon.technician.android
    

    com.amazon.primenow.seller.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: PN Seller	https://play.google.com/store/apps/details?id=com.amazon.primenow.seller.android
    

    1057338687
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: PN Seller	https://apps.apple.com/us/app/pn-seller/id1057338687
    

    com.amazon.vendormobile.india.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Vendor Central (IN)	https://play.google.com/store/apps/details?id=com.amazon.vendormobile.india.android
    

    1659883691
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Vendor Central (IN)	https://apps.apple.com/in/app/vendor-central-india/id1659883691
    

    com.amazon.sellermobile.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Seller
    https://play.google.com/store/apps/details?id=com.amazon.sellermobile.android

    1151746202
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://apps.apple.com/us/app/transparency/id1151746202

    6479334468
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shipping	-->	https://apps.apple.com/us/app/amazon-shipping/id6479334468

    6560104638
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Fire TV Recast|Blaster	--> https://apps.apple.com/us/app/amazon-fire-tv-recast-blaster/id6560104638
    

    com.amazon.aba.application
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://play.google.com/store/apps/details?id=com.amazon.aba.application

    com.amazon.enterprise.access.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: AEA - Amazon Employees	-->	https://play.google.com/store/apps/details?id=com.amazon.enterprise.access.android

    com.amazon.firetv.recast.blaster.aosp
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Fire TV Recast|Blaster	-->	https://play.google.com/store/apps/details?id=com.amazon.firetv.recast.blaster.aosp

    com.amazon.ihm.candycane
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Store Ops by Amazon	-->	https://play.google.com/store/apps/details?id=com.amazon.ihm.candycane

    com.amazon.swa.mobileapp
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Amazon Shipping --> https://play.google.com/store/apps/details?id=com.amazon.swa.mobileapp

    302584613
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    621574163
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    944011620
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    947984433
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    Echo Family Devices
    Type: HARDWARE
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Devices must be purchased on Amazon or an authorized retailer, and must be running the latest available software.

    FireTV
    Type: HARDWARE
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Devices must be purchased on Amazon or an authorized retailer, and must be running the latest available software.

    1324809509
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    1528364633
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.amazon.clouddrive.photos
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.amazon.dee.app
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.amazon.kindle
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.amazon.storm.lightning.client.aosp
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.amazon.tahoe.freetime
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.amazon.tails
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    Kindle E-Reader
    Type: HARDWARE
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Devices must be purchased on Amazon or an authorized retailer, and must be running the latest available software.

    Luna
    Type: HARDWARE
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Devices must be purchased on Amazon or an authorized retailer, and must be running the latest available software.

    Tablets
    Type: HARDWARE
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Devices must be purchased on Amazon or an authorized retailer, and must be running the latest available software.

    Vega OS
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Devices must be purchased on Amazon or an authorized retailer, and must be running the latest available software.

    Devices
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: none
    Instructions: Placeholder for the Rewards modal. Please view Devices scope items to detail active scope.

    Services/Mobile/GenAI
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: none
    Instructions: Placeholder for the Rewards modal. Please view the scope page to active scope.

    "Contact Us" Functionality
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://www.amazonpay.in/*
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
