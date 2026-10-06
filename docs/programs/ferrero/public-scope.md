<!-- bastet-public-scope-document:v1 -->
<!-- bastet-public-scope:begin -->
## Verified public HackerOne scope

This generated reference contains only an anonymously retrieved public policy and current non-archived scope. It is not authorization to test and does not disclose campaign findings, agent conversations or private reports.

Canonical rules: [HackerOne program](https://hackerone.com/ferrero) · [Scope](https://hackerone.com/ferrero/policy_scopes)

Publicly verified: 2026-10-06T23:26:50.215Z.

Public source digest: ea5c8446e21d8363e8613c1d9e2886135a2f5c29fe3a84ef0d56c7638704c9c2

### Program

    Ferrero
    Handle: ferrero
    Program state: public_mode
    Submission state: open
    Offers bounties: no

### Policy

    ## Scope Exclusions
    - All domains or subdomains not explicitly listed in the Scope of the program
    
    ## Overview
    Ferrero International S.A. is an Italian multinational manufacturer of branded chocolate and confectionery products, and the second biggest chocolate producer and confectionery company in the world. It was founded in 1946 in Alba, Piedmont, Italy, by Pietro Ferrero, a confectioner and small-time pastry maker who laid the groundwork for Nutella and added hazelnut to save money on chocolate, taking the idea from gianduia, a sweet chocolate spread containing about 30% hazelnut paste, invented in Turin during Napoleon's regency (1796–1814).
    The Ferrero Group has a strong global presence and Ferrero products are present and sold, directly or through authorised retailers, in more than 170 countries belonging to the entire international community.
    
    We believe that no technology is perfect and that working with skilled security researchers is crucial in identifying weaknesses in our technology.
    
    The **Purpose of the Vulnerability Disclosure Policy (VDP) is to give security researchers clear guidelines for conducting vulnerability research, discovery, and reporting on Ferrero's systems.**
    Ferrero looks forward to working with the security community to find vulnerabilities in order to keep our businesses and customers safe.
    
    # Program Rules
    ## Recognition
    Once a report is resolved and closed, the researcher will receive a +7 count on their public profile under “Thanks Received” and be listed on Ferrero’s HackerOne webpage under “Hackers Thanked.”
    
    Ferrero will determine, in its sole discretion, whether recognition will be provided, and Ferrero will only recognize the first researcher to have discovered a specific, and previously unreported, vulnerability. Ferrero reserves the right to withhold recognition for researchers who have violated this policy in the past.
    
    The report submitted will be reviewed by a team of security experts.
    We are happy to thank everyone who submits valid reports which help us improve our security posture.
    
    ## Rules Of Engagement
    While researching for Cyber Security related issues the following rules of engagement must be followed:
    - DO NOT alter compromised accounts by creating, deleting or modifying any data
    - DO NOT use compromised accounts to search for post-auth vulnerabilities
    - DO NOT include Personally Identifiable Information (PII) in your report and please REDACT/OBFUSCATE the PII that is part of your PoC (screenshot, server response, JSON file, etc.) as much as possible.
    - In case of exposed credentials or secrets, limit yourself to verifying the credentials validity
    - In case of sensitive information leak, DO NOT extract/copy every document or data that is exposed and limit yourself to describe and list what is exposed.
    - You must avoid tests that could cause degradation or interruption of our service (refrain from using automated tools, and limit yourself about requests per second).
    - You must not leak, manipulate, or destroy any user data.
    - Avoid further _unnecessary_ exploitation when you've found a critical vulnerability, stop to what is strictly required to produce a functional PoC, for instance:
        - For RCE PoC, it would be sufficient to perform whoami ; uname commands, no need to compromise the entire OS.
        - For SQLi, it would be sufficient to print the DB banner or show the DB name, username, table names, but no need to dump the entire DB.
    - Other techniques and procedures for lateral movement, post-exploitation or establishing persistence through back-doors are completely forbidden.
    - Customer or employee account compromise through bruteforce, dictionary or password guessing attacks are forbidden. However, default system/aplication passwords can be reported if present.
    - Phishing, spear phishing or any type of social engineering tests, against either employees or customers are prohibited.
    - You must not be a former or current employee of Ferrero or one of its contractor.
    - You must not have compromised the privacy of our users
    - Only interact with test accounts you own
    
    ## Unqualifying Issues
    ### The following issues are outside the scope of our vulnerability disclosure program:
    
    - Stolen secrets, credentials or information gathered from a third-party asset that we have no control over
    - Tabnabbing
    - Missing cookie flags, security-related HTTP headers and Expired certificate or best practices and other related issues for TLS/SSL certificates which do not lead directly to a vulnerability
    - Session expiration policies (no automatic logout, invalidation after a certain time or after a password change)
    - Disclosure of information without direct security impact (e.g. stack traces, secrets, credentials, path disclosure, software versions, IP disclosure, 3rd party secrets)
    - Content/Text/HTML/CSV injections and Mixed Content warnings
    - Clickjacking/UI redressing
    - Denial of Service (DoS) attacks
    - Known CVEs without working PoC and outdated libraries without a demonstrated security impact
    - Reports from automated web vulnerability scanners that have not been manually validated
    - Invalid or missing SPF (Sender Policy Framework) records (Incomplete or missing SPF/DKIM/DMARC)
    - Open ports without real security impact
    - Physical or Social engineering of staff or contractors and/or any issues that require physical access to a victim’s computer/device
    - Presence of autocomplete attribute on web forms
    - Vulnerabilities affecting outdated browsers or platforms
    - Any hypothetical flaw or best practices without exploitable PoC
    - Unexploitable vulnerabilities (ex: Self XSS, Blind SSRF without direct impact (e.g. DNS pingback), XSS or Open Redirect in HTTP Host Header)
    - Reports with attack scenarios requiring MITM or physical access to victim's device
    - Unauthenticated / Logout / Login and other low-severity Cross-Site Request Forgery (CSRF)
    - Subdomain takeover without a full working PoC
    - Lack of rate-limiting, brute-forcing or captcha issues and password requirements policies (length / complexity / reuse)
    - Ability to spam users (email / SMS / direct messages flooding)
    
    ## Testing Instructions
    ### Hacker Account Creation
    We require to **use your HackerOne email alias** `[username]@wearehackerone.com` **to create your test accounts** on the in-scope assets.
    
    ### User agent
    **Please append to your user-agent header the following value**:
    **`-VDP-ferrero-international-s.a-[H1 username]`**
    
    
    # Disclosure Policy
    You must not discuss any vulnerabilities (even resolved ones) outside of the program without express and explicit consent from the organization.
    
    
    # Legal Notice:
    
    If we conclude, in our sole discretion, that you have complied with the requirements above when reporting a security vulnerability, Ferrero will not pursue claims against you or initiate a law enforcement investigation in response to your report:
    
    - You do not cause harm to Ferrero or our customers;
    - You make a good faith effort to avoid compromising the privacy of our customers or employees, or disrupting the operation of our products, services or IT infrastructure;
    - You do not violate any law;
    - Once you have confirmed a vulnerability, you report it in a timely manner and do not exploit it further;
    - To the extent that you have accessed non-public Ferrero information in the course of your research, you do not maintain copies of any such information or share any such information with any third party;
    - You do not publicly disclose or share the vulnerability details without the written permission of Ferrero. Violation of these requirements may result in permanent disqualification from the program.
    
    Any activity determined to involve the intentional compromise of the privacy of our customers or employees or the intentional disruption of the operation of our products, services or IT infrastructure will result in permanent disqualification from the program.
    
    We may collect information that could reasonably be used to identify you (e.g., IP address). Ferrero uses this information to evaluate a reported vulnerability and protect Ferrero products, services or information technology infrastructure.

### Current non-archived assets

Complete anonymous pagination: 345 assets across 4 pages, including ineligible assets. Archived assets are not represented.

    *.estathe.it
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.eatnatural.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.fulfilnutrition.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.moncheri.it
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.babyruth.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.butterfinger.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.crunchbar.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.duplo.de
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.famousamos.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.fanniemay.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.ferrero-kuesschen.de
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.fiestaferrero.it
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.giotto.de
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.hanuta.de
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.keebler.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.littlebrowniebakers.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.motherscookies.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.murraysugarfree.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.pocketcoffee.it
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.thorntons.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.yogurette.de
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.kinder.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.nutella.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.tictac.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.ferrerorocher.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.raffaello.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrero.somese.lv/lv/edit/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrero.somese.lv/lv/lv/xp/pavasaris
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinder.somese.lv/lv/edit/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinder.somese.lv/lv/lv/xp/kidsday2024/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinder.somese.lv/lv/lv/xp/kinder-surprise-2024/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinder.somese.lv/lv/lv/xp/kindertime2024/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://multi.somese.lv/raffaello/2024/lv/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutella.somese.lv/bc/lv/edit/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutella.somese.lv/bc/lv/xp/60years
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorocher-aygt.ogilvy.it/ca/en/xp/add-your-golden-touch/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorocher-aygt.ogilvy.it/de/de/xp/vergolde-dein-weihnachten/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorocher-aygt.ogilvy.it/jp/ja/xp/add-your-golden-touch/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorocher-aygt.ogilvy.it/za/en/xp/add-your-golden-touch
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    backtoschool2024.ferreropromo.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    caraffa2024.ferreropromo.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    figurine2024.ferreropromo.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    quellidellacolazioneinmissione.ferreropromo.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    tazzinenutella2024.ferreropromo.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    testpromoplatform2024.ferreropromo.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://gewinnspiel.mein-ferrero.de/loyalty-gewinnspiel/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    stage-gelati-ibba2025.pproitalia.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.ferreropromo.it
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    *.ferrero.com
    Type: WILDCARD
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://leto-zavtrak.ru/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://zavtrak-s-nutella.mnbvcx.ru
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://tictacsummer.com/us/en/xp/summer/chewy/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.spookiezoocash.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://staging-spookiesweepstakes.snipp.us/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    keeblerspookiesweeps.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://promo.nutella.ro/ro/ro/xp/nutella-loves-bread/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorocherpromo.ro/ro/ro/xp/cadoul-mai-presus-de-cuvinte/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.ferrero-rocher.co.il
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorocherpromo.ro/ro/ro/xp/clipa-de-aur/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://www.kindercreamypromo.com/in/en/xp/freegiftwitheverypack
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    netto-rubbellos.de
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.quality.prod.nutella.com/de/de/xp/nutella-fruehstuecksbrettchen
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-ferrero-globus-gewinnspiel-de-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-aldi-sommerfreude-de-2025.ipaasferrero.com/?appkey=aldinordapp
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.aldi-sommerfreude.de
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://www.eatnatural.com/de/de/xp/gratistesten/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    quality-gratistesten-2025-de-2025.ipaasferrero.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://duplo-chocnut.de/gratistesten
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    quality-chocnut-gratistesten-2025.ipaasferrero.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://spookiefts.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    spookiefts.ferrero.stage.ampagency.digital
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-netto-rubbellos-2025-de-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-ferrero-genussmomente-de-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.ferrero-genussmomente.de
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-strangerthings-de-2025.ipaasferrero.com/de/de/xp/strangerthings
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://www.kinderschokobons.de/strangerthings
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.quellidellacolazione.it/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kids.kinder.ro/ro/ro/xp/lets-story/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinder.whitecat.ro/ro/ro/xp/country-break/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://tazzinenutella2025.quellidellacolazione.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://backtoschool25.ru
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://beta.tictac.4ourclient.com/pl/pl/xp/znajdzswojsmak2025
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://beta.tictac.4ourclient.com/admin_p3bav5a1b
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://tictacznajdzswojsmak.com/pl/pl/xp/znajdzswojsmak2025
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    quality-pingui-gratistesten-de-2025.ipaasferrero.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://kinder.com/de/de/xp/magische-bescherung
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-kjoy-strangerthings-de-2025.ipaasferrero.com/de/de/xp/kjoy-strangerthings/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://www.k-joy.de/strangerthings
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://www.kinderjoyindiapromo.com/in/en/xp/triptoaustralia
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    quality-fulfil-promo-de-2025.ipaasferrero.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    fulfil-promo.de
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-eatnatural-promo-2025-de-2025.ipaasferrero.com/de/de/xp/eatnatural-promo
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.eatnatural-promo.de
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinderjoy.tlccloud.net/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrero-pralinen-gewinnspiel.de/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://baltic.ferrerorocher.com/lv/lv/xp/gold
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    quality-ferrero-blackweeks-de-2025.ipaasferrero.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://findyourmatch25.strategie.agency/be/fr/xp/findyourmatch/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.tictac.com/be/fr/xp/findyourmatch/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-aygt-master-2025.ferrerorocherpromo.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    ge63-ferreropp.web.oxv.fr
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.delacre.com/fr/fr/xp/jeu-concours
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    quality-kinderueberraschung-tierische-designs-de-2025.ipaasferrero.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/de/de/xp/kleine-geste
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-our-toys-com-2025.ipaasferrero.com/int/en/xp/kinder-digital-catalogue/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality.prod.kinder.com/it/it/xp/kindermomentinsieme2025/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://5cc1659edaa8.hosting.myjino.ru/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutella.ru/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://fandom.kinder.com/strangerthings
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://accendilefesteestatheedamici.estathe.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://admin.loteria.ferrerorocher.pl
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://baltic.ferrerorocher.com/lv/lv/xp/aygt25
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://baltic.kinder.com/regs/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://beta.nutellaxmas.4ourclient.com/pl/pl/xp/dzielsiemiloscianaswieta2025/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-aygt-fr-2025.ferrerorocherpromo.com/fr/fr/xp/ajoutez-votre-touche-de-magie
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-aygt-it-2025.ferrerorocherpromo.com/it/it/xp/natale2025/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-aygt-master-2025.ferrerorocherpromo.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-aygt-mx-2025.ferrerorocherpromo.com/mx/es/xp/que-tus-momentos-brillen/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-kinderviaggiesercenti2025-ferreroprofessional-it-2025.ipaasferrero.com/user/login
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrero-egypt.vercel.app/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrero-egypt.vercel.app/secure-ops-98423
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrero-hom.comuniclick.com.br/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrero-hom.comuniclick.com.br/_/admin/login
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrero-palette-2025-netlify-app.ferrero.fr/status/_id/uid
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorochergoldentouch.com/us/en/xp/add-your-golden-touch/berlin-beta/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorocherpromo.ro/ro/ro/xp/lumineaza-clipele-speciale-inscriere/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorocher.ro/ro/ro/xp/lumineaza-clipele-speciale-inscriere/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://fulfilborsoni.ferreropromo.it/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://gewinnspiel.mein-ferrero.de/rocher-winterhighlights
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://goldenexperience.ferrero-campaigns.com/bg/bg/xp/goldenexperience/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinderletsstory.uglobal.com.cn/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinderviaggi2025esercenti.ferreroprofessional.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutella.com/ro/ro/xp/craciunul-cu-nutella
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutellaholidays.com/us/en/xp/holidays/berlin-beta/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://promo.nutella.ro/ro/ro/xp/craciunul-cu-nutella
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://promo.nutella.ro/ro/ro/xp/dimineata-incepe-cu-nutella/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-doppelte-freude-rewe-de-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-edeka-herzenswuensche-de-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-kreativ-mit-ferrero-de-2024.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-milch-schnitte-soft-wie-eine-umarmung-de-2025.ipaasferrero.com/de/de/xp/milch-schnitte-soft-wie-eine-umarmung
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-momente-2025-de-2025.ipaasferrero.com/xp/momente
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-moncheri-de-2025-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-playmobil-de-2025.ipaasferrero.com/de/de/xp/playmobil/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality.prod.nutella.com/it/it/xp/nutellatagliere2025
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-sampling-gewinnspiel-de-2025.ipaasferrero.com/xp/sampling-gewinnspiel
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://recipe-assistant.nutella.com/us/en/xp/recipe-assistant/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://scanandwinpromo.theofferclub.in/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://scanandwinpromo.theofferclub.in/administrator/auth
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://scanandwinpromo.tictac.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://srv-plesk16.ps.kz:8443/smb/file-manager/list?subscriptionid=870
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://staging.bo.promo.dev/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://test.promo.dev/68822c932c72eeee76053246
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://test.raffaellomango.kz/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://tictac-israel.co.il/winter/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://webar.blippar.com/recipe-assistant/us/en/xp/recipe-assistant/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-aygt-fr-2025.ferrerorocherpromo.com/fr/fr/xp/ajoutez-votre-touche-de-magie
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-aygt-it-2025.ferrerorocherpromo.com/it/it/xp/natale2025/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-aygt-mx-2025.ferrerorocherpromo.com/mx/es/xp/que-tus-momentos-brillen/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.delacre.com/int/en/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.diebesten.de/xp/momente
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-estathenatale-it-2025.ipaasferrero.com/admin
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrero-kuesschen.de/sampling-gewinnspiel
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrero-kuesschen.de/xp/friendsgiving
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrero-kuesschen.de/xp/sampling-gewinnspiel
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocher.com/bg/bg/xp/goldenexperience/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocher.com/bg/bg/xp/goldenexperience/admin/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocher.com/fr/fr/xp/ajoutez-votre-touche-de-magie/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocher.com/hr/hr/xp/rocherzlatnisjaj/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocher.com/it/it/xp/natale2025/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocher.com/mx/es/xp/que-tus-momentos-brillen/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocher.com/uk/en/getwrappedup
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocher.com/us/en/xp/add-your-golden-touch/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-fulfilborsoni-be-ferreropromo-it-2025.ipaasferrero.com/admin
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/de/de/xp/hz/kinder-ueberraschung
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/de/de/xp/hz/kinder-ueberraschung-2
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/de/de/xp/milch-schnitte-soft-wie-eine-umarmung
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/de/de/xp/playmobil/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/hk/zh/xp/kinderbuenokpopexperience/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/it/it/xp/terzoannokindersorpresa2025
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/me/en/xp/kinderbuenogoodmoments/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/my/en/xp/kinderbuenokpopexperience/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kreativ-mit-ferrero.de/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.loteria2025.ferrero.test.pov.net.pl
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.moncheri.de
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-nataleconnutella2025-be-it-2025.ipaasferrero.com/admin
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/fr/fr/xp/nutella_noel_2025
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/it/it/xp/nataleconnutella2025/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/pl/pl/xp/dzielsiemiloscianaswieta2025/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/sg/en/xp/nutellasgs/#home
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/uk/en/xp/nutella-christmas/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/us/en/xp/holidays/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.promonutella.es/es/es/xp/jerseis-navidad
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-terzoannokindersorpresa2025-be-it-2025.ipaasferrero.com/admin
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-xmas2025-com-2025.ipaasferrero.com/uk/en/xp/nutella-christmas/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://xmas2025.nutella.ferrero.ho-italia.it/uk/en/xp/christmas/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutella.ferrerobulgariapromo.com/bg/bg/xp/xmas/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/bg/bg/xp/xmas/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutella.ferrerobulgariapromo.com/bg/bg/xp/xmas/admin
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocher.com/bg/bg/xp/addgoldentouch/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://preprod.nutella.ai/admin/#/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-nutella-academy-fr-2025.ferreropromo.com/fr/fr/xp/academy-event
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/fr/fr/xp/nutella-academy-event-noel
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-nutella-academy-fr-2025.ferreropromo.com/fr/fr/xp/academy-event
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.t.blask.ferrerorocher.pl
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.blask.ferrerorocher.pl/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://admin.t.blask.ferrerorocher.pl
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/kz/ru/xp/kseasonalpromo/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/kz/kk/xp/kseasonalpromo/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://testpralinecrm.ferrero.com.cn/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinderbuenogamedaysweeps.com/us/en/xp/game-day-sweeps/berlin-beta/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/us/en/xp/game-day-sweeps/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrero-aygt.vercel.app/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.jarpecarpromo-qa.tictac.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://jarpecarpromo.tictac.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://jarpecarpromo.theofferclub.in/administrator/auth
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ferrerorochergoldengift.com/roadshow/login.html
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-nutella-minis-de-2025.ipaasferrero.com/de/de/xp/nutella-minis/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/de/de/xp/nutella-minis
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-ferrero-snacknstyle-de-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/pl/pl/xp/kinderkarnawal
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://kinderkarnawal.pl/admin_bn5cz9k4/login
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-kinderriegel-love-de-2025.ipaasferrero.com/de/de/xp/kinderriegel-love/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-kinderriegel-love-de-2025.ipaasferrero.com/de/de/xp/kinderriegel-love/admin/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://jd2025admindemo.ferrero.com.cn/default/login.html
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-nutella-frozen-at-2026.ferreropromo.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutellapromo.es/es/es/xp/nutella-pan
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutellapromo.es/es/es/xp/nutella-pan/dashboard
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.pysznastronazimy.pl
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-ferrero-superkuesschen-de-2025.ipaasferrero.com/xp/superkuesschen
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrero-kuesschen.de/superkuesschen
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-ferrero-pralinen-de-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorochersg.com/lunar_new_year
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorochersg.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-chocofresh-gratistesten-de-2025.ipaasferrero.com/de/de/xp/kinder-chocofresh-gratistesten/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://giotto.couponinghouse.de/xp/potluck/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.giotto.de/potluck
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://raffaello.com/ro/ro/xp/mai-presus-de-cuvinte/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-personalised-nutella-jar-int-2025.ipaasferrero.com/uk/en/xp/personalised-nutella-jar/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/uk/en/personalised-nutella-jar
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-personalised-nutella-jar-int-2025.ipaasferrero.com/uk/en/xp/personalised-nutella-jar/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocherph.com/valentine
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrerorocherph.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-dinos-de-2025.ipaasferrero.com/de/de/xp/dinos/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://raffaello.bg/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://aldomain1.raffaello.hu/hu/hu/xp/dobozbazartszeretet/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-party-de-2025.ipaasferrero.com/de/de/xp/party/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/de/de/xp/party/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://raffaello.lv/loterija_tmp/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-kjeldsens-com-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-kjeldsens-com-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://baltic.nutella.com/bc/lv/xp/loterija/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/bc/lv/xp/loterija/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://baltic.nutella.com/bc/lv/edit/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-ferrero-knusperliebe-de-2025.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutellasuperfan.com/us/en/xp/world-nutella-day/berlin-beta/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/us/en/xp/world-nutella-day/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutellastacksforgivingback.com/us/en/xp/stacksforgivingback/berlin-beta/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/us/en/xp/stacksforgivingback/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/it/it/xp/nutellamusica2026
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/de/de/xp/osterpause
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/it/it/xp/fornifebbraio2026
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://tictac-israel.co.il/il/he/xp/mystery-flavor/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://baltic.kinder.com/lv/lv/xp/karnevals/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/lv/lv/xp/karnevals/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://development.winwiththorntons.co.uk/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.winwiththorntons.co.uk
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-pasqua2026.pocketcoffee.it/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://pasqua2026.pocketcoffee.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-pasqua2026-be-pocketcoffee-it-2025.ipaasferrero.com/admin/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutellapancake2026.nutella.com/pl/pl/xp/pancake/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://live.nutella.com/pl/pl/xp/nutelladodajeusmiechu2026/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/pl/pl/xp/nutelladodajeusmiechu2026/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutellapancake2026.nutella.com/admin_na8qnm4hfa/login
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/in/en/xp/ksbccheertowin/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-quellidellacolazione-be-it-2025.ipaasferrero.com/admin/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://kinderchocolateoffer.com/us/en/xp/kinder-chocolate-offer/berlin-beta/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/us/en/xp/kinder-chocolate-offer/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.t.podarujraffaello.pl/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://promo.nutella.ro/ro/ro/xp/dimineata-mai-buna/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://promocionesraffaello.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://test-jours-a-croquer.ferrero.fr/status/_id/uid
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://prod.tennistrophy.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.tennistrophy.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms.tennistrophy.it/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.podarujraffaello.pl/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/pl/pl/xp/ciastkanutellaikinder
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://world-cup-asp.ferrero.stage.ampagency.digital/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://preprod.clubferreropro.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.clubferreropro.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/de/de/xp/minecraft
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-ferrero-feinschlecker-de-2026.ipaasferrero.com/xp/feinschlecker
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.tictac.com/ph/en/xp/promotion/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://estathe.it/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/nl/nl/xp/goodmorning26/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-goodmorning26-nl-2026.ipaasferrero.com/nl/nl/xp/goodmorning26/user/login
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://prod.tennistrophy.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.tennistrophy.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms.tennistrophy.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/lv/lv/xp/loterija/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.ferrero-eis.de/xp/feinschlecker
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://www.ferrero-cashback.de
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www-snackestate2026-ferreropromo-be-it-2026.ipaasferrero.com/admin
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-goodmorning26-nl-2026.ipaasferrero.com/nl/nl/xp/goodmorning26/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://test.odswiezlatomuzyka.com/pl/pl/xp/odswiezlatomuzyka2026
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://odswiezlatomuzyka.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://test.odswiezlatomuzyka.com/pl/pl/xp/odswiezlatomuzyka2026/admin_p3n1lkm541
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-estathefornopizza26.estathe.it/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://estathefornopizza26.estathe.it/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://baltic.kinder.com/lv/lv/xp/loterija/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://testy.kinderdziendziecka.pl
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.kinder.com/pl/pl/xp/kinderdziendziecka
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://testy.kinderdziendziecka.pl/admin_dakr82swp
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.tictacmy.com/my/en/xp/promotion/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://admin.tictacph.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.tictacph.com/ph/en/xp/promotion/mf2026/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ppd.clubferreropro.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://clubferreropro.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://ppd.clubferreropro.com/admin
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://nutellasummer.nutella.com/pl/pl/xp/nutelladziendobry2026
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/pl/pl/xp/nutelladziendobry2026
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-edeka-herzen-de-2026.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/de/de/xp/brotbeutel/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://test.jammiedodgers.co.uk
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    http://quality-songsmitherz-de-2026.ipaasferrero.com/de/de/xp/songsmitherz
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/de/de/xp/songsmitherz
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-ferrero-globus-gewinnspiel-de-2026.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://baltic.nutella.com/bc/lv/xp/labrit/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.nutella.com/bc/lv/xp/labrit/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://promo.nutella.ro/ro/ro/xp/buna-dimineata/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://gewinnspiel.mein-ferrero.de/nutella-donut
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://quality-gemeinsam-jubeln-rewe-de-2026.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://apd-talking-staging-ap-southeast-1.applaydu.com/bff/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://apd-talking-staging-eu-west-1.applaydu.com/bff
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://apd-talking-ap-southeast-1.applaydu.com/bff/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://apd-talking-eu-west-1.applaydu.com/bff/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.tictac.com/de/de/xp/lollapalooza-berlin/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://www.wonka.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cmsquality-wonka-com-2026.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://cms-wonka-com-2026.ipaasferrero.com/
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    https://estathecanoa26.estathe.it
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.thorntons.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    www.fanniemay.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    kelsen.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    royal-dansk.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

    kjeldsens.com
    Type: URL
    Submission eligible: yes
    Bounty eligible: no
    Maximum severity: critical
    Instructions: Not specified in the public source.

### Exclusions and completeness

Separate scope-exclusion records are not exposed by the anonymous public Team API and are not copied from authenticated imports. Consult the canonical policy and scope for all exclusions, restrictions and updates. Public visibility does not authorize disclosure of vulnerability findings.

<!-- bastet-public-scope:end -->
