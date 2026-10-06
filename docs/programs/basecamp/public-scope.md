<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/basecamp) · [Scope](https://hackerone.com/basecamp/policy_scopes)

Publicly verified: 2026-10-06T23:26:54.992Z.

Public source digest: 341a53ffe839caf7d48055673991468761c8ff4b92476a6fcf44977b840a0b4f

### Program

    Basecamp
    Handle: basecamp
    Program state: public_mode
    Submission state: open
    Offers bounties: yes

### Policy

    **TL;DR** - Your insight and discoveries = our deep <3, and now $.
    We're a small team born and bred on open source, so we look to the security community's lead for exploit patterns, best practices, top vulns, new research—everything. We've learned much and keep adapting. Thank you.
    We push for the best in web security and it's your research that makes the big strides and reveals blind spots. We invite you to pursue and demonstrate your work here. We'll pair closely with you, respond to your findings speedily & thoroughly, and publicly share our appreciation.
    
    **Bounties range from USD $100 to $10,000** and scale according to impact and ingenuity, from an unlikely low-sensitivity XSS to a deep, novel RCE. One per bug; first discovery claims it; ties break toward the best report.
    
    Where possible, use a `@wearehackerone.com` email address to create accounts and only test against accounts you create. Read the sections below carefully to avoid having your report closed as N/A. 
    
    ## Our focus is on
    - Strong auth (sign-in, sessions, OAuth, account recovery, MFA)
    - Access control (bypasses, faults, CSRF, etc)
    - Injection prevention (SQL, XSS, method args, etc)
    - For HEY only: privacy leaks that expose a recipient to a sender. What we want are cases where a message causes the recipient's browser to contact a sender-controlled server directly, revealing their IP address, User-Agent, device, or location. See the HEY section below for what does not qualify.
    
    Concatenating bugs to increase the attack scenario is encouraged. 
    
    ## General eligibility
    The scope of the bug bounty program is limited to the apps and domains listed [on our scope page](https://hackerone.com/basecamp/policy_scopes?type=team). Valid vulnerabilities on any domain or app not explicitly listed in scope may be accepted but are ineligible for a reward. 
    As a general rule:
    - Reports that do not demonstrate a relevant CVSS impact on any of the apps in scope will be closed as N/A. 
    - In cases where multiple reports share _the same root cause_, these will be closed as Duplicate.
    - We will only award and triage reports when the root cause is under our control.
    - We do not consider it a vulnerability when the victim must deliver the attacker's payload themselves (e.g., importing a file, pasting input). This is self-XSS regardless of the resulting impact.
    
    ## This is out of scope for all our apps
    - Hyperlink injection on emails
    - Existing sessions not being invalidated when 2FA is enabled
    - Enabling 2FA without verifying email address to prevent someone from signing up
    - Rate limiting
    - Best practices concerns (we require evidence of a security vulnerability)
    - Vulnerabilities only affecting users of outdated or unpatched browsers and platforms
    - Race conditions that don't compromise the security of any user or Basecamp. This includes race conditions that lead to bypassing the limits of your current plan
    - Reports about theoretical damage without a real risk
    - The output of automated scanners without explanation
    - CSRF with no security implications (like Login/logout/unauthenticated CSRF)
    - Broken links
    - Missing cookie flags on non-security sensitive cookies
    - Attacks requiring physical or console access to a user's device
    - Any issue in a mobile application that can only be exploited on a rooted or jailbroken device, that depends on debug access being enabled, or that depends on a vulnerability in the operating system
    - Hardcoded keys, tokens, or debug endpoints extracted from mobile app binaries (APK/IPA) that enable developer tools or internal features, unless chained with a demonstrated cross-user impact that does not require physical device access
    - Missing security headers not related to a security vulnerability
    - Reports of insecure SSL/TLS ciphers unless you have a working proof of concept
    - Banner grabbing issues to figure out the stack we use or software version disclosure
    - Open ports without a vulnerability
    - Password and account recovery policies, such as reset link expiration or password complexity
    - Disclosure of known public files or directories, (e.g. robots.txt)
    - Reports of spam
    - Username/email address enumeration
    - Presence of autocomplete attribute on web forms
    - DNSSEC and DANE
    - HSTS or CSP headers
    - Host header injection unless you can show how a third party can exploit it
    - Reflected File Download (RFD)
    - EXIF information not stripped from uploaded images
    - DoS targeting other users on the same account, e.g. using malformed inputs or crafted file uploads
    - DoS vulnerabilities based on submitting a large payload in an input field and triggering a 500 error
    - DoS vulnerabilities based on unlimited password length (hint: the password length is not unlimited)
    - DoS vulnerabilities based on lack of pagination or lots of user content slowing response times
    - Using product features like invitation/signup/forgot-password to deliver messages to any email address
    - Unrestricted file upload without a clear attack scenario or PoC
    - JavaScript code executed from a PDF within the browser's PDF viewer, where the attack surface is locked down (for example, [JavaScript support in PDF in Chrome's PDF viewer is an intentional feature](https://bugs.chromium.org/p/chromium/issues/detail?id=511295), so so long as it can't be used to mount an attack)
    - Clickjacking / UI redress (overlay or framing tricks)
    - Signed download URLs for stored files continuing to work after access is revoked, after content is unpublished, or after a record is trashed. This covers Active Storage blob URLs and `sgid` attachment references. Such a reference is unguessable and can only be obtained by someone who could already view the object, and the file behind it never changes: replacing a file produces a new reference, so an old URL cannot return anything its holder was not already entitled to read. Losing access stops you seeing anything new, it does not retract a copy of something you could already download. What *is* in scope is any path that hands you a signed reference for an object you never had access to in the first place.
    
    These apply to all our in-scope assets. See each app below for more specific out-of-scope reports. 
    
    ## Disqualifiers
    - Attempting access to other customers' accounts or accessing other customers' accounts and data unless it's completely unintentional and accidental. 
    - Denial of service: disrupting other customers' access to their own accounts.
    - Social engineering of any kind against other customers our staff, including spearphishing attempts or contacting our support team.
    - Overwhelming our support team with messages. Don't fuzz Contact Support forms.
    - Physical intrusion.
    - Automated scanning, mail bombing, spam, brute-forcing or automated attacks with programs like Burp Intruder.
    - Leaking, manipulating, or destroying any user data.
    
    ## Guidelines
    - All reports **should include** a detailed step-by-step explanation of how to replicate the issue and an attack scenario to demonstrate the risk.
    - Practice responsible disclosure. That's a responsibility to users, not us. We strive to live up to the other end of this by resolving bugs in a timely manner.
    - If you sign up for an account for vulnerability testing, please include "HackerOne" somewhere in your email address or use a `@wearehackerone.com` address. 
    - If you include any secrets or confidential information in your report, partially mask it, as far as possible, so you can still convey the severity of your findings without accidentally leaking information. 
    
    ## Bypasses of previously fixed vulnerabilities
    If you discover a valid bypass of a previously resolved report:
    - We’ll award between 35% and 70% of the original bounty, depending on the impact, and quality of your report.
    - The bypass must be a genuine circumvention of the fix, not a minor variation of the original.
    
    ## Known issues we already track
    Some findings are real, in scope, and already known to us as a single tracked
    issue rather than a series of separate ones. When a report lands on one of
    these, we close it as a duplicate of the report that first framed the issue,
    even though your report is valid and your endpoint may be new to us. We list
    them here so you can decide whether it is worth your time.
    
    - **Basecamp's The Admin Pro Pack in "move, archive, and delete" restriction, unenforced at
      additional endpoints.** The check is applied per endpoint rather than
      centrally, and some paths still miss it. We are fixing that as one piece of
      work. A report finding this at a further endpoint is closed as a duplicate.
      If you find a bypass that is materially different, in particular one that
      reaches content you could never see rather than moving or removing something
      already in front of you, that is a different finding and we want it.
    
    ## Note about reports with dumps of leaked credentials
    We have mechanisms in place to check for leaked passwords on login, and we won't be awarding any bounties for reports with dumps of leaked credentials obtained from [stealer logs](https://www.troyhunt.com/begging-for-bounties-and-more-info-stealer-logs/) or other kind of data breaches. We'll accept other kinds of credential leaks, such as accidental exposure of tokens, administrative passwords or secrets. 
    
    ## HEY
    ### In scope
    - HEY websites and native apps
    - Web: https://*.hey.com
    - Email: hey.com and custom domains hosted with HEY
    - Your own HEY accounts only
    
    ### Out of scope
    - `stats.hey.com`, `stats.world.hey.com` and `stats.hey.science`.
    - Bypasses of spy-pixel blocking where the resource is still loaded through our image proxy. Our tracker blocking is best-effort pattern matching over embedded images, and we don't treat it as a security boundary. The boundary is the proxy: it stands between the recipient and the sender, so the sender does not learn who opened a message, from where, or on what device. A sender learning only that a message was opened, and roughly when, is not a vulnerability we will reward. If you can make the recipient's browser reach your own server directly, that is in scope and we want to hear about it.
    
    ## Basecamp websites and native apps.
    ### In scope
    - Web: https://app.basecamp.com.
    - API: As described by https://github.com/basecamp/bc3-api and https://github.com/basecamp/api.
    - Authentication: https://launchpad.37signals.com.
    - Basecamp access controls provided by the [Admin Pro Pack](https://5.basecamp-help.com/article/1140-admin-pro-pack).
    - Your own Basecamp accounts only.
    
    ### Out of scope
    - Email spoofing, including SPF/DKIM/DMARC policies. Email spoofing is in scope for HEY.
    - Vulnerabilities that presume users on the same account are untrusted. For example, uploading malware, embedding phishing URLs in comments, RTLO based attacks in URLs, IDN homograph attacks, modifying projects and member lists, etc.
    - Accepting an invitation with an email address different from the one the invitation was sent to. 
    
    
    ## Fizzy websites and native apps
    **Note**: Fizzy is not eligible for bounties as it's a free app. 
    
    ### In scope
    - Web: https://app.fizzy.do
    - Your own Fizzy accounts only.
    
    ### Out of scope
    - Email spoofing, including SPF/DKIM/DMARC policies. Email spoofing is in scope for HEY.
    - Vulnerabilities that presume users on the same account are untrusted. For example, uploading malware, embedding phishing URLs in comments, RTLO-based attacks in URLs, IDN homograph attacks, etc. 
    - A board member able to read, edit and publish another member's draft cards. [This is intentional](https://github.com/basecamp/fizzy/pull/2197). 
    - Mass assignments of time-related fields (`created_at`, `last_active_at`) in cards. This is intentional for the JSON API to support imports and data preservation. 
    
    
    ## Open source
    
    ### In scope
    - Fizzy: our open-source Kanban app. Used by the Fizzy SaaS app.
    - ONCE Campfire: our open-source, self-hosted group chat system. 
    - ONCE Writebook: our open-source, self-hosted book publishing app.  
    - Trix: our rich-text editor. Used in HEY.  app.basecamp.com no longer uses Trix (as of 2026-09), so a Trix finding no longer reaches Basecamp through it.
    - Stimulus: our client-side JavaScript framework. Used in HEY and Basecamp.
    - Other first-party open-source projects under the Basecamp org on GitHub.
    
    In general, vulnerabilities in our open-source projects that don't translate into a vulnerability in our paid in-scope apps won't be eligible for a bounty. 
    
    ### Out of scope
    - Editable wiki pages in GitHub in open source projects
    - "Leak" of test and fixture data that appears to be personal identifiable information, but it's just test data
    
    ## Questions?
    This works because we work together.
    Contact us with any questions: security@37signals.com
    

### Current non-archived assets

Complete anonymous pagination: 20 assets across 1 pages, including ineligible assets. Archived assets are not represented.

    basecamp.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Basecamp 2

    app.basecamp.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Basecamp 5

    launchpad.37signals.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Launchpad

    basecamp-setup.exe
    Type: DOWNLOADABLE_EXECUTABLES
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Basecamp for Windows: https://basecamp.com/via#basecamp-for-your-mac-or-pc

    Basecamp.app
    Type: DOWNLOADABLE_EXECUTABLES
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Basecamp for Mac: https://basecamp.com/via#basecamp-for-your-mac-or-pc

    com.basecamp.bc3-ios
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Basecamp for iOS: https://basecamp.com/via#basecamp-for-ios-and-android-devices

    *.basecamphq.com
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Basecamp Classic

    com.basecamp.bc3
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Basecamp for Android: https://basecamp.com/via#basecamp-for-ios-and-android-devices

    *.hey.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.hey.app.ios
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: HEY for iOS: https://apps.apple.com/us/app/hey-email/id1506603805

    com.basecamp.hey
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: HEY for Android: https://play.google.com/store/apps/details?id=com.basecamp.hey

    HEY.app
    Type: DOWNLOADABLE_EXECUTABLES
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: HEY for macOS: https://hey.com/apps/

    HEY.exe
    Type: WINDOWS_APP_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: HEY for Windows: https://www.microsoft.com/en-us/p/hey-mail/9pf08ljw7gw2

    hey-mail
    Type: DOWNLOADABLE_EXECUTABLES
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: HEY for Linux: https://snapcraft.io/hey-mail/

    world.hey.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.highrisehq.com
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Highrise

    app.fizzy.do
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Full source code is available at https://github.com/basecamp/fizzy and https://github.com/basecamp/fizzy-saas

    https://github.com/basecamp/writebook
    Type: SOURCE_CODE
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: high
    Instructions: [Writebook](https://once.com/writebook) is an installable, self-hosted app to publish your own books on the web. 
    
    https://once.com/writebook

    https://github.com/basecamp/once-campfire
    Type: SOURCE_CODE
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: high
    Instructions: [Campfire](https://once.com/campfire) is an installable, self-hosted group chat system designed, built, and backed by 37signals.
    
    https://once.com/campfire

    https://github.com/basecamp/trix
    Type: SOURCE_CODE
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: [Trix](https://trix-editor.org/) is a rich text editor used in HEY. 
    
    Findings in Trix that are reproducible in HEY are eligible for bounties, but other issues that are mitigated in HEY and only reproducible in standalone Trix or in a different app setting are not eligible for bounty. 

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
