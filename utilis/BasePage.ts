import { Page, expect, Locator } from '@playwright/test';

class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async checkRadioBox(selector: Locator) {
    await this.waitForElement(selector);
    await selector.click();
  }


  async pause(): Promise<void> {
    await this.page.pause();
  }

  async getUrl(): Promise<string> {
    return this.page.url();
  }

  async wait(ms: number = 10000): Promise<void> {
    await this.page.waitForTimeout(ms);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async waitForElement(locator: Locator, timeout = 5000): Promise<void> {
    await locator.waitFor({ timeout });
  }
  async waitForTimeout(locator: Locator, timeout = 5000): Promise<void> {
    await locator.waitFor({ timeout });
  }

  async waitAndClick(element: Locator): Promise<void> {
    await element.waitFor({ state: 'visible' }); // optional wait
    await element.click();
  }

  async focusAndPressEnter(locator: Locator): Promise<void> {
    await locator.focus();
    await this.page.keyboard.press('Enter')
  };


  async keyPress(selector: string, key: string): Promise<void> {
    await this.page.press(selector, key);
  }


  async filldetails(selector: Locator, key: string): Promise<void> {
    await selector.fill(key);
  }


  async verifyElementText(locator: Locator, expectedText: string): Promise<void> {
    const textValue = await locator.textContent();
    expect(textValue?.trim()).toBe(expectedText);
  }


  async selectValueFromDropdown(selector: Locator, value: string): Promise<void> {
    await selector.selectOption({ label: value });
  }


  async isElementVisible(element: Locator, errorMessage?: string): Promise<void> {
    try {
      await expect(element).toBeVisible();
    } catch (error) {
      throw new Error(errorMessage || `Element not visible`);
    }
  }


  async scrollAndClick(element: Locator) {
    await element.scrollIntoViewIfNeeded();
    await element.waitFor({ state: 'visible' });
    await element.click();
  }

}

export default BasePage;
