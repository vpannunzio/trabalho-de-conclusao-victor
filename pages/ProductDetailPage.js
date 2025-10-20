const BasePage = require("./BasePage");
const { By } = require("selenium-webdriver");

class ProductDetailPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  static PRODUCT_NAME = By.xpath("//h2[contains(@class, 'name')]");
  static PRODUCT_CATEGORY = By.xpath("//p[contains(text(), 'Category:')]");
  static PRODUCT_PRICE = By.xpath("//span[contains(@class, 'price')]");
  static PRODUCT_AVAILABILITY = By.xpath(
    "//p[contains(text(), 'Availability:')]"
  );
  static PRODUCT_CONDITION = By.xpath("//p[contains(text(), 'Condition:')]");
  static PRODUCT_BRAND = By.xpath("//p[contains(text(), 'Brand:')]");
  static QUANTITY_INPUT = By.id("quantity");
  static ADD_TO_CART_BUTTON = By.xpath("//button[@type='button']");
  static VIEW_CART_BUTTON = By.xpath("//a[contains(text(), 'View Cart')]");
  static WRITE_REVIEW_TITLE = By.xpath(
    "//h2[contains(text(), 'Write Your Review')]"
  );
  static REVIEW_NAME_INPUT = By.id("name");
  static REVIEW_EMAIL_INPUT = By.id("email");
  static REVIEW_INPUT = By.id("review");
  static SUBMIT_REVIEW_BUTTON = By.id("button-review");
  static REVIEW_SUCCESS_MESSAGE = By.xpath(
    "//span[contains(text(), 'Thank you for your review.')]"
  );

  async verifyProductDetailVisible() {
    await this.verifyElementVisible(ProductDetailPage.PRODUCT_NAME);
    await this.verifyElementVisible(ProductDetailPage.PRODUCT_CATEGORY);
    await this.verifyElementVisible(ProductDetailPage.PRODUCT_PRICE);
    await this.verifyElementVisible(ProductDetailPage.PRODUCT_AVAILABILITY);
    await this.verifyElementVisible(ProductDetailPage.PRODUCT_CONDITION);
    await this.verifyElementVisible(ProductDetailPage.PRODUCT_BRAND);
  }

  async verifyProductName(expectedName) {
    const actualName = await this.getText(ProductDetailPage.PRODUCT_NAME);
    if (!actualName.includes(expectedName)) {
      throw new Error(
        `Product name mismatch. Expected: ${expectedName}, Actual: ${actualName}`
      );
    }
  }

  async verifyProductCategory(expectedCategory) {
    const actualCategory = await this.getText(
      ProductDetailPage.PRODUCT_CATEGORY
    );
    if (!actualCategory.includes(expectedCategory)) {
      throw new Error(
        `Product category mismatch. Expected: ${expectedCategory}, Actual: ${actualCategory}`
      );
    }
  }

  async verifyProductPrice(expectedPrice) {
    const actualPrice = await this.getText(ProductDetailPage.PRODUCT_PRICE);
    if (!actualPrice.includes(expectedPrice)) {
      throw new Error(
        `Product price mismatch. Expected: ${expectedPrice}, Actual: ${actualPrice}`
      );
    }
  }

  async verifyProductAvailability(expectedAvailability) {
    const actualAvailability = await this.getText(
      ProductDetailPage.PRODUCT_AVAILABILITY
    );
    if (!actualAvailability.includes(expectedAvailability)) {
      throw new Error(
        `Product availability mismatch. Expected: ${expectedAvailability}, Actual: ${actualAvailability}`
      );
    }
  }

  async verifyProductCondition(expectedCondition) {
    const actualCondition = await this.getText(
      ProductDetailPage.PRODUCT_CONDITION
    );
    if (!actualCondition.includes(expectedCondition)) {
      throw new Error(
        `Product condition mismatch. Expected: ${expectedCondition}, Actual: ${actualCondition}`
      );
    }
  }

  async verifyProductBrand(expectedBrand) {
    const actualBrand = await this.getText(ProductDetailPage.PRODUCT_BRAND);
    if (!actualBrand.includes(expectedBrand)) {
      throw new Error(
        `Product brand mismatch. Expected: ${expectedBrand}, Actual: ${actualBrand}`
      );
    }
  }

  async increaseQuantityTo(quantity) {
    const quantityInput = await this.findElement(
      ProductDetailPage.QUANTITY_INPUT
    );
    await quantityInput.clear();
    await quantityInput.sendKeys(quantity.toString());
  }

  async clickAddToCartButton() {
    await this.click(ProductDetailPage.ADD_TO_CART_BUTTON);
  }

  async clickViewCartButton() {
    await this.click(ProductDetailPage.VIEW_CART_BUTTON);
  }

  async verifyWriteReviewVisible() {
    await this.verifyElementVisible(ProductDetailPage.WRITE_REVIEW_TITLE);
  }

  async enterReviewName(name) {
    await this.sendKeys(ProductDetailPage.REVIEW_NAME_INPUT, name);
  }

  async enterReviewEmail(email) {
    await this.sendKeys(ProductDetailPage.REVIEW_EMAIL_INPUT, email);
  }

  async enterReview(review) {
    await this.sendKeys(ProductDetailPage.REVIEW_INPUT, review);
  }

  async clickSubmitReviewButton() {
    await this.click(ProductDetailPage.SUBMIT_REVIEW_BUTTON);
  }

  async verifyReviewSuccessMessage() {
    await this.verifyElementVisible(ProductDetailPage.REVIEW_SUCCESS_MESSAGE);
  }

  async addProductWithQuantity(quantity) {
    await this.increaseQuantityTo(quantity);
    await this.clickAddToCartButton();
  }

  async submitReview(name, email, review) {
    await this.enterReviewName(name);
    await this.enterReviewEmail(email);
    await this.enterReview(review);
    await this.clickSubmitReviewButton();
  }
}

module.exports = ProductDetailPage;