import { test, expect } from '../fixture/POMFixtures'
import { userDetailPageURL, userDetailPageTitle, userDetailPageTitleForm2 } from '../config'

// Check if the application form page loads with the correct title and URL
test('@smoke: should load the User Application Form page with the correct title and URL', async ({ userApplicationFormPage }) => {
    await expect(userApplicationFormPage.page).toHaveTitle(userDetailPageTitle);
    await expect(userApplicationFormPage.page).toHaveURL(userDetailPageURL);
});

// Validate submission of the first form
test('@smoke: should allow submission of the first form', async ({ userApplicationFormPage }) => {
    const success = await userApplicationFormPage.fillTheFirstFormValidation();
    expect(success).toBe(true);
});

// Validate update and submission of the second form (Your Personal Information section)
test('@smoke: should allow updating and submitting the second form in the "Your Personal Information" section', async ({ userApplicationFormPage }) => {
    const success = await userApplicationFormPage.fillTheSecondFormValidation();
    expect(success).toBe(true);
});

// Validate update and submission of the third form (Your Financial Information section)
test('@smoke: should allow updating and submitting the third form in the "Your Financial Information" section', async ({ userApplicationFormPage }) => {
    const success = await userApplicationFormPage.fillTheThirdFormValidation();
    expect(success).toBe(true);
});

// Validate update and submission of the fourth form (Your Security Information section)
test('@smoke: should allow updating and submitting the fourth form in the "Your Security Information" section', async ({ userApplicationFormPage }) => {
    const success = await userApplicationFormPage.fillTheFourthFormValidation();
    expect(success).toBe(true);
});
