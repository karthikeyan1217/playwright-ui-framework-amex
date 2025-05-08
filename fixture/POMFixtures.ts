import { test as baseTest, expect as baseExpect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AllCardsType } from '../pages/AllCardsType';
import { GoldCardDescription } from '../pages/GoldCardDescription';
import { UserApplicationFormPage } from '../pages/UserApplicationFormPage';


type POMFixtureType = {
  homePage: HomePage;
  allCardsType: AllCardsType;
  goldenCardDescription: GoldCardDescription;
  userApplicationFormPage: UserApplicationFormPage

};
//Sharing same context and page accross all tests
let sharedContext;
let sharedPage;

//will initialize only once
const ensureSharedPage = async (browser) => {
  if (!sharedContext) {
    sharedContext = await browser.newContext();
    sharedPage = await sharedContext.newPage();
  }
  return sharedPage;
};

export const test = baseTest.extend<POMFixtureType>({
  homePage: async ({ browser }, use) => {
    const page = await ensureSharedPage(browser);
    await use(new HomePage(page));
  },

  allCardsType: async ({ browser }, use) => {
    const page = await ensureSharedPage(browser);
    await use(new AllCardsType(page));
  },

  goldenCardDescription: async ({ browser }, use) => {
    const page = await ensureSharedPage(browser);
    await use(new GoldCardDescription(page));
  },

  userApplicationFormPage: async ({ browser }, use) => {
    const page = await ensureSharedPage(browser);
    await use(new UserApplicationFormPage(page));
  }
});

export const expect = baseExpect;