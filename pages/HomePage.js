const BasePage = require("./BasePage");
const { By } = require("selenium-webdriver");

class HomePage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  static PRODUCTS_BUTTON = By.xpath("//a[contains(text(), 'Products')]");
  static CONTACT_US_BUTTON = By.xpath("//a[contains(text(), 'Contact us')]");
  static TEST_CASES_BUTTON = By.xpath("//a[contains(text(), 'Test Cases')]");
  static CART_BUTTON = By.xpath("//a[contains(text(), 'Cart')]");
  static SUBSCRIPTION_TEXT = By.xpath("//h2[contains(text(), 'SUBSCRIPTION')]");
  static SUBSCRIPTION_EMAIL_INPUT = By.id("susbscribe_email");
  static SUBSCRIPTION_ARROW_BUTTON = By.id("subscribe");
  static SUBSCRIPTION_SUCCESS_MESSAGE = By.xpath(
    "//div[contains(text(), 'You have been successfully subscribed!')]"
  );
  static RECOMMENDED_ITEMS = By.xpath(
    "//h2[contains(text(), 'RECOMMENDED ITEMS')]"
  );
  static RECOMMENDED_ADD_TO_CART = By.xpath(
    "(//a[contains(@class, 'add-to-cart')])[last()]"
  );
  static VIEW_CART_BUTTON = By.xpath("//a[contains(text(), 'View Cart')]");
  static CONTINUE_SHOPPING_BUTTON = By.xpath(
    "//button[contains(text(), 'Continue Shopping')]"
  );
  static SCROLL_UP_ARROW = By.id("scrollUp");

  async verifyHomePageIsVisible() {
    await this.verifyElementVisible(BasePage.HOME_PAGE_TITLE);
  }

  async clickSignupLoginButton() {
    await this.click(BasePage.SIGNUP_LOGIN_BUTTON);
  }

  async clickProductsButton() {
    await this.click(HomePage.PRODUCTS_BUTTON);
  }

  async clickContactUsButton() {
    await this.click(HomePage.CONTACT_US_BUTTON);
  }

  async clickTestCasesButton() {
    await this.click(HomePage.TEST_CASES_BUTTON);
  }

  async clickCartButton() {
    await this.click(HomePage.CART_BUTTON);
  }

  async verifyLoggedInAs(username) {
    await this.verifyText(BasePage.LOGGED_IN_AS, `Logged in as ${username}`);
  }

  async clickLogoutButton() {
    await this.click(BasePage.LOGOUT_BUTTON);
  }

  async clickDeleteAccountButton() {
    await this.click(BasePage.DELETE_ACCOUNT_BUTTON);
  }

  async verifyAccountDeleted() {
    await this.verifyElementVisible(BasePage.ACCOUNT_DELETED_MESSAGE);
  }

  async clickContinueButton() {
    await this.click(BasePage.CONTINUE_BUTTON);
  }

  async scrollToFooter() {
    await this.scrollToBottom();
  }

  async verifySubscriptionText() {
    await this.verifyElementVisible(HomePage.SUBSCRIPTION_TEXT);
  }

  async enterSubscriptionEmail(email) {
    await this.sendKeys(HomePage.SUBSCRIPTION_EMAIL_INPUT, email);
  }

  async clickSubscriptionArrowButton() {
    await this.click(HomePage.SUBSCRIPTION_ARROW_BUTTON);
  }

  async verifySubscriptionSuccessMessage() {
    await this.verifyElementVisible(HomePage.SUBSCRIPTION_SUCCESS_MESSAGE);
  }

  async verifyRecommendedItemsVisible() {
    await this.verifyElementVisible(HomePage.RECOMMENDED_ITEMS);
  }

  async clickRecommendedAddToCart() {
    await this.click(HomePage.RECOMMENDED_ADD_TO_CART);
  }

  async clickViewCartButton() {
    await this.click(HomePage.VIEW_CART_BUTTON);
  }

  async clickContinueShoppingButton() {
    await this.click(HomePage.CONTINUE_SHOPPING_BUTTON);
  }

  async scrollUpUsingArrow() {
    await this.click(HomePage.SCROLL_UP_ARROW);
  }

  async verifyPageScrolledUp() {
    await this.verifyElementVisible(BasePage.HOME_PAGE_TITLE);
  }
}

module.exports = HomePage;