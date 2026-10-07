<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/paypal) · [Scope](https://hackerone.com/paypal/policy_scopes)

Publicly verified: 2026-10-07T11:34:53.142Z.

Public source digest: 2a1abe5f301b31511c27cce59f821490b60bdb428cf7c269dc00862f103a89e1

### Program

    PayPal
    Handle: paypal
    Program state: public_mode
    Submission state: open
    Offers bounties: yes

### Policy

    ----------
    ----------
    
    
    ###Our team of dedicated security professionals works diligently to maintain the security of customer information. We acknowledge the crucial role that security researchers and our user community play in helping to keep PayPal and our customers secure. If you identify a vulnerability in our site or products, please notify us using the guidelines outlined below. 
    
    ---
    ---
    
    # Summary
    As a researcher, we understand your eagerness to start testing immediately. However, we **strongly recommend** that you read the full program terms. We also follow the HackerOne [platform standards](https://docs.hackerone.com/en/articles/8369826-detailed-platform-standards). Here is a brief overview: 
    - Submit a well-written report following the submission guidelines. 
    - Do not cause any damage or disruption to our systems or services. 
    - Rewards are based on the demonstrated impact of the vulnerability, not solely on CVSS scores. 
    
    # What is Impact?
    We at PayPal define impact as the potential consequences of a vulnerability on our systems, operations, and users. This includes factors such as financial losses, data breaches, operational disruptions, reputational damage, and regulatory or legal consequences. By assessing the impact of a vulnerability, we can prioritize our response and remediation efforts and ensure the security and integrity of our platform, while protecting our users' sensitive information and maintaining their trust in our services.
    
    # Program Terms
    Please note that your participation in the Bug Bounty Program is voluntary and subject to the terms and conditions set forth on this page ("Program Terms"). By submitting a site or product vulnerability to PayPal, Inc. ("PayPal") you acknowledge that you have read and agreed to these Program Terms.
    
    These Program Terms supplement the terms of PayPal User Agreement, the PayPal Acceptable Use Policy, and any other agreement in which you have entered with PayPal (collectively "PayPal Agreements"). The terms of those PayPal Agreements will apply to your use of, and participation in, the Bug Bounty Program as if fully set forth herein. If any inconsistency exists between the terms of the PayPal Agreements and these Program Terms, these Program Terms will control, but only regarding the Bug Bounty Program.
    
    To encourage responsible disclosures, PayPal commits that, if we conclude, in our sole discretion, that a disclosure respects and meets all the guidelines of these Program Terms and the PayPal Agreements, PayPal will not bring a private action against you or refer a matter for public inquiry.
    
    As part of your research, do not modify any files or data, including permissions, and do not intentionally view or access any data beyond what is needed to prove the vulnerability.
    
    ##The following PayPal brands are in scope:
    - [PayPal](https://www.paypal.com)
    - [Venmo](https://www.venmo.com)
    - [Xoom](https://www.xoom.com)
    - [Braintree Payments](https://www.braintreepayments.com)
    - [Swift Financial/ Loanbuilder](https://my.loanbuilder.com)
    - [Hyperwallet](https://www.hyperwallet.com)
    
    For questions or issues specific to accounts or transactions, or other requests that do not fall under this scope, please contact our [customer support service](https://www.paypal.com/us/smarthelp/contact-us/).
    
    ###Brands and acquisitions not listed above are not in scope. These brands include, but are not limited to the following:
    - [Chargehound](https://www.chargehound.com)
    - [Honey](https://www.joinhoney.com)
    - [Paidy](https://paidy.com)
    - Simility
    - [Zettle](https://www.zettle.com)
    
    ###Out-of-Scope Assets, Domains, and Products
    - www.paypal-support.com
    - [The braintree-web-drop-in SDK](https://github.com/braintree/braintree-web-drop-in)
    - Payflow Gateway (Payflow Pro, Payflow Link, PayPal Manager, and associated pilot/test endpoints)
    
    ---
    PayPal will make a best effort to adhere to the following response targets:
    
    | Type of Response | Business days | Reason
    |----------|--------------------| ---------- |
    |  First Response |   2 days  |   |
    | Time to Triage   |    10+  days | Depends on report clarity and complexity |
    | Time to  Bounty   | 15 - 30 days | Depends on report clarity, complexity and demonstrated Impact |
    |  Time to Resolution   | depends on severity and complexity |
    
    # Eligibility Requirements
    
    To be eligible for the Bug Bounty Program, you must not:
    * Be a resident of, or make your Submission from, a country against which the United States has issued export sanctions or other trade restrictions (e.g., Cuba, Iran, North Korea, Sudan and Syria);
    * Be in violation of any national, state, or local law or regulation;
    * Be employed by PayPal, Inc. or its subsidiaries;
    * Be an immediate family member of a person employed by PayPal, Inc. or its subsidiaries or affiliates; or
    * Be less than 14 years of age. If you are at least 14 years old, but are considered a minor in your place of residence, you must get your parent’s or legal guardian’s permission prior to participating in the program.
    
    If PayPal discovers that you meet any of the criteria above, PayPal will remove you from the Bug Bounty Program and disqualify you from receiving any Bounty Payments. 
    
    # Disclosure Guidelines
    
    By providing a Submission or agreeing to the Program Terms, You agree that you may not publicly disclose your findings or the contents of your Submission to any third parties in any way without PayPal’s prior written approval.
    
    Failure to comply with the Program Terms will result in _**immediate**_ disqualification from the Bug Bounty Program and ineligibility for receiving any Bounty Payments.
    
    # Scope for Web Applications
    
    ## In-Scope Vulnerabilities
    Accepted in-scope vulnerabilities include, but are not limited to: 
    - Any PayPal proprietary AI/ML product or service (e.g., inference endpoints, generative-AI assistants, recommendation engines).
    - Disclosure of sensitive or personally identifiable information that does not belong to you. 
    - Cross-Site Scripting (XSS) 
    - Cross-Site Request Forgery (CSRF) for sensitive functions in a privileged context 
    - Server-side or remote code execution (RCE)  
    - Authentication or authorization flaws, including IDOR and authentication bypass. 
    - Injection vulnerabilities, including SQL and XML injection. 
    - Directory traversal 
    - Significant security misconfiguration with a verifiable vulnerability 
    - Exposed credentials, disclosed by PayPal or its employees, that pose a valid risk to an in-scope asset. 
    
    ## Out-of-Scope Vulnerabilities
    Certain vulnerabilities are considered out-of-scope for the Bug Bounty Program. Those out-of-scope vulnerabilities include, but are not limited to: 
    - Any physical attacks against PayPal property or data centers 
    - Username enumeration on customer facing systems (i.e. using server responses to determine whether a given account exists) 
    - Scanner output or scanner-generated reports, including any automated or active exploit tool. 
    - Man-in-the-Middle attacks. 
    - Vulnerabilities involving stolen employee/consumer/merchant credentials or physical access to a device. 
    - Social engineering attacks, including those targeting or impersonating internal employees by any means (e.g. customer service chat features, social media, personal domains, etc.) 
    - Open redirection, except in the following circumstances: 
                - Clicking a PayPal-owned URL immediately results in a redirection, and/or 
                - A redirection results in the loss of sensitive data (e.g. session tokens, PII, etc) 
    - Host header injections without a specific, demonstrable impact. 
    - Vulnerabilities found through DDoS or spam attacks. Do not attempt or execute DDoS attacks. 
    - Self-XSS, which includes any payload entered by the victim. 
    - Any vulnerabilities requiring significant and unlikely interaction by the victim, such as disabling browser controls. 
    - Login/logout CSRF 
    - Content spoofing without embedding an external link or JavaScript. 
    - Infrastructure vulnerabilities with no demonstrated impact, including: 
                - Issues related to SSL certificates. 
                - DNS configuration issues  
                - Server configuration issues (e.g. open ports, TLS versions, etc.) 
    - Most vulnerabilities within our sandbox, lab, or staging environments (that are not reproducible in Production), except Braintree. 
    - Vulnerabilities only affecting users of outdated, unpatched, or unsupported browsers and platforms, including any version of Internet Explorer 
    - Information disclosure of public or non-protected information (e.g. code in a public impact repository, server banners, etc.), or information disclosed outside of PayPal's control (e.g. a personal, non-employee repository; a list from a previous infodump; etc.) 
    - Exposed credentials that are either no longer valid, or do not pose a risk to an in-scope asset. 
    - Any other submission determined to be low risk, based on unlikely or theoretical attack vectors, requiring significant user interaction, or resulting in minimal impact. 
    - Vulnerabilities on third party libraries without showing specific impact to the target application (e.g. a CVE with no exploit) 
    - Reports that involve secondary business accounts, and the impact is limited solely to the parent account.
    - PayPal merchant's integration. 
    - Vulnerabilities in third-party libraries or vendor products without demonstrated, specific impact to a PayPal application or system are out of scope. This includes version fingerprinting, scanner output identifying a known CVE, or theoretical risk assessments without proof of exploitability. However, reports demonstrating impact will be evaluated on case-by-case. 
    - Any vulnerabilities relating solely to how dynamic client registration for PayPal's MCP servers work.
    ----------
    ----------
    ##_Denial of Service_
    In our commitment to maintaining a secure environment, we value your assistance in identifying Denial of Service (DoS) vulnerabilities that meet our specific criteria. Generally:
    - We only consider DoS issues that can be triggered by a single user with a single request.
    - We only consider DoS issues that cause a significant disruption to the entire service, not just an individual merchant or instance
    - We explicitly do not accept any kind of DDOS (Distributed Denial of Service) issues.
    - Slow requests that eventually complete successfully without rendering the service unavailable to others do not constitute an availability impact for our program.
    - **No Automated Scanning: Automated tools or scripts designed to overload our infrastructure, or services are not permitted for use in testing. Researchers should refrain from testing techniques that could degrade service availability.**
    
    To ensure the stability and security of our systems while allowing responsible security research, we have established the following policy regarding Denial-of-Service (DoS) testing:
    
    **Sandbox-Only DoS Testing**
    - **Allowed:** DoS proof-of-concept (PoC) testing is only permitted against applications where a sandbox environment is available. Researchers must confirm the availability of such an environment before proceeding with any DoS testing.
    - _**Prohibited: Under no circumstances are researchers permitted to perform any denial-of-service (DoS) tests or attacks against any of PayPal's production systems or any of it's subsidiaries. Generating excessive traffic, flooding endpoints, or otherwise degrading service availability is strictly disallowed and will lead to further consequences.**_
    
    **Theoretical Reports for Production**
    - **High-Confidence Hypotheses:** If your DoS test fails or does not reproduce in the Sandbox but you have strong reason to believe it would succeed in Production, please submit a theoretical report.
    - **Proof-of-Concept Not Required:** You do not need to actively exploit the potential vulnerability. Instead, outline the reasoning or evidence behind your suspicion and any relevant technical details(technical reasoning, endpoint details, potential impact).
    - **Internal Validation:** Our security team will investigate your claim internally and determine whether the endpoint is indeed vulnerable.
    
    **If you neglect the DoS policy and test on production and cause an availability Issue:**
    - **Immediate Impact:** Any submission associated with a live service disruption may be disqualified from receiving a bounty.
    - **Escalating Penalties:** We will evaluate the severity and intent.
        - **First-time / Accidental:** Typically results in a formal warning and no bounty.
        - **Repeat or Malicious:** May lead to removal from our program (temporary or permanent) if we see a pattern of negligence or bad faith.
    - **Open Dialogue:** We understand mistakes can happen in good-faith research. If you promptly disclose what happened, cooperate fully, and make every effort to avoid further harm, we will take that into account when determining your status.
    
    ###DoS Testing Guidelines:
    1.	Avoid Actual Service Disruption: 
            - No Service Degradation: Make every effort to prevent any actual degradation or disruption of our services during testing.
     2.	Gradual Testing Approach:
            - Start Small: Begin with minimal payloads or input values.
            - Incremental Increases within reason: Slowly increase payload size or complexity while monitoring system responses.
            - Monitor Continuously: Keep an eye on service performance metrics (response times, error messages, etc.).
    3.	Immediate Cessation upon Degradation:
            - Stop Immediately: Cease all testing at the first sign of service degradation or abnormal behavior.
            - Document Findings: Record all relevant information up to that point for your report.
    4.	Timing Considerations:
            - Off-Peak Hours: Conduct testing during periods of low user activity to minimize potential impact.
            - Time Zones: Be mindful of global users and avoid universally high-traffic periods.
    
    If you think you have found an eligible DoS issue, please include the following information in your report:
    - The URL of the page that is vulnerable to DoS
    - The **Paypal-Debug-Id** of the HTTP response that causes the DoS
    - The HTTP request that causes the DoS
    - The HTTP response that is returned by the server after the DoS has been triggered
    - The time it takes for the DoS to be triggered
    ----------
    ----------
    # Scope for Mobile Applications
    
    ## In-Scope Vulnerabilities
    In addition to in-scope items mentioned above, some additional vulnerability types will be considered in-scope for mobile applications. These include:
    - Man-in-the-Middle attacks
    - Attacks requiring physical access to a mobile device
    
    ## Out-of-Scope Vulnerabilities
    The following mobile vulnerabilities are out-of-scope and will not be accepted:
    - Vulnerabilities requiring a rooted, jailbroken, or otherwise modified device
    - Username enumeration on customer facing systems (i.e. using server responses to determine whether a given account exists)
    - Vulnerabilities requiring extensive user interaction
    - Exposure of non-sensitive data on the device
    - Vulnerabilities on third party libraries without showing specific impact to the target application (e.g. a CVE with no exploit)
    
    # Bug Submission Requirements
    
    _**When testing PayPal assets: **_
    - We recommend registering accounts using your ```<username>+pp@wearehackerone.com``` address where applicable. 
    - Provide your IP address in the bug report (kept private, used only for testing activity review) 
    - Include a custom HTTP header in all traffic:  
                - **Identifier:** Your Username 
                - **Format:** ```X-PP-BB: HackerOne-<username> ```
                - **Example:** ```X-PP-BB: HackerOne-gonpp ```
    - When demonstrating root permissions in a vulnerable process, use:  
                - **Read:** ```cat /proc/1/maps```
                - **Write:** ```touch /root/<your H1 username>```
                - **Execute:** ```id, hostname, pwd ```
                - ***Check the full RCE guidelines below. ***
    
    _**For all submissions, please include: **_
    - Full description of the vulnerability being reported, including the exploitability and impact. 
    - For quicker response time, your report must be professionally written and include the following when applicable:  
                - Custom Header 
                - Videos  
                - Screenshots 
                - Exploit code 
                - Traffic logs 
                - Web/API requests and responses 
                - Email address or user ID of any test accounts 
                - IP address used during testing. 
                - For RCE submissions, see below. 
    
    Failure to include any of the above items may delay or jeopardize the Bounty Payment 
     
    _***Once your report is closed, securely delete any inadvertently accessed data. ***_
    
    ##Remote Code Execution (RCE) Submission Guidelines: 
    Failure to meet the below conditions and requirements could result in a forfeiture of any potential Bounty Payment. 
    - Source IP address 
    - Timestamp, including time zone. 
    - Full server request and responses 
    - Filenames of any uploaded files, which must include “bugbounty” and the timestamp. 
    - Callback IP and port, if applicable 
    - Any data that was accessed, either deliberately or inadvertently 
    - Allowed Actions: 
                - Directly injecting benign commands via the web application or interface (e.g. whoami, hostname, ifconfig) 
                - Uploading a file that outputs the result of a hard-coded benign command. 
    - Prohibited Actions: 
                - Uploading files that allow arbitrary commands (i.e. a webshell) 
                - Modifying any files or data, including permissions 
                - Deleting any files or data 
                - Interrupting normal operations (e.g. triggering a reboot) 
                - Creating and maintaining a persistent connection to the server 
                - Intentionally viewing any files or data beyond what is needed to prove the vulnerability. 
                - Failing to disclose any actions taken or applicable required information. 
    
    ##PayPal Merchants/ third-party integrations:
    Researchers are requested to submit any findings involving merchants’ PayPal integrations (for example, when a merchant uses PayPal as an option in their payment system) directly to PayPal’s bug bounty program before reporting them to the merchant, so PayPal can confirm whether the issue originates from its systems or from the merchant’s integration and help coordinate with the merchant. 
    
    # Bounty Payments
    While CVSS scoring is used as a baseline to assess technical severity, bounty amounts are not determined solely by the CVSS score. Reward calculations also consider a range of contextual and business impact factors, including (but not limited to) whether the vulnerability affects third-party systems or integrations; the type, volume, and sensitivity of data exposed or impacted (e.g., personal, financial, authentication, or other confidential information); the scope and extent of exposure; the level of access or privileges obtained; exploitability and likelihood of real-world abuse; potential impact to customers, partners, or brand trust; and the effectiveness of any existing mitigating controls.
    
    We also evaluate report quality, reproducibility, and clarity, as well as whether the finding demonstrates a novel attack path or systemic weakness.
    
    You may be eligible to receive a monetary reward (“Bounty Payment”) if:  
        - (i) you are the first person to submit a site or product vulnerability.  
        - (ii) that vulnerability is determined to by a valid security issue by PayPal’s security team; and  
        - (iii) you have complied with all Program Terms and platform standards. Bounty Payments, if any, will be determined by PayPal, in PayPal’s sole discretion. In no event shall PayPal be obligated to pay you a bounty for any Submission. All Bounty Payments shall be considered gratuitous. 
    
    All Bounty Payments will be made in United States dollars (USD). You will be responsible for any tax implications related to Bounty Payments you receive, as determined by the laws of your jurisdiction of residence or citizenship. 
    
    The minimum bounty amount for a validated bug submission is $50 USD and the maximum bounty for a validated bug submission is $30,000 USD. 
    
    PayPal Bug Bounty Team retains the right to determine if the bug submitted to the Bug Bounty Program is eligible. All determinations as to the amount of a bounty made by the PayPal Bug Bounty Team are final. 
    
    # Rewards 
    | Severity | Description | Reward Range |
    |---|---|---|
    | Critical | Exploits that can lead to significant data breach, system compromise, significant data leak, or severe operational disruption. | $20,000 – $30,000 |
    | High | Vulnerabilities that can cause considerable harm, such as data leaks or unauthorized access to sensitive areas. | $10,000 – $20,000 |
    | Medium | Issues that can lead to limited unauthorized access or data exposure. | $1,000 – $10,000 |
    | Low | Minor vulnerabilities with limited impact and no immediate security risk. | $50 – $1000 |
    
    ###The following bugs will have a set bounty payout:
    
    | Bugs | Low (0.1 - 3.9) | Medium (4.0 - 6.9) | High (7.0 - 8.9) | Critical (9.0 - 10.0) |
    | --- | --- | --- | --- | --- |
    | Subdomain Takeover | $200   | $200  |  $3,000  |  $5,000  |
    |XSS | $50 - $500 | $500 - $3000 | $3,000 - $6,000 | $6,000 |
    
    ###Valid reports on the following will receive different percentages of the standard bounty: 
    - Reports that have impact solely on Braintree Sandbox will receive 50% of the standard bounty
    - Reports on PayPal's Partner Sites ```www.paypal-*.com``` will receive 10% of the standard bounty except domains explicitly listed as out of scope.
    - Reports on older version of SDKs that are no longer supported will receive 10% of the standard bounty.
    
    ##Zero Day Submissions: 
    For zero-day vulnerabilities reported through our bug bounty program, PayPal applies the following payout structure: 
    
    | Submission Timeframe | Payout Percentage |
    |---|---|
    | Within the first 5 days of discovery | No payout |
    |Within 6-30 days of discovery | 25% of standard bounty |
    | Within 31-60 days of discovery | 50% of standard bounty |
    | After 60 days of discovery | Full standard bounty |
    
    Please note that the timeline for any zero-day submission begins from when the public security advisory and/or patch of the vulnerability are published. 
    
    ##Bypassed a fix? 
    If a report has been fully resolved and you later find a working bypass of the fix, submit it as a new report. Bypasses are awarded 20% of the amount paid for the original report. A bypass is treated as the same underlying issue rather than a new finding, but we recognize the additional effort involved in defeating a remediation and reward it accordingly.
    
    ## Reports not Eligible for Rewards 
    - All out-of-scope assets are not eligible for rewards.  
    - Multiple reports of the same bug on different endpoints will be closed as duplicates if they require one fix.  
    
    # Ownership of Submissions
    As a condition of participation in the PayPal Bug Bounty Program, you hereby grant PayPal, its subsidiaries, affiliates and customers a perpetual, irrevocable, worldwide, royalty-free, transferrable, sublicensable (through multiple tiers) and non-exclusive license to use, reproduce, adapt, modify, publish, distribute, publicly perform, create derivative work from, make, use, sell, offer for sale and import the Submission, as well as any materials submitted to PayPal in connection therewith, for any purpose. You should not send us any Submission that you do not wish to license to us.
    You hereby represent and warrant that the Submission is original to you and you own all right, title and interest in and to the Submission. Further, you hereby waive all other claims of any nature, including express contract, implied-in-fact contract, or quasi-contract, arising out of any disclosure of the Submission to PayPal. In no event shall PayPal be precluded from discussing, reviewing, developing for itself, having developed, or developing for third parties, materials which are competitive with those set forth in the Submission irrespective of their similarity to the information in the Submission, so long as PayPal complies with the terms of participation stated herein.
    
    # Termination
    In the event (i) you breach any of these Program Terms or the terms and conditions of the PayPal Agreements; or (ii) PayPal determines, in its sole discretion that your continued participation in the Bug Bounty Program could adversely impact PayPal (including, but not limited to, presenting any threat to PayPal’s systems, security, finances and/or reputation) PayPal may immediately terminate your participation in the Bug Bounty Program and disqualify you from receiving any Bounty Payments. Please see our recommendations on the proper procedures for testing our applications.
    
    # Confidentiality
    Any information you receive or collect about PayPal or any PayPal user through the Bug Bounty Program (“Confidential Information”) must be kept confidential and only used in connection with the Bug Bounty Program. You may not use, disclose or distribute any such Confidential Information, including, but not limited to, any information regarding your Submission and information you obtain when researching the PayPal sites, without PayPal’s prior written consent.
    
    # Indemnification
    In addition to any indemnification obligations you may have under the PayPal Agreements, you agree to defend, indemnify and hold PayPal, its subsidiaries, affiliates and the officers, directors, agents, joint ventures, employees and suppliers of PayPal, its subsidiaries, or our affiliates, harmless from any claim or demand (including attorneys’ fees) made or incurred by any third party due to or arising out of your Submissions, your breach of these Program Terms and/or your improper use of the Bug Bounty Program.
    
    # Changes to Program Terms
    The Bug Bounty Program, including its policies, is subject to change or cancellation by PayPal at any time, without notice. As such, PayPal may amend these Program Terms and/or its policies at any time by posting a revised version on our website. By continuing to participate in the Bug Bounty Program after PayPal posts any such changes, you accept the Program Terms, as modified.

### Current non-archived assets

Complete anonymous pagination: 49 assets across 1 pages, including ineligible assets. Archived assets are not represented.

    *.paypalcorp.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.paypal.cn
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: **Please submit all `https://www.paypal.cn/` reports to the associated bounty program:**
    - Paypal.vulbox.com

    braintree.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Please note braintree.com does not belong to PayPal, and as such is out of scope. 

    *.hyperwallet.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.paylution.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    sandbox.braintreegateway.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: medium
    Instructions: Not specified in the public source.

    Braintree SDK
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    PayPal SDK
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.paypal-support.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    com.paypal.herehd
    Type: APPLE_STORE_APP_ID
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    351727428
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: [iOS Venmo App](https://apps.apple.com/us/app/venmo/id351727428)

    com.xoom.app
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.yourcompany.PPClient
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.paypal.here
    Type: APPLE_STORE_APP_ID
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    com.paypal.merchant
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.xoom.android.app
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.paypal.merchant.client
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.paypal.android.p2pmobile
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.venmo
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.paypal.here
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.paypal-*.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: PayPal's Partner Sites (www.paypal-__.com) are mainly marketing based sites that are not part of the core PayPal customer domains (.paypal.com) and are managed by hosting vendor companies. They have variable timelines and are often decommissioned. A listing of these sites designated for deprecation will not be publically maintained due to frequent changes. When researching bugs on these sites, please keep this in mind as bug Submissions for sites on schedule for deprecation will not be honored.
    Submissions of bugs relating to services or domains not referenced above or for sites on schedule for deprecation are ineligible for the Bug Bounty Program and will not be eligible for a Bounty Payment.
    

    *.xoom.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.paypal.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.braintreegateway.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.paydiant.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.venmo.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    paypalobjects.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: medium
    Instructions: Not specified in the public source.

    paypal.me
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    py.pl
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.braintreepayments.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: For testing and account creation, please use *.sand.braintreepayments.com rather than production.

    *.braintree-api.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: For testing and account creation, please use *.sandbox.braintree-api.com rather than production.

    *.braintree.tools
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Please note, this is a development environment that is constantly in flux. Accordingly, vulnerabilities found on this asset will generally have lower impact and payouts.

    prequal.swiftfinancial.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: We are aware that the root URL of this domain returns an error, the API is functioning correctly.

    partner.swiftfinancial.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: We are aware that the root URL of this domain returns an error, the API is functioning correctly.

    decision.swiftfinancial.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: We are aware that the root URL of this domain returns an error, the API is functioning correctly.

    pigeon.swiftfinancial.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: We are aware that the root URL of this domain returns an error, the API is functioning correctly.

    scrutiny.swiftfinancial.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: We are aware that the root URL of this domain returns an error, the API is functioning correctly.

    www.swiftcapital.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    www.loanbuilder.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    www.swiftfinancial.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    api.swiftfinancial.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    my.swiftfinancial.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    api.loanbuilder.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    my.loanbuilder.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    loanbuilder.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    swiftfinancial.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    swiftcapital.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: low
    Instructions: Not specified in the public source.

    *.atlassian.net
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.gopay.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: **Please submit all `Gopay` reports to:**
    - Paypal.vulbox.com
    

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
