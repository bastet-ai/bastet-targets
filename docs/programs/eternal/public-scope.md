<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/eternal) · [Scope](https://hackerone.com/eternal/policy_scopes)

Publicly verified: 2026-10-06T23:26:49.461Z.

Public source digest: 68dfbf6a73e2b54e2fde15cdbb29a1361ad594af1d973bc980a8f32e3486df44

### Program

    Eternal
    Handle: eternal
    Program state: public_mode
    Submission state: open
    Offers bounties: yes

### Policy

    We take security seriously at Eternal and are committed to protecting our community. If you are a security researcher or expert and believe you've identified a security-related issue with any of Eternal’s key verticals - Zomato, Blinkit, Hyperpure, or District websites or apps, we encourage you to report it to us responsibly.
    
    Our team is committed to addressing all security reports in a timely and responsible manner. We kindly ask the security community to give us the opportunity to investigate and resolve any issues before making them public. Please include a detailed description of the issue and the steps to reproduce it in your submission.
    We appreciate the efforts of the security community in helping us safeguard our users’ data and privacy.
    
    
    
    # Disclosure Policy
    * Let us know as soon as possible upon discovery of a potential security issue, and we'll make every effort to quickly resolve the issue.
    * Provide us a reasonable amount of time to resolve the issue before any disclosure to the public or a third-party.
    * Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our service. Only interact with accounts you own or with the explicit permission of the account holder.
    
    # Test Plan
    Please include a header `X-Hackerone: <h1_username>` when you test so we can identify your requests easily.
    
    # Scope
    The scope of issues is limited to technical vulnerabilities in the Eternal website or mobile apps. Please do not attempt to compromise the safety or privacy of our users (so please use test accounts), or the availability of Eternal through DoS attacks or spam. We also request you not to use vulnerability testing tools that generate a significant volume of traffic.
    
    Certain vulnerabilities with a working proof of concept on some of our Android mobile app(s) may qualify for an additional bounty through the [Google Play Security Rewards Program] (https://hackerone.com/googleplay). To see which apps and vulnerabilities may qualify for a bounty, please refer to the [Google Play Security Rewards Program’s Scope and Vulnerability Criteria] (https://hackerone.com/googleplay).
    
    # Rewards
    We will reward reports according to the severity of their impact on a case-by-case basis as determined by our security team. We may pay more for unique, hard-to-find bugs; we may also pay less for bugs with complex prerequisites that lower the risk of exploitation. 
    
    Below, you can find examples of vulnerabilities and their impacts grouped by our severity ranking. This is not an exhaustive list and it is designed to give you insight on how we rate vulnerabilities. 
    
    # Critical 
    * Remote Code Execution (RCE) - able to execute arbitrary commands on a remote device
    * SQL Injection - able to read Personally Identifiable Information (PII) or other sensitive data / full read/write access to a database
    * Server-Side Request Forgery (SSRF) - able to pivot to internal application and/or access credentials (not blind)
    * Information Disclosure - mass PII leaks including data such as names, emails, phone numbers and addresses (Combined) 
    
    # High 
    * Stored Cross-Site Scripting (XSS) - stored XSS with access to non HttpOnly cookies
    * Information Disclosure - leaked credentials
    * Subdomain Takeover - If a proper PoC is provided that can demonstrate an attacker geting access to confidential user data and able to perform unauthorized operations without leveraging phishing attack vectors.
    * Cross-Site Request Forgery (CSRF) - leading to account takeover
    * Account Takeover (ATO) - with no or minimal user interaction
    * Insecure Direct Object Reference (IDOR) - read or write access to sensitive data or important fields that you do not have permission to
    * SQL Injection - able to perform queries with a limited access user
    
    # Medium 
    * CSRF - able to modify important information (authenticated) 
    * ATO - required user interaction
    * IDOR - write access to modify objects that you do not have permission to
    * XSS - reflected/DOM XSS with access to cookies
    
    # Low 
    * Directory listings 
    * XSS - Without access to cookies/Auth Data
    * XSS - POST based XSS (with CSRF bypass)
    * Lack of HTTPS on dynamic pages (judged on a case-by-case basis)
    * Server information page (no credentials)
    * Subdomain Takeover - on an unused subdomain
    
    # Eligibility and Responsible Disclosure
    To promote the discovery and reporting of vulnerabilities and increase user safety, we ask that you:
    * Give us a reasonable time to respond to the issue before making any information about it public.
    * Not access or modify data without the explicit permission of the owner.
    * Act in good faith not to degrade the performance of our services (including denial of service).
     
    We only reward the first reporter of a vulnerability. Public disclosure of the vulnerability prior to resolution will result in disqualification from the program. You must report a qualifying vulnerability through the HackerOne reporting tool to be eligible for a monetary reward.
    
    # Non-qualifying vulnerabilities / Known Issues
    
    When reporting vulnerabilities, please consider (1) attack scenario/exploitability, and (2) the security impact of the bug. The following issues are considered out of scope:
     
    ##Informative Bugs
    * Broken Link Hijacking issues are categorized as low severity and are not eligible for rewards.
    * Credential leakage reports are considered informational if two-factor authentication (2FA) is in place
    * SSL Pinning/Root Detection Bypass
    * Security issues related to Zomato Legends are considered informational and are not eligible for rewards, regardless of whether the issue is resolved by the team
    
    ------- 
    &nbsp;
    
    ##Policy for Leaked Credentials
    
    * We offer $50-$150 (depending on the asset tier) per report. Multiple credentials for the same user, or multiple employee accounts exposed in the same source, are treated as one finding. Reports involving administrative accounts or access to sensitive systems - such as production environments or large volumes of personal information - may qualify for higher rewards based on impact.
    * Only the first valid, non-duplicate report for a given leak is eligible for a reward. If the same credentials appear across multiple sources, they will still be counted as a single finding.
    Each application and source is evaluated independently.
    * Submissions must include proof of validity, leak origin, and confirmation that credentials were not misused.
    * Researchers should submit the leaked credentials to the program and should NOT test their validity beyond authenticating and then immediately deauthenticating - without exercising any functionality.
    * Such reports will be evaluated on a case-by-case basis to determine an appropriate reward amount.
    * Employee personal accounts, customer accounts, and merchant accounts are not in scope.
    
    
    --------- 
    &nbsp;
    
    ## Data Protection Program 
    
    As data protection and trust becomes critical, we are introducing a new area of research for our bug bounty program. 
    We aim to strengthen the overall ecosystem of business that is touched by Eternal. 
    
    This program is complementary to our existing bug bounty program in that it *"follows the data"* even if the root cause isn't a security flaw in Eternal’s code or Infrastructure. "External agents can accidentally compromise or leak Eternal’s data, even when no security vulnerabilities exist. This program is intended to protect against that abuse."
    This program is focused on passive monitoring and recon of our data and doesn’t permit/allow for active hunting or testing.
    
    Though we cannot guarantee legal protection from third parties. We strongly recommend 
    researchers understand the legal risks in their jurisdiction.
    
        ### What is allowed (Data Protection Program):
     Observing publicly accessible data exposure (e.g., unsecured S3 buckets, public APIs returning customer data)
     Monitoring websites/apps for exposed information
     Using publicly leaked credentials to verify access to Eternal data
     Accessing external  systems using credentials found through passive reconnaissance (e.g., exposed in GitHub, paste sites,   breach compilations)
     Documenting the extent of data accessible through compromised credentials
     Scanning for exposed configuration files, API keys, or access tokens
    
      ### What is not allowed (Data Protection Program):
    
     Active hunting or testing on any of our partners without their prior approval is NOT allowed. Apart from this, all the program  conditions and policies still apply, when in doubt you can raise a scope request or email us at bugbounty@eternal.com for  clarifications.
    
    
    * Active exploitation or vulnerability testing on external systems
    * Brute forcing, credential stuffing, or password spraying attacks
    * Creating test accounts or transactions to probe external systems
    * Social engineering.
    * Lateral movement within any external systems beyond verifying Eternal data access
    * Modifying, deleting, or exfiltrating large volumes of data
    * Any actions beyond read-only verification of Eternal data exposure
    
    
     ### Credential Usage Guidelines (Data Protection Program):
    
     * When Using Found Credentials:
     * Only access systems to verify Eternal data exposure
     * Limit access to the minimum necessary to document the issue
     * Do not access, modify, or delete data belonging to other customers
     * Do not perform actions that could alert or trigger the security systems
     * Document your access but do not download bulk data
     * Report immediately after verification
     * Do not share credentials with others
    
     While we permit credential-based access verification under this program, 
     researchers should be aware that:
     -  External agents may pursue legal action independently
     - Laws vary by jurisdiction regarding unauthorized access
     - We will advocate on your behalf but cannot guarantee legal immunity
     - Document your methodology carefully to demonstrate good faith
     - Consider consulting legal counsel before accessing systems with found credentials
    
    
     ### Bounty structure (Data Protection Program):
    
     As this is a pilot program, rewards currently range from $100 to $500 USD, depending on the severity and impact of the  reported exposure.
    
     We determine reward amounts based on a variety of factors, including:
    
     * Sensitivity of exposed data (payment info, PII, credentials)
     * Volume of customer records affected
     * Ease of discovery and access
     * Duration of exposure
     * Impact on privacy
     * Quality and completeness of your report
    
     The amount of any reward is entirely up to our discretion. We will review and potentially increase reward amounts based on the program's success and community response during the pilot phase. 
    
    ----------- 
    
    &nbsp;
    
    
    ## Not Applicable  & Out of Scope Bugs
    
    * Issues related to Way Back Machine/Web Archive (e.g., leaked invoices or contract documents) will be marked as Not Applicable or (Spam - if reported repeatedly) 
    * Google Maps API Keys Leakage
    * HTML Injection & Context Spoofing(Closed as NA) 
    * Cache Poisoning DoS
    * Clickjacking on pages with no sensitive actions
    * Cross-Site Request Forgery (CSRF) on unauthenticated forms or forms with no sensitive actions
    * Attacks requiring MITM or physical access to a user's device.
    * Previously known vulnerable libraries without a working Proof of Concept.
    * Comma Separated Values (CSV) injection without demonstrating a vulnerability.
    * Missing best practices in SSL/TLS configuration.
    * Any activity that could lead to the disruption of our service (DoS/DDoS).
    * Content spoofing and text injection issues without showing an attack vector/without being able to modify HTML/CSS
    * Rate limiting or brute force issues
    * Invalidation/expiry on CDN assets
    * Missing best practices in Content Security Policy.
    * Missing HttpOnly or Secure flags on cookies
    * Missing email best practices (Invalid, incomplete or missing SPF/DKIM/DMARC records, etc.)
    * Vulnerabilities only affecting users of outdated or unpatched browsers [Less than 2 stable versions behind the latest released stable version]
    * Software version disclosure / Banner identification issues / Descriptive error messages or headers (e.g. stack traces, application or server errors).
    * Public Zero-day vulnerabilities that have had an official patch for less than 1 month will be awarded on a case by case basis.
    * Tabnabbing
    * Open redirect - unless an additional security implication can be demonstrated 
    * Self XSS
    * Promo code abuse (e.g. ordering multiple times using the same promo code)
    * We're aware of Promotion offers/Cash backs Issues (e.g: logic issues in cash back reversing/applying) 
    * Abuse of our promotional offers and referral codes
    * CSRF on www.zomato.com/php/* and www.zomato.com/clients*/
    * Promo code enumeration, abuse of our promotional offers and referral codes.
    * Able to retrieve user's public information.
    * Username / email enumeration
    
    # Consequences of complying with this policy
    
    We will not pursue a civil action or initiate a complaint to law enforcement for accidental, good faith violations of this policy. We consider activities conducted consistent with this policy to constitute “authorized” conduct under the Computer Fraud and Abuse Act (CFAA). We will not bring a DMCA claim against you for circumventing the technological measures we have used to protect the applications in scope.
    
    If legal action is initiated by a third party against you and you have complied with Eternal's bug bounty policy, Eternal will take steps to make it known that your actions were conducted in compliance with this policy.
    
    Please submit a [HackerOne report](https://hackerone.com/zomato) to us before engaging in conduct that may be inconsistent with or unaddressed by this policy.
    
    Thank you for helping keep @Eternal safe for the community!
    Eternal Security Team

### Current non-archived assets

Complete anonymous pagination: 49 assets across 1 pages, including ineligible assets. Archived assets are not represented.

    Scope Questions: Items not explicitly listed here
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: If you have a question about something that is not explicitly listed as out-of-scope or in-scope, please submit a report and we will provide clarification. We will allow you to self close that report after we answer your question.

    *.zomatoportugal.com
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    success.zomato.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.zomans.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: This domain is mainly used for internal applications that are hosted in AWS. Our area of interest is any issue that can potentially give anyone unrestricted access or expose internal or confidential data.

    dev.hyperpure.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    devapi.hyperpure.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.hyperpure.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    devpod.hyperpure.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    send.zomato.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.runnr.in
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    staging*.runnr.in
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Please don't test on staging/dev instances. Instead, we have created a dedicated environment `bugbounty.runnr.in` which is a replica of the same for testing.

    *.bstro.io
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.district.in
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.edition.in
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.ticketnew.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.insider.in
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.ali.zomans.com
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    Tier 2
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    Tier 1
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.tktnew.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    Tier 3
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.blinkit.bistro
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Bistro by Blinkit: A mobile app offering instant food delivery
    
    https://play.google.com/store/apps/details?id=com.blinkit.bistro

    6670203019
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Bistro by Blinkit: A mobile app offering instant food delivery
    
    https://apps.apple.com/in/app/bistro-food-in-minutes/id6670203019 
    

    bistro-api.blinkit.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.application.zomato.district
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: District by Zomato: an app for movies, events, dining out bookings.
    
    https://play.google.com/store/apps/details?id=com.application.zomato.district&hl=en_IN

    6670536058
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: District by Zomato: an app for movies, events, dining out bookings.
    
    https://apps.apple.com/in/app/district-movies-events-dining/id6670536058

    *.eternal.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://mcp-server.zomato.com/mcp
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    Data Protection Program
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: For more information on what is and isn’t allowed, refer to the Program Policy.

    *.zdev.net
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.zomato.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    winecellar.zomato.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.zomatobook.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    business-blog.zomato.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    com.application.zomato
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    All Assets (other than Blinkit)
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Bounty table header

    http://*.blinkit.support
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    http://*.grofer.io
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://*.grofers.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    960335206
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Blinkit iOS App
    
    https://apps.apple.com/th/app/blinkit-grocery-in-10-minutes/id960335206

    com.grofers.customerapp
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Blinkit's Customer Android App:
    https://play.google.com/store/apps/details?id=com.grofers.customerapp 
    
    

    api.grofers.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    api2.grofers.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    blinkit.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.application.zomatomerchant
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.application.zomato.ordering
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    434613896
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Zomato: Food Delivery & Dining

    blog.zomato.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    community.zomato.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
