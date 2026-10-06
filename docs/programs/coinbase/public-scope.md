<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/coinbase) · [Scope](https://hackerone.com/coinbase/policy_scopes)

Publicly verified: 2026-10-06T23:26:49.147Z.

Public source digest: 337a93161ab30ce72e24c7929445d42e945baa4d0332664f2f29e0f3d1199511

### Program

    Coinbase
    Handle: coinbase
    Program state: public_mode
    Submission state: open
    Offers bounties: yes

### Policy

    Coinbase's Bug Bounty Program exists to protect our two highest-priority assets: **customer funds** and **customer information**. We reward researchers who responsibly disclose software vulnerabilities that could put either at risk.
    
    To be eligible for an award, a report must present a clear list of steps that when executed demonstrate the impact of a vulnerability that harms Coinbase or its customers. Coinbase determines eligibility and reward amounts at its sole discretion.
    
    ## Scope
    
    The scope of this program is Web2 products, assets and infrastructure owned by Coinbase. Please see the Scope page for more details. If you have a Web3 finding pertaining to Coinbase, please submit through our program on [Cantina](https://cantina.xyz/bounties/55316f42-3c5e-4746-9bd0-0f18dcbc344b).
    
    ## Out of scope
    
    * Social engineering  
    * Username enumeration  
    * Rate Limiting (non-critical issues)  
    * Physical security  
    * Non-security-impacting UX issues  
    * Deprecated open source libraries  
    * Vulnerabilities in third-party applications that integrate with Coinbase  
    * Ability to abuse existing banking functionality such as ACH or credit card chargebacks  
    * Publicly available leaked credentials that have since been rotated  
    * Demo apps, testnet, staging environments, etc.
    
    ## Severity & Rewards
    
    ---
    **Extreme** — Up to **$1,000,000**
    -  Unauthorized access to Coinbase-owned hot/cold wallet assets, funds, or private keys.
    ---
    **Critical** — Up to **$15,000**
    - Market-moving API/service abuse.
    - RCE on staking infrastructure.
    - Easily-exploitable, high-severity bugs in protocols accessible from the public API (e.g., signing, DKG, TDH2 in the cb-mpc open-source library) that could lead to key compromise or RCE. Exploitation requires no material precondition beyond normal protocol operation, and broadly affects typical deployments.
    - Large-scale money laundering.
    - MNPI exposure, sustained business disruption, or significant monetary loss.
    ---
    **High** — Up to **$6,000**
    - PII exposure affecting a meaningful share of users.
    - Fee-structure bypass at scale.
    - KYC bypass.
    - Single-product 2FA bypass.
    - High-severity bugs in protocols accessible from the public API (e.g., signing, DKG, TDH2 in the cb-mpc open-source library) that could lead to key compromise or RCE, but require additional—yet realistic—conditions, access, or effort to exploit. Exploitation must remain feasible in a realistic deployment and must not depend on unlikely conditions.
    ---
    **Low / Medium** — Out of Scope — **$0**
    
    ---
    ##
    
    Severity is scored on **impact** (confidentiality, integrity, availability, fund and/or data exposure) and **exploitability** (access required, prerequisites, likelihood).
    
    **Note for the cb-mpc open-source library**: the extreme category is out of scope, and hard to exploit bugs are considered medium, and therefore also out of scope.
    
    # Program Policies
    
    ## Safe Harbor
    
    * Coinbase adheres to and supports the HackerOne Gold Standard Safe Harbor terms. 
    
    
    ## Eligibility
    
    * Not be a resident of any country under U.S. sanctions or any country that does not allow participation  
    * Be at least 14 years old with legal capacity to agree to these terms  
    * Have permission from your employer to participate  
    * Not be (for the previous 12 months) a Coinbase employee, immediate family member, contractor, or service provider
    
    ## Researcher Requirements
    
    * Submit all valid, Coinbase-related bug reports through our programs on HackerOne (for Web2), and Cantina (for Web3).  
    * Provide Coinbase a reasonable amount of time to fix a vulnerability prior to sharing details with any other party.  
    * Adhere to HackerOne Disclosure Process.  
    * Make a good faith effort to preserve the confidentiality and integrity of Coinbase customer data.  
    * Do not defraud or attempt to defraud or socially engineer Coinbase customers or Coinbase itself.  
    * Do not profit from vulnerabilities outside of Bug Bounty Program payouts.  
    * Report vulnerabilities with no conditions, demands, or ransom threats.
    
    Violation of any of our policy may result in the immediate ban from further participation in the Coinbase Bug Bounty Program. Researchers who engage in extortion attempts will be reported to law enforcement.
    
    ## Fine print
    
    Coinbase may modify or cancel this program at any time. Anonymous HackerOne reports are accepted but not reward-eligible. This is v5.0 of the program; see also [HackerOne's Finder Terms and Conditions](https://hackerone.com).**

### Current non-archived assets

Complete anonymous pagination: 19 assets across 1 pages, including ineligible assets. Archived assets are not represented.

    https://github.com/coinbase/cb-mpc
    Type: SOURCE_CODE
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.coinbase-corp.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.vilcsak.bitcoin2
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Coinbase's retail mobile app on iOS.

    https://github.com/coinbase/cb-mpc-go
    Type: SOURCE_CODE
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: While we appreciate submissions regarding this repo, this repo is not eligible for bounties.

    https://github.com/coinbase/*
    Type: SOURCE_CODE
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://github.com/base/*
    Type: SOURCE_CODE
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    status.*.coinbase.com
    Type: WILDCARD
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    *.base.app
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.coinbase.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Coinbase's main domain.

    *.cbhq.net
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    com.coinbase.android
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Coinbase's retail mobile app on Android.

    54.175.255.192/27
    Type: CIDR
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    Other
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: medium
    Instructions: Applications that may have been missed as a part of our standard scope; this will be assessed on a by submission basis. 

    org.toshi
    Type: GOOGLE_PLAY_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Base Android app

    org.toshi.distribution
    Type: APPLE_STORE_APP_ID
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Base iOS app

    status.coinbase.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

    N/A - Not Coinbase owned or operated
    Type: OTHER
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: This asset labelling is used to signal to a reporter that the asset in question is not owned or operated by Coinbase in any capacity.

    *.base.org
    Type: OTHER
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Not specified in the public source.

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
