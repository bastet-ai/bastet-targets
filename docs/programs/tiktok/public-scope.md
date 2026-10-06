<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/tiktok) · [Scope](https://hackerone.com/tiktok/policy_scopes)

Publicly verified: 2026-10-06T23:26:53.077Z.

Public source digest: 1e2b35ba0bc3af04e97fdfd1c61c9f1b7278670a71227c92a2918ce678cc07c8

### Program

    TikTok
    Handle: tiktok
    Program state: public_mode
    Submission state: open
    Offers bounties: yes

### Policy

    # TikTok Bug Bounty Program Policy
    
    TikTok values security feedback from the global research community. This program invites external researchers to find and responsibly disclose security vulnerabilities in our products and services. Before submitting a report, review this policy in full. Reports that do not follow this policy may not be eligible for a reward.
    
    ---
    
    # General Program Terms
    
    By participating in this program, you agree to be bound by this policy.
    
    By submitting a vulnerability report, you grant TikTok and its subsidiaries and affiliates, and TikTok USDS Joint Venture LLC (TikTok USDS JV) and its subsidiaries and affiliates, a perpetual, irrevocable, royalty-free license to all intellectual property rights in or related to the submitted material. You represent that no third-party rights are involved and that you have full authority to submit the report.
    
    Please note vulnerabilities that require the same fix across both the TikTok and TikTok USDS JV programs will be treated as a single vulnerability report. Only the first valid submission — regardless of which program it was submitted to — will be eligible for a bounty. Any subsequent submissions for the same issue on either program will be marked as duplicates. If you believe a finding affects both TikTok and TikTok USDS JV, submit to the program whose scope most closely matches the affected asset.
    
    TikTok may modify or terminate this policy at any time. If you violate this policy, act in bad faith, or if your participation could adversely affect TikTok, its affiliates, business partners, or their users, employees, or contractors, TikTok may remove you from the program and disqualify you from receiving any reward.
    
    # Program Rules
    
    - **One vulnerability per report.** Only chain vulnerabilities together when the chain is necessary to demonstrate impact.
    - **Provide clear reproduction steps.** Reports that cannot be reproduced are not eligible for a reward. Include request/response data, screenshots, or video where relevant.
    - **First reporter wins.** If multiple researchers report the same vulnerability, the reward goes to the first valid submission. We may make exceptions on a case-by-case basis.
    - **One root cause, one bounty.** Multiple vulnerabilities caused by a single underlying issue may receive a single reward.
    - **No social engineering.** Phishing, vishing, smishing, and any other form of social engineering targeting TikTok employees, contractors, or users is prohibited.
    - **No harm to users or services.** Do not cause privacy violations, data destruction, or service disruption.
    - **Use test accounts only.** Create your own test accounts and test content. Do not test against accounts you do not own or control. Do not generate fraudulent engagement (likes, follows, views) even on your own accounts.
    - **Stop and report if you find user data or internal resources.** If you encounter real user data or internal systems during research, do not proceed further. Report the issue immediately via HackerOne. We will evaluate impact and reward accordingly.
    - **Do not enumerate internal infrastructure for SSRF.** Use only the SSRF Sheriff service described below.
    - **Follow TikTok policies.** All testing must comply with our [Community Guidelines](https://www.tiktok.com/community-guidelines), Terms of Service, and Privacy Policy.
    - **Communicate through HackerOne.** All questions about a specific report should go through the corresponding HackerOne ticket.
    
    # Report Requirements
    
    Every report must include enough detail for our team to reproduce the issue independently. At minimum, include:
    
    - **Affected asset:** the specific URL, endpoint, app version, or component where the vulnerability exists.
    - **Step-by-step reproduction instructions:** numbered steps starting from an unauthenticated state or a clean test account. Do not assume familiarity with prior steps.
    - **Proof of Concept:** working PoC code, HTTP requests (with headers and parameters), or a video walkthrough demonstrat@ing the vulnerability. Screenshots alone are usually not sufficient and we strongly prefer video PoCs which will help us triage reports faster.
    - **Observed vs expected behavior:** what happened, and what should have happened instead.
    - **Impact statement:** who is affected and what an attacker could achieve. Be specific. "This could be used to steal user data" is not sufficient. "An unauthenticated attacker can read any user's email address and phone number by iterating over sequential user IDs" is.
    
    Reports that lack reproduction steps or require us to guess at the attack scenario may be closed without reward.
    
    ## Testing Notes
    
    - Register test accounts using `<your_username>+x@wearehackerone.com` addresses where possible.
    - Include your IP address or test domain in the report so we can correlate log activity. This information will be kept private.
    - For Proof of Concept files, include your HackerOne username in the filename and as a comment within the file content.
    - Reports must include both a video demonstration and a written, step-by-step reproduction guide. Please include the full Proof of Concept (such as raw HTTP requests or scripts) to ensure the report contains sufficient detail for independent verification.
    
    ## SSRF Testing Rules
    
    All SSRF testing must use TikTok's SSRF Sheriff service. Do not target internal infrastructure directly.
    
    **Step 1: Send your SSRF payload**
    
    - Full-read SSRF (returns a flag to you): `https://ssrf-bait.byted.org/full-read-ssrf`
    - Blind SSRF (you provide your own flag): `https://ssrf-bait.byted.org/blind-ssrf/YOUR_OWN_FLAG`
    
    **Step 2: Verify your flag**
    
    Check `https://sf-ssrf-sheriff.tiktokcdn.com/obj/ssrf-detector-us/YOUR_OWN_FLAG`. A response of **True** confirms the SSRF was successful. A "flag" is a 32-character lowercase hex string that serves as a unique identifier for validation.
    
    **Do not attack or exploit the SSRF Sheriff service itself.** It exists solely for PoC validation.
    
    ---
    
    # Reward Guidelines
    
    Bounty amounts depend on two factors: the **severity of the vulnerability** and the **tier of the affected asset**. Severity is assessed by the TikTok security team based on real-world exploitability and impact, not solely on vulnerability class.
    
    We prioritize vulnerabilities based on the real-world security impact to TikTok users, creators, advertisers, partners, employees, and our platform and not solely on the vulnerability class.
    
    Researchers should demonstrate realistic exploitability and clearly explain the security impact. Reports that show meaningful compromise of user data, account integrity, platform trust, or internal systems are generally prioritized over theoretical or best-practice issues.
    
    Note that the list below functions as a guide and is non-exhaustive and not limited to the examples below. As always, final decision on severity will be determined by the TikTok security team.
    
    ## Definitions of Sensitive User Information
    
    1. Name + Identification Number + Address + Mobile (Combined)
    2. Passport numbers + Identification Number + Name (Combined)
    3. Payment card info e.g., credit card numbers, bank account numbers.
    
    The above defines sensitive user information in vulnerabilities which apply to personal information and not from corporate context.
    
    ## Severity Assessment
    
    **Critical Severity**
    
    Critical reports demonstrate the ability to compromise core platform security or large numbers of users.
    
    Examples include:
    
    - Remote code execution on TikTok production infrastructure.
    - Access to production databases or internal services containing sensitive user information.
    - Authentication bypass allowing access to user accounts without user interaction. Vulnerabilities enabling mass account takeover.
    - Ability to execute arbitrary RCE code in mobile apps that include a robust proof of concept using latest versions of Android or an iOS version. A valid exploit must achieve arbitrary code execution, not just trigger an application crash.
    
    **High Severity**
    
    High severity reports demonstrate the ability to compromise user accounts under certain preconditions, privileged functionality, or sensitive data.
    
    Examples include:
    
    - Account takeover requiring limited user interaction (for example, a single click or link visit).
    - Ability to access another user's private messages, private videos, or non-public profile information.
    - IDORs crossing tenant boundaries exposing sensitive user data (mass PII exfiltration) or allowing modification of another user's resources.
    - Exposure of sensitive credentials, access tokens, signing keys, or production secrets.
    
    **Medium Severity**
    
    Medium severity reports typically require additional conditions, have limited impact, or affect a smaller number of users.
    
    Examples include:
    
    - Most types of Cross-Site Scripting issues.
    - Vulnerabilities allowing limited modification of user preferences or profile settings.
    - Access Control/IDORs limited to a tenant's scope with high impact on confidentiality/integrity.
    - Bypass of existing security controls (MFA, 2SV, moderation, etc.).
    
    **Low Severity**
    
    Low severity reports demonstrate limited security impact, require significant preconditions, or affect only low-sensitivity data or non-critical functionality.
    
    Examples include:
    
    - Access control/IDOR issues limited to a tenant's scope, including viewing or modification of non-sensitive content, or higher-impact confidentiality/integrity issues where the identifier is not enumerable or otherwise difficult to discover.
    - Blind SSRFs without any additional impact.
    - Business logic flaws that allow access to restricted features, content, or benefits.
    - Limited information disclosure issues that expose non-sensitive data and does not materially increase the risk of further exploitation.
    
    ## Other Notes
    
    **Bonuses**
    
    High-quality reports may receive a bonus. A high-quality report includes a working proof of concept, root cause analysis, a suggested fix, and any other relevant context. We also value researchers who are responsive and collaborative during the remediation process.
    
    **Discretion**
    
    All reward decisions, including amounts, bonuses, and eligibility, are made at TikTok's sole discretion.
    
    ---
    
    # Program Exclusions
    
    Any asset not listed in the scope section and not owned by TikTok or its subsidiaries is out of scope. If you are unsure whether an asset is in scope, ask via HackerOne before testing.
    
    The following issues are out of scope regardless of the affected asset:
    
    **Vulnerabilities with no demonstrated impact:**
    
    - Clickjacking on pages with no sensitive actions
    - Content spoofing or text injection without demonstrated impact
    - HTML injection without demonstrated impact
    - Self-XSS (payloads that require the victim to enter the payload themselves)
    - CSV injection without a demonstrated vulnerability
    - Missing security headers (CSP, Referrer-Policy, SRI, X-Frame-Options, cookie attributes) without demonstrated exploit
    - Missing email security records (SPF, DKIM, DMARC) without demonstrated exploit
    - Software version disclosure, banner identification, or verbose error messages
    - Tabnabbing
    
    **Testing constraints:**
    
    - Attacks requiring man-in-the-middle positioning or physical access to a device
    - Rate limiting or brute force on non-authentication endpoints
    - Denial-of-service attacks or any activity that degrades service availability
    - Vulnerabilities that only affect browsers more than two major versions behind the current stable release
    - Previously known vulnerable libraries without a working proof of concept specific to TikTok
    
    **Recently disclosed zero-days:**
    
    - Public zero-day vulnerabilities disclosed less than one month prior will be evaluated on a case-by-case basis.
    
    **Duplicate or known issues:**
    
    - Vulnerabilities already known to TikTok through prior reports or internal discovery (see Known Issues below). Reports for these issues will be closed as known without a reward.
    
    # Disclosure and Confidentiality
    
    TikTok supports public recognition and disclosure for in-scope reports that are closed as resolved.
    
    **HackerOne disclosure:**
    
    - Public disclosure (full or partial) requires a Disclosure Request through the HackerOne platform and explicit approval from the TikTok security team.
    
    **External disclosure (blog posts, conference talks, etc.):**
    
    - Request approval from TikTok before writing.
    - Share your final draft and the intended publication venue with TikTok for review before publishing.
    - Do not publish until you have received explicit written approval.
    
    **Data handling:**
    
    - Do not retain, copy, or disclose any TikTok information obtained during your research.
    - TikTok may redact sensitive information before approving any disclosure.
    
    ---
    
    # Good Faith Guidelines
    
    To encourage responsible security research, TikTok will not pursue legal action against researchers who we determine acted in accidental or good-faith violation of this policy. This includes claims under the DMCA for circumventing technological measures to protect services and applications covered by this program.
    
    Where your research activities conflict with restrictions in TikTok's site policies but comply with this bug bounty program, TikTok may waive those restrictions for the sole purpose of permitting good-faith security research.
    
    If your research involves networks, systems, information, applications, products, or services of a third party, including TikTok users, TikTok cannot bind that third party. Third parties may independently pursue legal action or involve law enforcement. TikTok does not authorize research in the name of other entities and cannot defend, indemnify, or protect you from third-party action.
    
    You must comply with all applicable laws and must not access or compromise data beyond what this program permits.
    
    If you are unsure whether a planned action falls within this policy, contact us through HackerOne before proceeding. TikTok retains sole discretion to determine whether a violation is accidental or in good faith.

### Current non-archived assets

Complete anonymous pagination: 49 assets across 1 pages, including ineligible assets. Archived assets are not represented.

    business.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.zhiliaoapp.musically
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: [Play Store Download](https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically&hl=en_US)

    835599320
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: [iOS Store Download](https://apps.apple.com/us/app/tiktok-make-your-day/id835599320)

    *.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    1235601864
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: [iOS Store Download](https://apps.apple.com/sg/app/tiktok-%E6%9C%89%E8%B6%A3%E7%9A%84%E4%BA%BA%E9%83%BD%E5%9C%A8%E9%80%99%E8%A3%A1/id1235601864)

    com.ss.android.ugc.trill
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: [Play Store Download](https://play.google.com/store/apps/details?id=com.ss.android.ugc.trill&hl=en_US)

    academy-outbound-ads.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.pangleglobal.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    1591003012
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: TikTok Shop Seller Center
    [iOS Store Download][link].
    
    [link]: https://apps.apple.com/my/app/tiktok-shop-seller-center/id1591003012

    com.tiktokshop.seller
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: TikTok Shop Seller Center
    [Play Store Download][link].
    
    [link]: https://play.google.com/store/apps/details?id=com.tiktokshop.seller&hl=en_US&gl=US

    ads.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    careers.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    creatormarketplace.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.tiktokv.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    developers.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    fp-sg.tiktokv.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    affiliate-id.tokopedia.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    seller-id.tokopedia.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    shop-id.tokopedia.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    pay.tokopediax.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.pipopay.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.tiktokpublishers.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.tiktokcdn.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://developers.tiktok.com/minis/
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    Other Asset (Campaigns)
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Please note that this is a generic term for reports that we are accepting during campaigns. Note that this does not guaranteed a bounty / Please do not take this as notice of a valid report. Please do not use this for any other purposes, and this is only to be used when directed by TikTok.

    www.soundon.global
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.soundon.global
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    p16-webcast.tiktokcdn-us.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    p19-sign.tiktokcdn-us.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    p19-webcast.tiktokcdn-us.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    usdsjv.tiktok.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    usds.tiktok.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *tiktokv.us
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *us.tiktokv.com
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    p16-bg.tiktokcdn-us.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    p16-sign.tiktokcdn-us.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    6754134922
    Type: APPLE_STORE_APP_ID
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    shortdrama.tiktok.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    drama.tiktok.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    com.ss.android.ttmd.video
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    effecthouse.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.ss.android.ugc.now
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: [Play Store Download][link].
    
    [link]: https://play.google.com/store/apps/details?id=com.ss.android.ugc.now

    641062073
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: [iOS Store Download][link].
    
    [link]: https://apps.apple.com/be/app/tiktok-now/id1641062073

    partner.tiktokshop.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.tiktok.tv
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: TikTok TV app

    shop.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: TikTok Shop

    com.zhiliao.musically.livewallpaper
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    live-backstage.tiktok.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
