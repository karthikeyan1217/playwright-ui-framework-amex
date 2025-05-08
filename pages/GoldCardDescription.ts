import { Locator, Page } from "@playwright/test"
import BasePage from "../utilis/BasePage";

export class GoldCardDescription extends BasePage {

    readonly page: Page;
    readonly DemandezVotreCarteButton: Locator;


    constructor(page: Page) {
        super(page)
        this.page = page
        this.DemandezVotreCarteButton = page.locator("(//a[@data-qe-id='Button'])[1]");
    }


    async DemandezVotreCarteButtonWorks() {
        await super.isElementVisible(this.DemandezVotreCarteButton, "DemandezVotreCarteButton button is not working");
        await super.waitAndClick(this.DemandezVotreCarteButton);

    }


}

