<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/zooplus) · [Scope](https://hackerone.com/zooplus/policy_scopes)

Publicly verified: 2026-10-06T23:26:53.633Z.

Public source digest: 2de6f13221a4d9149715996eb9e0c69e921884ca2e6e9f3d578b216b8b03b73d

### Program

    Zooplus
    Handle: zooplus
    Program state: public_mode
    Submission state: open
    Offers bounties: yes

### Policy

    #Zooplus 
    Since 1999, zooplus has been a pioneer in pet supplies e-commerce, serving millions of pet parents with an ever-growing range of nutritional and lifestyle products, proprietary premium food and accessory brands, alongside expert advice, convenient services, and loyalty programmes. Committed to the vision of ‘Celebrating Pet Love Every Day’ and driven by a passion for innovation, zooplus aims to set the industry standard for personalised, smart shopping. Based in Munich, zooplus operates local online shops across 30 European countries.
    
    Thank you for supporting our security mission with relentless proactivity with your reports
    'We enable trust amid a hostile digital landscape.'
    
    We look forward to working with the security community to find vulnerabilities in order to keep our businesses and customers safe!
    
    # Response Targets
    Zooplus will make a best effort to meet the following SLAs for hackers participating in our program:
    
    | Type of Response | SLA in business days |
    | ------------- | ------------- |
    | First Response | 2 days |
    | Time to Triage | 5 days |
    | Time to Bounty | 14 days |
    | Time to Resolution | depends on severity and complexity |
    
    We’ll try to keep you informed about our progress throughout the process.
    
    # Disclosure Policy
    * It is prohibited to discuss this program or any vulnerabilities (even resolved ones) outside of the program without explicit consent from the organization.
    * Follow HackerOne's [disclosure guidelines](https://www.hackerone.com/disclosure-guidelines).
    
    
    # Program Rules
    Please provide detailed reports with reproducible steps. If the report is not detailed enough to reproduce the issue, the issue will not be eligible for a reward.
    * Submit one vulnerability per report, unless you need to chain vulnerabilities to provide impact.
    * When duplicates occur, we only award the first report that was received (provided that it can be fully reproduced).
    * Multiple vulnerabilities caused by one underlying issue will be awarded one bounty.
    * Social engineering (e.g. phishing, vishing, smishing) is prohibited.
    * Make a good faith effort to avoid privacy violations, destruction or mass exfiltration of data, and interruption or degradation of our service. Only interact with accounts you own or with explicit permission of the account holder.
    * Zooplus is in the EU and some services are only made available in Europe through Geo IP. To avoid problems in your test, please use a VPN with an exit node in a country in the EU.
    
    # Test Plan
    * Load-intensive scans should be avoided.
    * When signing up for any Zooplus account, please use your [user]@wearehackerone.com address
    >* Please email bugbounty@zooplus.com to request an account if you do not have one and are unable to create one
    >* Make sure to include your HackerOne email address in the request
    >* We will try and get back to you within 5 business days
    
    # Out of scope vulnerabilities
    
    ### When reporting vulnerabilities, please consider (1) attack scenario / exploitability, and (2) security impact of the bug. The following issues are considered out of scope:
    
    * Attacks requiring MITM or physical access to a user's device.
    * Previously known vulnerable libraries without a working Proof of Concept.
    * Content spoofing and text injection issues without showing an attack vector/without being able to modify HTML/CSS
    * Missing best practices in Content Security Policy.
    * Missing email best practices (only Invalid, incomplete or missing DKIM/DMARC records)
    * Public Zero-day vulnerabilities that have had an official patch for less than 1 month will be awarded on a case by case basis.
    * Open redirect - unless an additional security impact can be demonstrated
    * Self-XSS are out of scope if could not be chained with another kind of attack that not require social engineering.
    * Social media account takeover" findings can be only rewarded once, as the we have tens of millions of pages needing checks. We'd appreciate it if all found links to accounts are provided in one ticket. 
    * Only accept users leaks that include Z+ Employees or 3rd party credentials, like logistics companies. Accounts from voting pools, Kanban boards and other kind of tools used by developers under their own reason are not part of that, unless internal Z+ information is leaked thru it. We also accept leaks from Z+ customers only if comes from leaks generated IN zooplus, or other of the domains in the program, site, of course the way that this leak was obtained must be included in the report. We do not accept leaks obtained with virus, trojans, browser leaks.... directly from the customers as is not a Z+ Leak. Of course we appreciate any report of that as a good faith from all the community and we always tried to be as gratefull as company policies allowed us.
    * We could not accept TLD reports that are not associated with our organization or not reserved by our business as security risk.
    
    ### The following vulnerability types are out of scope for the zooplus vulnerability disclosure program. Reports that fall into these categories will not be eligible for reward or further triage:
    
    **Business Logic Vulnerabilities & Voucher, Coupon, and Discount Misuse**
    Issues that arise from intended business processes, even if they can be abused in edge cases, are out of scope. This includes, but is not limited to:
    
    * Account creation flows
    * Manipulation or reuse of promotional codes, vouchers, or coupons
    * Obtaining discounts, free gifts, or benefits (such as “Flash Deals,” “Savings Plan,” or “Zoopoints”) through business logic quirks, unless this leads to a direct compromise of core security controls or customer data.
    * Exploiting regional or cross-shop promotions (e.g., using a French free shipping code for a Belgian address)
    
    **Loyalty and Points System Abuse**
    * Earning or spending “Zoopoints", newsletter bonuses, or referral points multiple times via timing, race conditions, or cross-shop actions.
    * Bypassing limits on loyalty programs.
    
    # Contact
    If you have any questions or run into blockers while testing, please email bugbounty@zooplus.com to get in touch with our team.
    
    Thank you for helping keep Zooplus and our users safe!
    

### Current non-archived assets

Complete anonymous pagination: 38 assets across 1 pages, including ineligible assets. Archived assets are not represented.

    zooplus.net
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Hello,
    As a lot of our domains share the same endpoints in the backend, we kindly ask you to also try to reproduce the error in www.zooplus.com
    If you are able to reproduce it, please submit it with the .com domain but also report in which country domain you originally found it.
    This will greatly improve the time to payment, help H1 Triage and us to determine the duplicates in findings.
    Thanks a lot for your time and expertise!

    www.zooplus.de
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Hello,
    As a lot of our domains share the same endpoints in the backend, we kindly ask you to also try to reproduce the error in www.zooplus.com
    If you are able to reproduce it, please submit it with the .com domain but also report in which country domain you originally found it.
    This will greatly improve the time to payment, help H1 Triage and us to determine the duplicates in findings.
    Thanks a lot for your time and expertise!

    www.zooplus.be
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.dk
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.fi
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.fr
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.gr
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.co.uk
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Hello,
    As a lot of our domains share the same endpoints in the backend, we kindly ask you to also try to reproduce the error in www.zooplus.com
    If you are able to reproduce it, please submit it with the .com domain but also report in which country domain you originally found it.
    This will greatly improve the time to payment, help H1 Triage and us to determine the duplicates in findings.
    Thanks a lot for your time and expertise!

    www.zooplus.ie
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.it
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.hr
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.nl
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.no
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.at
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.pl
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.pt
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.ro
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zoochic-eu.ru
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.se
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.ch
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zoohit.sk
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zoohit.si
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.es
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zoohit.cz
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.hu
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.zooplus.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: yes
    Maximum severity: critical
    Instructions: Hello,
    As a lot of our domains share the same endpoints in the backend, we kindly ask you to also try to reproduce the error in www.zooplus.com
    If you are able to reproduce it, please submit it with the .com domain but also report in which country domain you originally found it.
    This will greatly improve the time to payment, help H1 Triage and us to determine the duplicates in findings.
    Thanks a lot for your time and expertise!

    www.bitiba.de
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.matina-gmbh.de
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://www.zooplus.de/tierarzt
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://www.zooplus.es/veterinarios
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://www.zooplus.fr/veterinaire
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://www.zooplus.hu/allatorvos
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://www.zooplus.it/veterinari
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://www.zooplus.nl/dierenarts
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://www.zooplus.pl/weterynarz
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    https://www.zoohit.cz/veterinari
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    zooplus.io
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

    www.wolf-of-wilderness.com
    Type: URL
    Submission eligible: no
    Bounty eligible: no
    Maximum severity: none
    Instructions: Not specified in the public source.

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
