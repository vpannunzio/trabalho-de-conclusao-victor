const { By, until } = require("selenium-webdriver");

class BasePage {
  constructor(driver) {
    this.driver = driver;
    this.waitTimeout = 10000;
  }

  static HOME_PAGE_TITLE = By.xpath(
    "//h2[contains(text(), 'Full-Fledged practice website for Automation Engineers')]"
  );
  static SIGNUP_LOGIN_BUTTON = By.xpath(
    "//a[contains(text(), 'Signup / Login')]"
  );
  static LOGGED_IN_AS = By.xpath("//a[contains(text(), 'Logged in as')]");
  static DELETE_ACCOUNT_BUTTON = By.xpath(
    "//a[contains(text(), 'Delete Account')]"
  );
  static ACCOUNT_DELETED_MESSAGE = By.xpath(
    "//h2[contains(text(), 'ACCOUNT DELETED!')]"
  );
  static CONTINUE_BUTTON = By.xpath("//a[contains(text(), 'Continue')]");
  static LOGOUT_BUTTON = By.xpath("//a[contains(text(), 'Logout')]");

  async click(locator) {
    const element = await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(locator)),
      this.waitTimeout
    );
    await element.click();
  }

  async sendKeys(locator, text) {
    const element = await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(locator)),
      this.waitTimeout
    );
    await element.clear();
    await element.sendKeys(text);
  }

  async getText(locator) {
    const element = await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(locator)),
      this.waitTimeout
    );
    return await element.getText();
  }

  async isElementVisible(locator) {
    try {
      await this.driver.wait(
        until.elementIsVisible(await this.driver.findElement(locator)),
        this.waitTimeout
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  async verifyText(locator, expectedText) {
    const actualText = await this.getText(locator);
    if (!actualText.includes(expectedText)) {
      throw new Error(
        `Expected text '${expectedText}' not found. Actual text: '${actualText}'`
      );
    }
  }

  async verifyElementVisible(locator) {
    const isVisible = await this.isElementVisible(locator);
    if (!isVisible) {
      throw new Error(`Element not visible: ${locator}`);
    }
  }

  async navigateToUrl(url) {
    await this.driver.get(url);
  }

  async scrollToElement(locator) {
    const element = await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(locator)),
      this.waitTimeout
    );
    await this.driver.executeScript(
      "arguments[0].scrollIntoView(true);",
      element
    );
  }

  async scrollToBottom() {
    await this.driver.executeScript(
      "window.scrollTo(0, document.body.scrollHeight);"
    );
  }

  async scrollToTop() {
    await this.driver.executeScript("window.scrollTo(0, 0);");
  }

  async findElements(locator) {
    return await this.driver.findElements(locator);
  }

  async findElement(locator) {
    return await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(locator)),
      this.waitTimeout
    );
  }

  async waitForElement(locator, timeout = this.waitTimeout) {
    return await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(locator)),
      timeout
    );
  }
}

module.exports = BasePage;