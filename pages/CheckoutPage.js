const BasePage = require("./BasePage");
const { By } = require("selenium-webdriver");

class CheckoutPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  static ADDRESS_DETAILS_TITLE = By.xpath(
    "//h2[contains(text(), 'Address Details')]"
  );
  static REVIEW_ORDER_TITLE = By.xpath(
    "//h2[contains(text(), 'Review Your Order')]"
  );
  static DELIVERY_ADDRESS = By.xpath("//ul[@id='address_delivery']");
  static BILLING_ADDRESS = By.xpath("//ul[@id='address_invoice']");
  static COMMENT_TEXTAREA = By.name("message");
  static PLACE_ORDER_BUTTON = By.xpath("//a[contains(text(), 'Place Order')]");
  static PAYMENT_TITLE = By.xpath("//h2[contains(text(), 'Payment')]");
  static NAME_ON_CARD_INPUT = By.name("name_on_card");
  static CARD_NUMBER_INPUT = By.name("card_number");
  static CVC_INPUT = By.name("cvc");
  static EXPIRATION_MONTH_INPUT = By.name("expiry_month");
  static EXPIRATION_YEAR_INPUT = By.name("expiry_year");
  static PAY_AND_CONFIRM_ORDER_BUTTON = By.xpath("//button[@id='submit']");
  static ORDER_SUCCESS_MESSAGE = By.xpath(
    "//p[contains(text(), 'Congratulations! Your order has been confirmed!')]"
  );
  static DOWNLOAD_INVOICE_BUTTON = By.xpath(
    "//a[contains(text(), 'Download Invoice')]"
  );
  static CONTINUE_BUTTON = By.xpath("//a[contains(text(), 'Continue')]");

  async verifyAddressDetailsVisible() {
    await this.verifyElementVisible(CheckoutPage.ADDRESS_DETAILS_TITLE);
  }

  async verifyReviewOrderVisible() {
    await this.verifyElementVisible(CheckoutPage.REVIEW_ORDER_TITLE);
  }

  async verifyDeliveryAddress() {
    await this.verifyElementVisible(CheckoutPage.DELIVERY_ADDRESS);
  }

  async verifyBillingAddress() {
    await this.verifyElementVisible(CheckoutPage.BILLING_ADDRESS);
  }

  async enterComment(comment) {
    await this.sendKeys(CheckoutPage.COMMENT_TEXTAREA, comment);
  }

  async clickPlaceOrderButton() {
    await this.click(CheckoutPage.PLACE_ORDER_BUTTON);
  }

  async verifyPaymentTitleVisible() {
    await this.verifyElementVisible(CheckoutPage.PAYMENT_TITLE);
  }

  async enterNameOnCard(name) {
    await this.sendKeys(CheckoutPage.NAME_ON_CARD_INPUT, name);
  }

  async enterCardNumber(cardNumber) {
    await this.sendKeys(CheckoutPage.CARD_NUMBER_INPUT, cardNumber);
  }

  async enterCVC(cvc) {
    await this.sendKeys(CheckoutPage.CVC_INPUT, cvc);
  }

  async enterExpirationMonth(month) {
    await this.sendKeys(CheckoutPage.EXPIRATION_MONTH_INPUT, month);
  }

  async enterExpirationYear(year) {
    await this.sendKeys(CheckoutPage.EXPIRATION_YEAR_INPUT, year);
  }

  async clickPayAndConfirmOrderButton() {
    await this.click(CheckoutPage.PAY_AND_CONFIRM_ORDER_BUTTON);
  }

  async verifyOrderSuccessMessage() {
    await this.verifyElementVisible(CheckoutPage.ORDER_SUCCESS_MESSAGE);
  }

  async clickDownloadInvoiceButton() {
    await this.click(CheckoutPage.DOWNLOAD_INVOICE_BUTTON);
  }

  async clickContinueButton() {
    await this.click(CheckoutPage.CONTINUE_BUTTON);
  }

  async fillPaymentDetails(
    nameOnCard,
    cardNumber,
    cvc,
    expiryMonth,
    expiryYear
  ) {
    await this.enterNameOnCard(nameOnCard);
    await this.enterCardNumber(cardNumber);
    await this.enterCVC(cvc);
    await this.enterExpirationMonth(expiryMonth);
    await this.enterExpirationYear(expiryYear);
  }

  async completeOrder(
    comment,
    nameOnCard,
    cardNumber,
    cvc,
    expiryMonth,
    expiryYear
  ) {
    await this.enterComment(comment);
    await this.clickPlaceOrderButton();
    await this.verifyPaymentTitleVisible();
    await this.fillPaymentDetails(
      nameOnCard,
      cardNumber,
      cvc,
      expiryMonth,
      expiryYear
    );
    await this.clickPayAndConfirmOrderButton();
    await this.verifyOrderSuccessMessage();
  }
}

module.exports = CheckoutPage;