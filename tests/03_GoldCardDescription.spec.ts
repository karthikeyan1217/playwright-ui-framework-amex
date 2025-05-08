import { test, expect } from '../fixture/POMFixtures'
import fs from 'fs'
import { goldCardDescriptionsPageURL, goldCardDescriptionsPageTitle } from '../config'

// Validate that the Gold Card Description page loads with the correct title and URL
test('@smoke: should load the Gold Card Description page with the correct title and URL', async ({ goldenCardDescription }) => {
    await expect(goldenCardDescription.page).toHaveTitle(goldCardDescriptionsPageTitle);
    await expect(goldenCardDescription.page).toHaveURL(goldCardDescriptionsPageURL);
});

// Validate that the "Demandez votre Carte" button is visible and functions correctly
test('@smoke: should display and properly function the "Demandez votre Carte" button on the Gold Card Description page', async ({ goldenCardDescription }) => {
    await goldenCardDescription.DemandezVotreCarteButtonWorks();
});



