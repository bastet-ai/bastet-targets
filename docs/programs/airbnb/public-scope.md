<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/airbnb) · [Scope](https://hackerone.com/airbnb/policy_scopes)

Publicly verified: 2026-10-06T23:26:54.165Z.

Public source digest: d46dcb584e7e97b26c179d6e63c1e93ce947e217f812b18d5bd83ef30544a6d8

### Program

    Airbnb
    Handle: airbnb
    Program state: public_mode
    Submission state: open
    Offers bounties: yes

### Policy

    **Join us to secure our Airbnb community!** Have you discovered a potential security vulnerability? Your expertise is invaluable. Partner with us by responsibly disclosing the issue—your action is critical to protecting our global community.
    
    **Share your findings—we need the details!** To allow us to investigate effectively and protect our community, please submit a clear, detailed description of the issue and the exact steps required to reproduce what you've observed. Got a recorded repro? *Even better*.
    
    Please also include the following details, ideally captured via Burp Suite (Proxy or Repeater) in your reports.  It helps ensure we are identifying potential security gaps.
    
    - **Full Request/Response Headers:** Complete set of request/response headers for a typical request/response flow. Please also include the DNS hostname if it does not match the value of the “Host” header. 
    - **Omit active session cookies**
    - **Configure a custom header** in your BurpSuite project or scripts to be sent with all traffic, e.g. “X-HackerOne-Researcher: <H1 username>”
    - **Include your source IP Address** used when you were doing your testing.
    
    **Your commitment to privacy is essential:** As you conduct your research, please take the utmost care to protect our users’ privacy, data confidentiality, and integrity. We cannot partner with anyone who violates applicable laws or regulations, attempts to maliciously exploit a security issue, or accesses other users' data. Your assistance in preserving the trust of our community is something we value deeply.
    
    *Note: Abusing vulnerabilities in other websites in order to test Airbnb is prohibited. Provided that you’ve made a good faith effort to abide by this policy, we will not take legal action against you or ask law enforcement to investigate you.*
    
    **We Value Your Time**. Once your report is submitted, we'll share clear timelines for triaging the issue, processing your bounty payout, and answering your questions throughout the investigation. To ensure a prompt review, please provide a clear, detailed description of the vulnerability, its actual security impact, and complete reproduction steps — but keep write-ups focused; avoid unnecessary filler. **Reports lacking this required information, containing excessive filler including dense AI generated outputs, or failing to follow the [HackerOne Code of Conduct](https://www.hackerone.com/policies/code-of-conduct) will be closed as Not Applicable.**
    
    *Note: Timelines as shown below are based upon receipt of a fully detailed vulnerability with reproduction steps provided with the submitted report.*
    
    
    Communication| SLA|
    |-------------------|-----------------|
    | Initial Communication | Upon receipt of new report |
    | Triage | 2-business days from receipt of new report |
    | Bounty Payout | 5-business days from Triage |
    | Response to Researcher questions | 3-business days from posted question |
    
    *If Triage SLAs, Bounty Payouts, and questions occur near US Holidays, please know there may be a delay in response and payout.*
    
    This program is dedicated to perceived online security issues that may affect many people on Airbnb. If you're having issues related to your *individual account*, please visit https://www.airbnb.com/help.
    
    Certain vulnerabilities with a working proof of concept on some of our Android mobile app(s) may qualify for an additional bounty through the Google Play Security Rewards Program. To see which apps and vulnerabilities may qualify for a bounty, please refer to the [Google Play Security Rewards Program’s Scope and Vulnerability Criteria]https://bughunters.google.com/about/rules/5604090422493184/google-play-security-reward-program-rules
    
    
    # Table of Contents
    * Program Scope
    * Program Rules
    * Rewards
    * Eligibility
    * Special Testing Requirements
        * HotelTonight Testing Requirements
    * Out of Scope Vulnerabilities (no reward)
        * Applicable to HotelTonight
    * Other Information
    
    # Program Scope
    In Scope assets are listed https://hackerone.com/airbnb/policy_scopes and are reviewed on a quarterly basis to ensure the most inclusive scope possible.
    
    # Program Rules
    
    - Do not mass create accounts to perform testing against Airbnb applications and services.
    - Do not perform brute force testing to determine whether rate limiting is in place for particular APIs or pieces of functionality.
    - Social engineering (e.g. phishing, vishing, smishing) is prohibited.
    - Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our service.
    - Only interact with accounts you own or with explicit permission of the account holder.
    - Blocked Accounts: There are no guarantees we will be able to unblock any restricted account activity. You may submit a request for us to investigate and unblock your account through HackerOne. The Airbnb InfoSec team will review your request and notify you if any further action is taken.
    - No testing on real user data permitted for any HotelTonight assets.
    - 3rd Party assets are not covered in our program. Our program applies to components under our control.
    
    #Rewards
    Our maximum bounty is $25,000 USD.
    
    Reward amounts are based on Severity and overall impact. We encourage you to use the CVSS calculator in HackerOne to calculate the severity you believe is adequate to your finding. If we believe the severity you calculated is different from our assessment, you will be provided with an explanation as this may impact payout. Please allow up to 5 business days from time of triage for bounty to be paid out. The following table outlines the typical bounty ranges by Severity. **All bounties are up to the discretion of Airbnb.**
    
    High Impact Scope Payout Range
    
    Severity | Payout Range |
    |-------------------|-----------------|
    | Critical | $18,000 - $25,000 |
    | High | $10,000 - $17,999 |
    | Medium| $1000-$5000 |
    | Low| $250 |
    
    AI Customer Service Assistant Feature Scope Payout
    
    Severity | Payout Range |
    |-------------------|-----------------|
    | Critical | $18,000 - $25,000 |
    | High | $5000 |
    | Medium| $2500 |
    | Low| $250 |
    
    
    Low Impact Scope Payout 
    
    Severity | Payout |
    |-------------------|-----------------|
    | Critical | $5000 |
    | High | $3000 |
    | Medium| $500-$1000 |
    | Low| $250 |
    
    
    Vulnerability Type|Severity Range|
    |-------------------|-----------------|-----------------|
    | Remote Code Execution (RCE) | Critical |
    | SQL Injection | High - Critical |
    | Improper Direct Object Reference (IDOR) | Medium - Critical |
    | Sensitive Data Exposure| Medium - Critical |
    | Server Side Request Forgery (SSRF) | Low - Critical |
    | Local file Inclusion | Medium - High |
    | Stored Cross Site Scripting | Medium - High |
    | Significant Authentication Bypass | Medium - High |
    | Authorization Flaw | Medium - High |
    | Cross-Site Request Forgery (CSRF) | Low - Medium |
    | Open Redirect on Sensitive Parameter | Low - Medium |
    | Reflected/Other Cross Site Scripting | Low - Medium |
    | Open Redirect | Low - Medium |
    | DNS Subdomain Takeover | Low - Medium |
    
    ##Highest Impact Scope
    * `*.airbnb.com`
    * `*.airbnb.org`
    * `*.musta.ch`
    * `*.airbnbpayments.com`
    * All localized airbnb sites (e.g., `es.airbnb.com`, `it.airbnb.com`)
    * [Airbnb iOS app](https://apps.apple.com/us/app/airbnb/id401626263)
    * [Airbnb Android app](https://play.google.com/store/apps/details?id=com.airbnb.android)
    
    ## Lower Impact Scope
    These properties are considered to have lower security impact on our users since they should not have access to Airbnb user sessions and generally cannot access user data. The bounties given for reports on these properties will therefore be significantly lower.
    
    * `*.atairbnb.com`
    * `*.withairbnb.com`
    * `*.airbnbcitizen.com`
    * `*.byairbnb.com`
    * `*.muscache.com`
    * `*.airbnb-aws.com`
    * `*.luxuryretreats.com`
    * `*.airbnbopen.com`
    * `hoteltonight-test.com`
    * `*.hoteltonight.com`
    * `api.hoteltonight-test.com`
    * `places.hoteltonight-test.com`
    
    Please remember that reward decisions are up to the discretion of Airbnb. We do not reward duplicate reports. 
    
    # Eligibility
    Airbnb reserves the right to decide the weakness and severity of a report and whether the vulnerability was previously reported. Rewards are granted entirely at the discretion of Airbnb.
    
    To qualify for a reward under this program, you must:
    - Be the first to report a vulnerability.
    - Send a clear textual description of the report along with steps to reproduce the vulnerability.
    - Include attachments such as screenshots or proof of concept code as necessary.
    - Disclose the vulnerability report directly and exclusively to us.
    
    
    A good Bug Bounty report should include the following information at a minimum:
    - List the affected endpoints, URL(s), and any additional parameters
    - Step by step instructions so we can reproduce the finding to verify the vulnerability
    - Full written details of the finding 
    - Account Configuration: User type (Guest, Host, ProHost, SuperHost) 
    - Severity: Use the HackerOne calculator to calculate the severity you believe matches your report
    - Asset: Select the asset that is impacted by your finding 
    - Weakness: Select the weakness associated with your report
    
    
    # Out of Scope Vulnerabilities
    When reporting vulnerabilities, please consider the attack scenario, exploitability, and security impact of the bug. The following issues are considered out of scope, and we will NOT accept any of the following types of attacks:
    
    - Denial of service attacks
    - Phishing attacks
    - Social engineering attacks
    - Reflected file download
    - Software version disclosure
    - Issues requiring direct physical access
    - Flaws affecting out-of-date browsers and plugins
    - Publicly accessible login panels
    - CSV injection
    - Email enumeration / account oracles that do not provide any extra information.
    - CSP Weaknesses
    - Email Spoofing
    - Content redaction bypasses where the redacted content is replaced by the string (Hidden by Airbnb) (other content redaction vulnerabilities are in scope)
    - Techniques allowing you to view user profile photos (these are considered public)
    - Broken links or unclaimed social media accounts (unless chained with an impactful exploit)
    - Exposed Google Maps API keys
    - Unvalidated or unreproducible scanner results
    - Any issue without clear security impact
    
    For product related, non-security related issues, please use  https://www.airbnb.com/help
    
    ## Applicable to HotelTonight
    * `hoteltonight.com`
    * `hoteltonight.build`
    * `hoteltonight-test.com`
    * Our partners site (`partners.hoteltonight.com`)
    * iOS mobile app
    * Single Sign On (Google or Facebook). 
    * Do not send questions/requests to their customer support team for help with your testing. This is considered an interruption to the business. 
    
    Ensure you use test accounts and data. Researchers can create test customer accounts and book hotel rooms (test bookings) using a fake credit card in our testing environment, which doesn’t send out any email notifications (activation or confirmation) to customers. Remember to only use test data when using these systems.
    
    **HotelTonight Mobile Web App**
    * Accessible from https://www.hoteltonight-test.com (if using a desktop browser, note that you will need to use a mobile user-agent or Chrome developer tools to view the mobile site)
    
    **HotelTonight Mobile APIs**
    Mobile APIs that power our mobile apps are located at:
    * api.hoteltonight-test.com
    * places.hoteltonight-test.com
    
    **HotelTonight Cities and Inventory**
    In our testing environment, you should search for following cities to look for hotels:
    * San Francisco
    * Las Vegas
    * New York City
    
    **HotelTonight Access**
    You can create customer accounts using your emails (no activation emails will be sent) via a specific url: [https://www.hoteltonight-test.com/?client_loginWithOTPAndPhone=control](https://www.hoteltonight-test.com/?client_loginWithOTPAndPhone=control), and use the following credit card for test booking a hotel room: - 4111111111111111 (Visa) with any expiration date in the future. Additional test payment methods available at https://developers.braintreepayments.com/reference/general/testing/ruby#credit-card-numbers (use only American Express, Discover, JCB, Mastercard, or Visa). All test bookings are not real bookings. We also suppress all emails for test bookings, so no email receipts will be sent to whatever email address is entered.
    
    **HotelTonight Credentials**
    Researchers will need to self-provision the customer accounts by signing up using their email on our mobile web app. You will not get any activation email from our testing environment.
    
    # Other Information
    * [Researchers who have our thanks](https://hackerone.com/airbnb/thanks)
    * [Past versions of this policy](https://hackerone.com/airbnb/policy_versions)
    
    
    
    
    
    
    
    

### Current non-archived assets

Complete anonymous pagination: 35 assets across 1 pages, including ineligible assets. Archived assets are not represented.

    demo.urbandoor.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    provider.demo.urbandoor.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    admin.demo.urbandoor.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.hoteltonight-test.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    luckey.partners
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.hoteltonight.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    *.airbnb.org
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.musta.ch
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.airbnbpayments.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    next.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    api.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    support-api.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    open.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    callbacks.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    *.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    Localized airbnb sites listed at the link below:
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: **https://www.airbnb.com/sitemaps/localized**
    Higher Impact Scope

    *.airbnbcitizen.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    com.airbnb.app
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    assets.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    m.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    one.airbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    *.muscache.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    *.airbnb-aws.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    *.luxuryretreats.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    com.luxuryretreats.ios
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    com.airbnb.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Higher Impact Scope

    *.atairbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    *.withairbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    *.byairbnb.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    www.hoteltonight.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Lower Impact Scope

    luckeyhomes.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    luckey.fr
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    luckey.app
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    luckey.in
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
