import { Locator, Page } from "@playwright/test"
import BasePage from "../utilis/BasePage";

export class AllCardsType extends BasePage {


    readonly page: Page;
    readonly enSavoirPlusButton: Locator;
    readonly carteGoldenAmericanExpressCardText: Locator;


    constructor(page: Page) {
        super(page)
        this.page = page
        this.enSavoirPlusButton = page.locator("(//div[@class = 'row pad-2-t pad-3-b   ']/child::div)[2]/descendant::div[@class = 'button parbase']/descendant::span");
        this.carteGoldenAmericanExpressCardText = page.locator("//b[contains(text (), 'Cotisation Gratuite la 1ère année')]");
    }


    async checkCarteGoldAmexCardIsDisplayed() {
        await super.isElementVisible(this.carteGoldenAmericanExpressCardText, "Element is not visible")
    }

    async verifyEnSavoirPlusButtonWorks() {
        await super.scrollAndClick(this.enSavoirPlusButton)
    }

}

