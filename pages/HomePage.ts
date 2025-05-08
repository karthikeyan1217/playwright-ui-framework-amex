import { Locator, Page } from "@playwright/test"
import BasePage from "../utilis/BasePage";

export class HomePage extends BasePage {


    readonly page: Page;
    readonly devenirClientTabbedMenu: Locator;
    readonly handlingPopUi: Locator;
    readonly LesCartesAmericanexpress_hl: Locator;


    constructor(page: Page) {
        super(page)
        this.page = page
        this.devenirClientTabbedMenu = page.locator("xpath=//label[@id = 'label-tab-open-cards']");
        this.handlingPopUi = page.locator("//button[contains(text (), 'Tout Accepter')]");
        this.LesCartesAmericanexpress_hl = page.locator("(//span[contains(text(), 'Les Cartes AMERICAN EXPRESS')])[1]")

    }



    async OpenApp() {
        await super.open(process.env.BASEURL || "");
        await super.waitForPageLoad();
    }

    async devenirClientTabIsFunctioning() {
        await super.isElementVisible(this.devenirClientTabbedMenu);
        await super.waitAndClick(this.devenirClientTabbedMenu);
    }


    async handlingHomePagePopUp(): Promise<void> {
        await super.waitAndClick(this.handlingPopUi);
    }

    async clickOnLesCartesAmexHyperlink(): Promise<void> {
        await super.waitAndClick(this.LesCartesAmericanexpress_hl);
    }



















}

