import { test, expect } from '../fixture/POMFixtures'
import { allCardsTypePageTitle, allCardsTypePageUrl, goldCardDescriptionsPageURL } from '../config'

// Validate that the All Cards page loads with the correct title and URL
test('@smoke: should load the All Cards page with the correct title and URL', async ({ allCardsType }) => {
    await expect(allCardsType.page).toHaveTitle(allCardsTypePageTitle);
    await expect(allCardsType.page).toHaveURL(allCardsTypePageUrl);
});


// Verify that "Carte Gold American Express" is displayed under the Les Cartes American Express section
test('@smoke: should display "Carte Gold American Express" under the "Les Cartes American Express" section', async ({ allCardsType }) => {
    await allCardsType.checkCarteGoldAmexCardIsDisplayed();
});


// Verify that the "En Savoir plus" button is visible and navigates correctly for the Carte Gold American Express
test('@smoke: should display and correctly handle the "En Savoir plus" button for the Carte Gold American Express card', async ({ allCardsType }) => {
    await allCardsType.verifyEnSavoirPlusButtonWorks();
    await expect(allCardsType.page).toHaveURL(goldCardDescriptionsPageURL);
});
