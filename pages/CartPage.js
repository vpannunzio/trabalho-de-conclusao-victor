const BasePage = require("./BasePage");
const { By } = require("selenium-webdriver");

class CartPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  static CART_PAGE_TITLE = By.xpath("//h2[contains(text(), 'Shopping Cart')]");
  static PRODUCTS_IN_CART = By.xpath("//tr[contains(@id, 'product')]");
  static PRODUCT_PRICE = By.xpath("//td[contains(@class, 'cart_price')]");
  static PRODUCT_QUANTITY = By.xpath("//td[contains(@class, 'cart_quantity')]");
  static PRODUCT_TOTAL = By.xpath("//td[contains(@class, 'cart_total')]");
  static PROCEED_TO_CHECKOUT_BUTTON = By.xpath(
    "//a[contains(text(), 'Proceed To Checkout')]"
  );
  static REGISTER_LOGIN_BUTTON = By.xpath(
    "//a[contains(text(), 'Register / Login')]"
  );
  static REMOVE_PRODUCT_BUTTON = By.xpath(
    "//a[contains(@class, 'cart_quantity_delete')]"
  );
  static SUBSCRIPTION_TEXT = By.xpath("//h2[contains(text(), 'SUBSCRIPTION')]");
  static SUBSCRIPTION_EMAIL_INPUT = By.id("susbscribe_email");
  static SUBSCRIPTION_ARROW_BUTTON = By.id("subscribe");
  static SUBSCRIPTION_SUCCESS_MESSAGE = By.xpath(
    "//div[contains(text(), 'You have been successfully subscribed!')]"
  );

  async verifyCartPageDisplayed() {
    await this.verifyElementVisible(CartPage.CART_PAGE_TITLE);
  }

  async verifyProductsInCart(expectedCount) {
    const products = await this.findElements(CartPage.PRODUCTS_IN_CART);
    if (products.length !== expectedCount) {
      throw new Error(
        `Expected ${expectedCount} products in cart, but found ${products.length}`
      );
    }
  }

  async verifyProductPrices() {
    const prices = await this.findElements(CartPage.PRODUCT_PRICE);
    if (prices.length === 0) {
      throw new Error("Product prices are not visible");
    }
  }

  async verifyProductQuantities() {
    const quantities = await this.findElements(CartPage.PRODUCT_QUANTITY);
    if (quantities.length === 0) {
      throw new Error("Product quantities are not visible");
    }
  }

  async verifyProductTotals() {
    const totals = await this.findElements(CartPage.PRODUCT_TOTAL);
    if (totals.length === 0) {
      throw new Error("Product totals are not visible");
    }
  }

  async clickProceedToCheckoutButton() {
    await this.click(CartPage.PROCEED_TO_CHECKOUT_BUTTON);
  }

  async clickRegisterLoginButton() {
    await this.click(CartPage.REGISTER_LOGIN_BUTTON);
  }

  async removeFirstProduct() {
    const removeButtons = await this.findElements(
      CartPage.REMOVE_PRODUCT_BUTTON
    );
    if (removeButtons.length > 0) {
      await removeButtons[0].click();
    }
  }

  async verifyProductRemoved() {
    const products = await this.findElements(CartPage.PRODUCTS_IN_CART);
    if (products.length !== 0) {
      throw new Error("Product was not removed from cart");
    }
  }

  async scrollToFooter() {
    await this.scrollToBottom();
  }

  async verifySubscriptionText() {
    await this.verifyElementVisible(CartPage.SUBSCRIPTION_TEXT);
  }

  async enterSubscriptionEmail(email) {
    await this.sendKeys(CartPage.SUBSCRIPTION_EMAIL_INPUT, email);
  }

  async clickSubscriptionArrowButton() {
    await this.click(CartPage.SUBSCRIPTION_ARROW_BUTTON);
  }

  async verifySubscriptionSuccessMessage() {
    await this.verifyElementVisible(CartPage.SUBSCRIPTION_SUCCESS_MESSAGE);
  }

  async verifyCartAfterLogin() {
    await this.verifyCartPageDisplayed();
    await this.verifyProductsInCart(2);
  }
}

module.exports = CartPage;