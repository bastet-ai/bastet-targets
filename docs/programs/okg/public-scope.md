<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/okg) · [Scope](https://hackerone.com/okg/policy_scopes)

Publicly verified: 2026-10-06T23:26:51.858Z.

Public source digest: 71dac939277e5bfeb4a2b42aa48d443abe427fd7f62ab53d9f59377eda9da3d2

### Program

    OKG
    Handle: okg
    Program state: public_mode
    Submission state: open
    Offers bounties: yes

### Policy

    About OKG:
    ==============
    OKG Technology Holdings Limited is a leading innovator in the blockchain sector, dedicated to the research, development, and commercial application of blockchain technology. Founded in 2013, the company has emerged as a global blockchain service provider with a presence in over 10 countries and regions. OKG's commitment to innovation is evidenced by its state-of-the-art products.
    
    Response Targets
    =================
    OKG will make a best effort to meet the following SLAs for hackers participating in our program.
    We’ll try to keep you informed about our progress throughout the process.
    
    Program Rules:
    ==============
    - Avoid using web application scanners for automatic vulnerability searching which generates massive traffic
    - Make every effort not to damage or restrict the availability of products, services, or infrastructure
    - Avoid compromising any personal data, interruption, or degradation of any service
    - Don’t access or modify other user data, localize all tests to your accounts
    - Perform testing only within the scope
    - Don’t exploit any DoS/DDoS vulnerabilities, social engineering attacks, or spam
    - Don’t spam forms or account creation flows using automated scanners
    - In case you find chain vulnerabilities we’ll pay only for vulnerabilities with the highest severity.
    - Don’t break any law and stay within the defined scope
    - Any details of found vulnerabilities must not be communicated to anyone who is not a HackerOne Team or an authorized employee of this Company without appropriate permission
    - Please limit your requests to 5 requests per second.
    - Please do not blast the support centre tickets with too many requests.
    
    Leaked & Exposed Credentials
    =================
    If you discover credentials that appear to belong to OKG or OKX systems, please report them through HackerOne immediately. Include the source where the credentials were found, what system they relate to, and a screenshot as evidence.
    
    You may authenticate once to confirm validity, then must immediately log out — without browsing, accessing data, or exercising any functionality. Anything beyond this is not covered by Safe Harbor.
    
    Severity is based on the level of access the credential grants. Reports are rewarded per unique source provided the credentials were not illegally purchased. OKG reserves the right to determine reward eligibility based on the value and novelty of the report. For full platform guidelines, refer to [Bounty Awards for Discovered Leaked Credentials](https://docs.hackerone.com/en/articles/8369826-detailed-platform-standards#h_83c05e1cc8).
    
    Disclosure Guidelines:
    =================
    As this is a private program, please do not discuss this program or any vulnerabilities (even resolved ones) outside of the program without express consent from the organization
    No vulnerability disclosure, including partial, is allowed for the moment.
    Please do not publish/discuss bugs.
    
    Eligibility and Coordinated Disclosure:
    =============================
    We are happy to thank everyone who submits valid reports, which help us improve security. However, only those who meet the following eligibility requirements may receive a monetary reward:
    - You must be the first vulnerability reporter.
    - The vulnerability must be a qualifying vulnerability
    - Any vulnerability found must be reported no later than 24 hours after discovery, and exclusively through hackerone.com
    - You must send a clear textual description of the report along with steps to reproduce the issue, including attachments such as screenshots or proof of concept code as necessary.
    - Provide detailed but to-the-point reproduction steps
    - Please submit a working video proof of concept (PoC) upon request. Failure to provide a complete video PoC after we have asked for it may result in a reduction of the reward for the report. Additionally, all reports must be clearly written and straightforward. We reserve the right to reject any submissions that are vague or not directly to the point.
    - You must not be a former or current employee of ours or one of its contractors.
    - Only use your HackerOne address (in case of violation, no bounty will be awarded)
    
    ------
      
    Vulnerability Classification
    =============================
    Note: The classifications below are not exhaustive. If a valid vulnerability does not appear in this list, OKG will assess its severity and bounty eligibility using CVSS v3.1 and internal business impact analysis. This ensures fair and transparent evaluation of novel, creative, or edge-case vulnerabilities that may not be explicitly documented here.
    
    ## Web2 Vulnerabilities
    Focus: Issues found on OKG web platforms (e.g., okx.com).
    
    ### Critical
    - Remote Code Execution (RCE): Executing arbitrary code on OKG servers
    - SQL Injection (Core DB): Large-scale data access/modification in OKG’s core production database
    - Admin Backend Takeover: Gaining critical admin privileges
    - Mass Account Takeover: Systemic takeover of a large portion of user accounts, typically affecting >50% of users
    - System Command Execution: Running OS commands on servers
    
    ### High
    - Stored XSS Worms: Self-replicating cross-site scripting on critical user-facing pages.
    - CSRF (Critical Actions): CSRF that leads to account compromise or unauthorised asset actions.
    - Account Access at Scale: Unauthorised access to multiple user accounts due to flaws in authentication or authorization logic.
    - SQL Injection (Limited): Extracting specific sensitive data
    - Source Code Leakage: Exposure of significant backend or internal source code
    - SSRF (Contextual Impact): SSRF that reaches internal services (SSRF severity is dependent on the impact of the internal access achieved.)
    
    ### Medium
    - Stored XSS (Interaction): Persistent cross-site scripting requiring user interaction to trigger.
    - CSRF (Core Business): CSRF targeting non-critical business actions.
    - Auth Bypass (Limited): Unauthorised access to backend or user data without financial impact.
    - Subdomain Takeover: Control of unused subdomains with reputational or phishing risk.
    - Verification Code Flaws: Weaknesses in login or password reset verification logic.
    - Sensitive Data Exposure: Disclosure of encrypted or internal user data through accessible interfaces.
    - Cleartext Credentials: Hardcoded credentials in source code or configuration files, excluding API keys.
    
    ### Low
    - Reflected XSS: Non-persistent cross-site scripting in URLs or parameters.
    - DOM/Flash XSS: Client-side cross-site scripting with no backend interaction.
    - Open Redirects: Redirecting users to external domains without validation.
    - General Info Leaks: Exposure of internal paths, directories, or debug interfaces.
    - Common CSRF: CSRF targeting non-sensitive user actions.
    - HTTP Header Manipulation: Modifying headers with low impact, such as cache behavior or redirects.
    
    ## Mobile Vulnerabilities
    Focus: Issues found in OKX official mobile apps.
    
    ### Critical
    - Remote Exploits: Remote compromise of app integrity or execution of code on OKG infrastructure.
    - Mass Data Breach: Unauthorised access to large volumes of user data through application flaws.
    - Admin Privilege Takeover: Gaining backend administrative access via mobile vectors.
    - System Command Execution: Executing operating system commands on application servers.
    - SQL/NoSQL Injection : Exploiting mobile API endpoints to manipulate backend database queries, leading to mass exfiltration/modification of sensitive data (PII, financial info, credentials) or backend system compromise.
    
    ### High
    - CSRF (Critical Actions): CSRF that leads to account compromise or unauthorised asset actions.
    - SSRF (Contextual Impact): SSRF accessing internal systems or services via mobile endpoints.
    - Sensitive Data Exposure: Leaking sensitive information stored or processed by the app.
    - Logic Flaws (Fund Impact): Exploiting application logic to manipulate balances or perform unauthorised transactions.
    - Source Code Leakage: Exposure of significant application source code.
    - Unauthorised Operations: Performing unauthorised transactions or financial operations through app exploits.
    
    ### Medium
    - Stored XSS (Interaction): Persistent cross-site scripting within mobile app components that requires user interaction.
    - CSRF (Core Business): Cross-site request forgery targeting non-critical business logic.
    - Auth Bypass (Limited): Unauthorised access to user data or configurations without financial impact.
    - Local Storage Leaks: Disclosure of sensitive app-stored data, such as session tokens or encrypted credentials.
    - Verification Flaws: Weaknesses in OTP, login, or reset mechanisms due to insufficient validation or rate limiting.
    - Cleartext Credentials: Hardcoded secrets in app files, excluding API keys.
    
    ### Low
    - Component Exposure: Unintended exposure of app components, such as exported Android activities or iOS services.
    - Open Redirects: Unvalidated redirects in app flows.
    - HTTP Header Issues: Minor header manipulation with negligible impact.
    
    ## Desktop Clients Vulnerabilities
    Focus: Issues found in OKX desktop clients - Windows / MacOS (downloaded from okx.com).
    
    ### Critical
    - Remote Code Execution (RCE): Execution of arbitrary code on the client or connected server via the desktop application.
    - Admin Privilege Takeover: Gaining backend administrative control through the client (e.g., server-side SSRF).
    - System Command Execution: Execution of operating system commands on the client or backend server via misconfigurations or unsafe input handling.
    
    ### High
    - CSRF (Account Takeover or Fund Transfers): Forged client requests that result in critical authenticated actions.
    - SSRF (Contextual Impact): Forged requests from the app to internal services.
    - Sensitive Data Exposure: Exposure of encrypted seeds or local sensitive data via app functionality.
    - Transaction Disruptions: Client-side bugs that prevent valid trading, deposits, or withdrawals.
    - Logic Flaws (Fund Impact): Exploiting client-side logic to manipulate account balances or transfer behaviors.
    
    ### Medium
    - CSRF (Core Business): Forging non-sensitive client actions, such as settings changes.
    - Auth Bypass (Limited): Gaining unauthorised access to user-level configurations or restricted client views.
    - Local Storage Leaks: Exposure of exploitable data stored by the client, such as session tokens or authentication secrets, without adequate protection or access control.
    - Cleartext Credentials: Hardcoded secrets (excluding API keys) embedded in client configurations or binaries.
    
    ### Low
    - Local DoS: Crashing the desktop app via malformed files or inputs.
    - Minor Misconfigurations: Exposure of temporary or local files with no sensitive data or direct exploitability.
    
    ## Web3 Vulnerabilities
    Focus: Issues affecting OKX Web3 Wallet, blockchain infrastructure, or funds.
    
    ### Critical
    - Remote exploits on validators/contracts or admin takeovers.
    - Execute code on production infrastructure
    - Steal funds or exfiltrate sensitive data at scale
    - Fully bypass authentication or authorisation protections
    - Affect a majority of users, systems, or business-critical functions
    
    ### High
    - Unauthorised access to sensitive user data or funds in limited scope
    - Takeover of accounts with specific user interaction
    - Smart contract exploits with financial impact requiring specific states
    
    ### Medium
    - Smart contract bugs that require manual triggering and do not result in loss of funds directly
    - Wallet address manipulation that alters front-end display but not the transaction outcome
    - Replay of previously signed messages that need complex setup
    - Incorrect use of chainID, nonce, or gas calculations that lead to inefficiencies
    - DApp permission misuse that prompts for overbroad approvals, but user must accept
    
    ### Low
    - RPC metadata disclosure without sensitive data or elevated access
    - Node instability causing UI refresh or sync delays, not affecting tx execution
    - Minor signature validation errors that cannot bypass permission
    - Smart contract function visibility issues (e.g., public vs external) that don’t affect logic
    - Typos or inaccurate dApp UI rendering not tied to transaction outcome
    
    ---
    
    ## Additional Guidelines
    - IDOR: Must demonstrate ID discovery path, not brute force only
    - Mobile: Report once per vulnerability across platforms (iOS/Android)
    - Wallet Extensions: Report once per vulnerability across platforms (Chrome/Edge/Safari)
    - Duplicates: Same issue in multiple assets = one report
    - False positives, low business impact, or non-exploitable bugs will not be rewarded but may be acknowledged
    - Compliance related reports will be assessed on a case by case basis
    - All reported vulnerabilities must be manually validated by the researcher in the specific context of our applications
    
    ---
    
    ## AI Usage & Disclosure  
    - Researchers must disclose any use of AI tools in vulnerability discovery, testing, or report writing.
    - AI tools may be used for drafting or tooling, but the vulnerability discovery, reproduction, and analysis must be independently validated by the researcher.
    - Reports that are clearly auto-generated, templated, or submitted without meaningful human verification (including unvalidated AI-generated reports) may be closed as Not Applicable or Spam, at OKG's discretion.
    
    ---
    
    ## Out of Scope
    - Reports from automated tools or scanners
    - False positive SQL Injection without a working PoC demonstrating DB/user name extraction
    - Spam vulnerabilities, mail spoofing, mail bomb, etc.
    - Self-XSS
    - Use of known-vulnerable libraries/components without a working PoC
    - Clickjacking on pages with no sensitive actions
    - Cross-Site Request Forgery (CSRF) on unauthenticated or low-impact forms
    - Attacks requiring MITM, root/jailbreak, or physical access to a user’s device
    - Previously known vulnerable libraries without a working PoC
    - CSV injection without demonstrating exploitation
    - Missing SSL/TLS best practices (e.g. weak ciphers, protocol versions)
    - Denial of Service (DoS) or service disruption attempts
    - Content spoofing or text injection without HTML/CSS modification or attack vector
    - Rate limiting or brute-force issues on non-authentication endpoints
    - Missing Content Security Policy best practices
    - Missing HttpOnly or Secure cookie flags
    - Missing or invalid SPF/DKIM/DMARC records
    - Vulnerabilities affecting only outdated/unpatched browsers (older than 2 stable versions)
    - Software version disclosure, banner info, stack traces, or verbose errors
    - Public 0-days with patches released less than 1 month ago (case-by-case)
    - Tabnabbing
    - Vulnerabilities requiring unlikely user interaction
    - Vulnerabilities already known to internal teams
    - Best practice recommendations (e.g. hardening suggestions)
    - WordPress-related vulnerabilities
    - DLL hijacking (all variants)
    - Rate-limit bypass by simply changing IP address or device ID
    - Address bar, URL, or domain spoofing within mobile in-app browsers (e.g., dApp or WebView-based browsers)
    - Sensitive data exposure on social media
    - Internal domain takeovers outside okx.com, okg.com, or oklink.com
    - Clients (desktop/mobile) not downloaded from official sources in scope
    - Proof of Reserves being reported as “sensitive document” leak
    - Reports based only on static analysis of binaries without PoC affecting business logic
    - Lack of obfuscation, binary protection, or jailbreak/root detection
    - Certificate pinning bypass on rooted/jailbroken devices
    - Missing exploit mitigations (e.g., PIE, ARC, Stack Canaries)
    - Sensitive data in URLs or request bodies when protected by TLS
    - Path disclosure in binaries
    - Hardcoded/recoverable app secrets in IPA/APK without business impact
    - Sensitive data stored in private app directory
    - App crashes from malformed URL schemes or exported components
    - Runtime exploits only possible in a rooted/jailbroken environment (e.g., via Frida)
    - Leaked shared links via clipboard
    - URI leaks caused by malicious apps with permissions
    - Exposure of API keys without demonstrated security impact (e.g., Google Maps API keys or keys found in our public GitHub repositories)
    - Third-party services (unless explicitly allowed)
    - Social engineering, spam, and physical attacks
    - Attacks requiring MITM or root/jailbreak access
    - Services not owned by OKG (e.g., cloud provider vulnerabilities)
    - Mobile/Desktop apps not downloaded from official channels
    - AI-generated vulnerability reports without human validation  
    - Reports that appear to be generated from automated tools or generic templates
    - Broken link hijacking for social media accounts
    
    # Discretionary “Extreme” Tier Bounties
    While our standard reward structure follows CVSS and business impact tiers (Low to Critical), OKG reserves the right to award **Extreme Tier bounties** at our sole discretion.
    Extreme Tier rewards are not tied to a fixed scoring scale. They reflect **extraordinary, edge-case vulnerabilities** with systemic or existential risk to OKG.
    
    **Criteria & Impact Examples**
    *   Rapid and unauthorised loss of funds > $1 million (Example: exploit drains wallets, bypasses fund protections)
    *   Zero-interaction compromise of multiple wallets, admin systems, or validators
    *   Massive KYC/PII data breach with direct regulatory or reputational impact (Example: exposure of sensitive customer data, financial information)
    *   Systemic risk to platform availability, public trust, or market stability (Example: mass user account takeover, automated abuse of authentication flows)
    
    **Reward Range**
    *   **$30,000 up to $1,000,000+**, depending on severity, exploitability, and impact.
    *   Evaluated case-by-case using OKG’s internal incident response process.
    
    **Additional Considerations**
    *   Researcher reward decisions also take into account **technical complexity**, **speed of reporting**, **integrity**, and **responsible disclosure practices**.
    
    # Business Risk Scoring Guide
    Note: To ensure fairness when evaluating vulnerabilities that do not directly affect funds, OKG uses a weighted business impact model that considers Fund Impact, Reputation Risk, and Compliance Risk. Business-risk multipliers adjust placement within the payout range of the assigned severity band; they do not move a report to another band.
    
    ### Web2
    
    | Context / Surface                                              | Multiplier |
    |---------------------------------------------------------------|------------|
    | Static unauthenticated pages (marketing, FAQ, terms)           | 1.0×   |
    | Login/register/reset flows with minor issues (open redirect)   | 1.1×  |
    | Authenticated user dashboard (no sensitive data)               | 1.2×       |
    | Authenticated page with PII, order history, personal data      | 1.3×       |
    | Session compromise (stealing cookies/JWTs)                     | 1.3×       |
    | Authenticated page handling account/fund actions (withdrawal, API, trading) | 1.4× |
    | Admin panel or internal tool with sensitive operations | 1.5× |
    
    ### Web3
    
    | Context / Surface                                                                  | Multiplier |
    |-----------------------------------------------------------------------------------|------------|
    | Wallet connect / signature request with no security impact                         | 1.0×       |
    | dApp UI with reflected input but no transaction risk                               | 1.1×       |
    | dApp (wallet-connected) leaking balances or transaction history                    | 1.2×       |
    | dApp allowing spoofed signature prompts / phishing-style UX                        | 1.3×       |
    | Smart contract dashboards (staking, governance, etc.) with sensitive UI actions    | 1.4×       |
    | XSS leading to wallet signature hijack / transaction injection                     | 1.5×       |
    
    ### Mobile
    
    | Context / Surface                                                           | Multiplier |
    |-----------------------------------------------------------------------------|------------|
    | UI issues, clipboard access without sensitive data                          | 1.0×       |
    | Exposure of non-sensitive info (OS version, device model)                   | 1.1×       |
    | Authenticated views with general account data                               | 1.2×       |
    | Sensitive data exposed via logging, screenshots, or memory                  | 1.3×       |
    | WebView issues affecting auth/transaction flow or phishing                  | 1.4×       |
    | Authenticated views with fund transfer, session token, or private key exposure | 1.5×    |
    
    ### Desktop
    
    | Context / Surface                                                        | Multiplier |
    | ------------------------------------------------------------------------ | ---------- |
    | UI bugs, crash reports, logs without sensitive data                      | 1.0×       |
    | Authenticated interface with exchange or trading functions               | 1.1×       |
    | Sensitive data exposed (session tokens, keys)                            | 1.2×       |
    | Full compromise via desktop client (token theft + bypassing protections) | 1.3×       |
    
    # Quality & Context Modifiers
    
    ### Additional Factors
    
    | Factor                | Range&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description                                                                 |
    |------------------------|----------------|-----------------------------------------------------------------------------|
    | Exploit Reliability    | 0.5–1.0×  | Is the issue consistently reproducible? Reports that are unstable or device-specific may receive lower payouts. |
    | User interaction       | 0.5–1.0×  | How many steps must a victim take? Exploits requiring multiple clicks, context switches, or unusual actions may reduce payout. |
    | Exposure / coverage    | 0.3–1.0× | Does the issue affect most users, or only a very narrow cohort or edge case? Broader impact tends toward higher payouts within the band. |
    | Mitigation proximity   | 0.5–1.0× | Do existing controls (rate limits, approvals, alerts) significantly limit the practical risk? If so, payouts may be lowered. |
    
    # Vulnerability Evaluation Process
    **Step 1: Triage** for validity, reproducibility, and scope
    **Step 2: CVSS Baseline** - Apply CVSS where applicable
    **Step 3: Business Risk Evaluation **
    **Step 4: Quality & Context Modifiers**
    **Final Reward Tier** = Technical Severity + Business Impact + Quality & Context Modifiers
    
    # Reward Bonuses
    High-quality reports (such as complicated attack chains with video PoC) may be awarded an extra bonus. A high-quality report is a thoroughly written vulnerability report that includes (when applicable) a working proof-of-concept, root cause analysis, a suggested fix, and any other relevant information.
    
    # Known issues
    Please note that the OKG Security Team also actively looks for vulnerabilities across all assets internally. For reported issues that are already known to us, we will close them as duplicates.
    We seek your kind cooperation to respect our final decision and to refrain from making multiple negotiations once the decision has been made.
    
    # Safe Harbor
    Any activities conducted in a manner consistent with this policy will be considered authorized conduct and we will not initiate legal action against you. If legal action is initiated by a third party against you in connection with activities conducted under this policy, we will take steps to make it known that your actions were conducted in compliance with this policy.
    
    Thank you for helping keep OKG and our users safe!

### Current non-archived assets

Complete anonymous pagination: 17 assets across 1 pages, including ineligible assets. Archived assets are not represented.

    OKX Wallet Chrome Extension
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge

    OKX Wallet Edge Add-ons
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://microsoftedge.microsoft.com/addons/detail/okx-wallet/pbpjkcldjiffchgbbndmhojiacbgflha

    OKX Wallet Safari Extension
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://apps.apple.com/us/app/okx-wallet/id6463797825

    *.oklink.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.okg.com
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://github.com/okx
    Type: SOURCE_CODE
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    Agentic Wallet
    Type: AI_MODEL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    okx.ai
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    Testnet faucet / Testnet funds / Testnet
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://web3.okx.com/onchainos
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    OKX Xlayer Faucet
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://github.com/okx/go-wallet-sdk
    Type: SOURCE_CODE
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    Mac OS Executable
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://www.okx.com/download

    Windows OS Executable
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://www.okx.com/download

    *.okx.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    OKX Android APK
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://play.google.com/store/apps/details?id=com.okinc.okex.gp

    OKX iOS APP
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: https://apps.apple.com/us/app/okx-buy-bitcoin-btc-crypto/id1327268470

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
