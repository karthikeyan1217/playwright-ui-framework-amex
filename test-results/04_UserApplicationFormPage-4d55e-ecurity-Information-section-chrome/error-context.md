# Test info

- Name: @smoke: should allow updating and submitting the fourth form in the "Your Security Information" section
- Location: C:\Users\Lenovo\Music\playwright-ui-framework-amex\tests\04_UserApplicationFormPage.spec.ts:29:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
    at C:\Users\Lenovo\Music\playwright-ui-framework-amex\tests\04_UserApplicationFormPage.spec.ts:31:21
```

# Page snapshot

```yaml
- banner:
  - img "American Express"
  - button "Quitter la page"
- banner:
  - link "Skip to main content":
    - /url: "#mainContent"
  - dialog:
    - link "American Express":
      - /url: https://www.americanexpress.com/fr-fr/?inav=NavLogo
      - img "American Express"
    - radio "tab-closer" [checked]
    - list:
      - listitem "label-myAccount":
        - radio "label-myAccount"
        - button "Espace Client"
      - listitem "label-cards":
        - radio "label-cards"
        - button "Devenir Client"
      - listitem "label-travel":
        - radio "label-travel"
        - button "Voyages"
      - listitem "label-insurance":
        - radio "label-insurance"
        - button "Assurances"
      - listitem "label-rewards":
        - radio "label-rewards"
        - button "Miles/Points"
      - listitem "label-business":
        - radio "label-business"
        - button "Sociétés"
    - button "Search":
      - img "Search"
    - link "Contacts":
      - /url: https://www.americanexpress.com/fr/support/contactez-nous.html?inav=fr_utility_contact_cm
    - link "Connexion":
      - /url: https://www.americanexpress.com/fr-fr/account/login?inav=fr_utility_logout
- main:
  - main:
    - paragraph: Le formulaire de souscription est momentanément indisponible. Nous vous invitons à recommencer ultérieurement.
    - paragraph: Veuillez-nous excusez pour la gȇne occassionnée.
    - button "Revenir à la page d’accueil"
