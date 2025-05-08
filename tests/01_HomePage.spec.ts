import { test, expect } from '../fixture/POMFixtures'
import { homePageTitle, homePageUrl } from '../config'

// Validate that the homepage loads with the correct title and URL
test('@smoke: should load the homepage with the correct title and URL', async ({ homePage }) => {
    await homePage.OpenApp();
    await expect(homePage.page).toHaveTitle(homePageTitle);
    await expect(homePage.page).toHaveURL(homePageUrl);
});


// Validate that the "Préférences de Cookie" banner is displayed and clickable
test('@smoke: should display and allow interaction with the "Préférences de Cookie" banner', async ({ homePage }) => {
    await homePage.handlingHomePagePopUp();
    expect(homePage.handlingPopUi).toBeHidden();
});


// Validate functionality of the "Devenir Client" tab in the header
test('@smoke: should allow clicking the "Devenir Client" tab in the header', async ({ homePage }) => {
    await homePage.devenirClientTabIsFunctioning();
});


// Validate that the "Les Cartes AMERICAN EXPRESS" link under "Cartes Particuliers" works
test('@smoke: should allow clicking the "Les Cartes AMERICAN EXPRESS" link under "Cartes Particuliers"', async ({ homePage }) => {
    await homePage.clickOnLesCartesAmexHyperlink();
    await expect(homePage.LesCartesAmericanexpress_hl).not.toBeVisible();
});