- contentinfo:
  - separator
  - heading "Devenir client" [level=2]
  - list:
    - listitem:
      - link "Cartes pour les particuliers":
        - /url: https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?inav=fr_sitefooter_allcards
    - listitem:
      - link "Cartes Air France KLM - AMEX":
        - /url: https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-air-france-klm-amex/?inav=fr_sitefooter_afcards
    - listitem:
      - link "Cartes Business":
        - /url: https://www.americanexpress.com/fr-fr/entreprise/carte-de-paiement/?inav=fr_sitefooter_sbscards
    - listitem:
      - link "Cartes PRO":
        - /url: https://www.americanexpress.com/fr-fr/professionnel/solutions-paiement-entreprises/air-france/?inav=fr_sitefooter_cardspro
    - listitem:
      - link "Cartes Corporate":
        - /url: https://www.americanexpress.com/fr-fr/professionnel/?inav=fr_sitefooter_corpcards
  - heading "Liens utiles" [level=2]
  - list:
    - listitem:
      - link "Carte perdue ou volée":
        - /url: https://www.americanexpress.com/fr/faq/?inav=fr_sitefooter_stolencards
    - listitem:
      - link "Code confidentiel":
        - /url: https://www.americanexpress.com/fr/merchant/help-pin-express-card.html?inav=fr_sitefooter_pin
    - listitem:
      - link "Où utiliser votre carte?":
        - /url: https://www.americanexpress.com/fr-FR/maps?inav=fr_sitefooter_votre_carte
    - listitem:
      - link "Espace commerçants":
        - /url: https://www.americanexpress.com/fr/merchant/?inav=fr_sitefooter_merchants
    - listitem:
      - link "Accepter Amex Cartes":
        - /url: https://www.americanexpress.com/fr/merchant/accepter-la-carte.html?inav=fr_sitefooter_merchants_apply
  - heading "Plus de services" [level=2]
  - list:
    - listitem:
      - link "Vos services sur mobile":
        - /url: https://www.americanexpress.com/fr/benefices/services-securises/services-mobiles/appli-mobile/amex-mobile-app.html?intlink=Footer&inav=fr_sitefooter_app
    - listitem:
      - link "Carte supplémentaire":
        - /url: https://www.americanexpress.com/fr/benefices/carte-supplementaire/?inav=fr_sitefooter_supp
    - listitem:
      - link "Parrainage de carte":
        - /url: https://www.americanexpress.com/fr-fr/referral?inav=fr_sitefooter_mgm
    - listitem:
      - link "Assurances":
        - /url: https://www.americanexpress.com/fr/assurance/?inav=fr_sitefooter_insurance
    - listitem:
      - link "Réseau (en Anglais)":
        - /url: https://network.americanexpress.com/globalnetwork/v4?inav=fr_sitefooter_plus_de_services_reseau
    - listitem:
      - link "FAQs":
        - /url: https://www.americanexpress.com/fr/service-clientele/?inav=fr_sitefooter_faq
  - heading "Informations sur la société" [level=2]
  - list:
    - listitem:
      - link "A propos d'American Express":
        - /url: https://www.americanexpress.com/fr/entreprises/a-propos/?inav=fr_sitefooter_aboutamex
    - listitem:
      - link "Emploi et Carrières":
        - /url: https://www.americanexpress.com/fr-fr/carrieres/?inav=fr_sitefooter_companyinfo_news
    - listitem:
      - link "Espace Presse":
        - /url: https://www.americanexpress.com/fr/entreprises/a-propos/?inav=fr_sitefooter_press#presse
    - listitem:
      - link "Contactez-nous":
        - /url: https://www.americanexpress.com/fr/support/contactez-nous.html?inav=fr_sitefooter_contact_pr
    - listitem:
      - link "Plan du site":
        - /url: https://www.americanexpress.com/fr-fr/plan-du-site/personelles.html?inav=fr_sitefooter_sitemap
  - separator
  - img "American Express"
  - text: France
  - link "Autres pays":
    - /url: https://www.americanexpress.com/en-us/change-country/
  - list:
    - listitem:
      - link "Facebook. Ouvrir le lien dans une nouvelle fenêtre":
        - /url: https://www.facebook.com/AmericanExpressFrance
        - img "Facebook. Ouvrir le lien dans une nouvelle fenêtre"
  - list:
    - listitem:
      - link "Marques déposées":
        - /url: https://www.americanexpress.com/fr/trademarks.html?inav=fr_legalfooter_trademark
      - text: "|"
    - listitem:
      - link "Mentions légales":
        - /url: https://www.americanexpress.com/fr/terms-and-conditions.html?inav=fr_legalfooter_termsofuse
      - text: "|"
    - listitem:
      - link "Centre de confidentialité":
        - /url: https://www.americanexpress.com/fr-fr/societes/legale/centre-de-confidentialite/?inav=fr_footer_centre_de_confidentialite
      - text: "|"
    - listitem:
      - link "Votre Protection":
        - /url: https://www.americanexpress.com/fr/benefices/services-securises/services-anti-fraude/?inav=fr_legalfooter_securityalerts
      - text: "|"
    - listitem:
      - link "Communication Compte inactif":
        - /url: https://www.americanexpress.com/fr/information/communication-compte-inactif.html?inav=fr_legalfooter_comm_inactif
      - text: "|"
    - listitem:
      - link "Gestion des réclamations":
        - /url: https://www.americanexpress.com/fr/legal/reclamations/?inav=fr_legalfooter_comm_inactif
      - text: "|"
    - listitem:
      - link "Services client pour sourds et malentendants":
        - /url: https://www.americanexpress.com/fr/service-clientele/accessible/sourds-et-malentendants.html?inav=fr_legalfooter_accessible
      - text: "|"
    - listitem:
      - link "FX-ECB Comparaison":
        - /url: https://www.americanexpress.com/fr/legal/fx-ecb-comparaison/?inav=fr_legalfooter_accessible_fx_ecb
      - text: "|"
    - listitem:
      - link "Documentation d’Information Tarifaire":
        - /url: https://www.americanexpress.com/fr/documentinformationtarifaire?inav=fr_legalfooter_dit
      - text: "|"
    - listitem:
      - link "Glossaire Documentation d’Information Tarifaire":
        - /url: https://www.americanexpress.com/fr/documentinformationtarifaireglossaire?inav=fr_legalfooter_dit_glossaire
      - text: "|"
    - listitem:
      - link "Politique de gestion des Cookies":
        - /url: https://www.americanexpress.com/fr-fr/societes/legale/centre-de-confidentialite/a-propos-des-Cookies/?inav=fr_legalfooter_cookie_policy
  - paragraph:
    - text: Copyright © 2025
    - link "American Express Company":
      - /url: https://www.americanexpress.com/fr/
```

# Test source

```ts
   1 | import { test, expect } from '../fixture/POMFixtures'
   2 | import { userDetailPageURL, userDetailPageTitle, userDetailPageTitleForm2 } from '../config'
   3 |
   4 | // Check if the application form page loads with the correct title and URL
   5 | test('@smoke: should load the User Application Form page with the correct title and URL', async ({ userApplicationFormPage }) => {
   6 |     await expect(userApplicationFormPage.page).toHaveTitle(userDetailPageTitle);
   7 |     await expect(userApplicationFormPage.page).toHaveURL(userDetailPageURL);
   8 | });
   9 |
  10 | // Validate submission of the first form
  11 | test('@smoke: should allow submission of the first form', async ({ userApplicationFormPage }) => {
  12 |     const success = await userApplicationFormPage.fillTheFirstFormValidation();
  13 |     expect(success).toBe(true);
  14 | });
  15 |
  16 | // Validate update and submission of the second form (Your Personal Information section)
  17 | test('@smoke: should allow updating and submitting the second form in the "Your Personal Information" section', async ({ userApplicationFormPage }) => {
  18 |     const success = await userApplicationFormPage.fillTheSecondFormValidation();
  19 |     expect(success).toBe(true);
  20 | });
  21 |
  22 | // Validate update and submission of the third form (Your Financial Information section)
  23 | test('@smoke: should allow updating and submitting the third form in the "Your Financial Information" section', async ({ userApplicationFormPage }) => {
  24 |     const success = await userApplicationFormPage.fillTheThirdFormValidation();
  25 |     expect(success).toBe(true);
  26 | });
  27 |
  28 | // Validate update and submission of the fourth form (Your Security Information section)
  29 | test('@smoke: should allow updating and submitting the fourth form in the "Your Security Information" section', async ({ userApplicationFormPage }) => {
  30 |     const success = await userApplicationFormPage.fillTheFourthFormValidation();
> 31 |     expect(success).toBe(true);
     |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  32 | });
  33 |
```