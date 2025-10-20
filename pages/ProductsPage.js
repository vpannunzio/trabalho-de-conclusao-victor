const BasePage = require("./BasePage");
const { By } = require("selenium-webdriver");

class ProductsPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  static ALL_PRODUCTS_TITLE = By.xpath(
    "//h2[contains(text(), 'All Products')]"
  );
  static PRODUCTS_LIST = By.xpath("//div[@class='productinfo text-center']");
  static FIRST_PRODUCT_VIEW = By.xpath(
    "(//a[contains(text(), 'View Product')])[1]"
  );
  static SEARCH_INPUT = By.id("search_product");
  static SEARCH_BUTTON = By.id("submit_search");
  static SEARCHED_PRODUCTS_TITLE = By.xpath(
    "//h2[contains(text(), 'Searched Products')]"
  );
  static SEARCHED_PRODUCTS_LIST = By.xpath(
    "//div[@class='productinfo text-center']"
  );
  static ADD_TO_CART_BUTTON = By.xpath("//a[contains(@class, 'add-to-cart')]");
  static CONTINUE_SHOPPING_BUTTON = By.xpath(
    "//button[contains(text(), 'Continue Shopping')]"
  );
  static VIEW_CART_BUTTON = By.xpath("//a[contains(text(), 'View Cart')]");

  async verifyAllProductsPageVisible() {
    await this.verifyElementVisible(ProductsPage.ALL_PRODUCTS_TITLE);
  }

  async verifyProductsListVisible() {
    const products = await this.findElements(ProductsPage.PRODUCTS_LIST);
    if (products.length === 0) {
      throw new Error("Products list is not visible");
    }
  }

  async clickFirstProductView() {
    await this.click(ProductsPage.FIRST_PRODUCT_VIEW);
  }

  async enterProductNameInSearch(productName) {
    await this.sendKeys(ProductsPage.SEARCH_INPUT, productName);
  }

  async clickSearchButton() {
    await this.click(ProductsPage.SEARCH_BUTTON);
  }

  async verifySearchedProductsVisible() {
    await this.verifyElementVisible(ProductsPage.SEARCHED_PRODUCTS_TITLE);
  }

  async verifySearchedProductsListVisible() {
    const products = await this.findElements(
      ProductsPage.SEARCHED_PRODUCTS_LIST
    );
    if (products.length === 0) {
      throw new Error("Searched products list is not visible");
    }
  }

  async addFirstProductToCart() {
    const addToCartButtons = await this.findElements(
      ProductsPage.ADD_TO_CART_BUTTON
    );
    if (addToCartButtons.length > 0) {
      await addToCartButtons[0].click();
    }
  }

  async addSecondProductToCart() {
    const addToCartButtons = await this.findElements(
      ProductsPage.ADD_TO_CART_BUTTON
    );
    if (addToCartButtons.length > 1) {
      await addToCartButtons[1].click();
    }
  }

  async clickContinueShoppingButton() {
    await this.click(ProductsPage.CONTINUE_SHOPPING_BUTTON);
  }

  async clickViewCartButton() {
    await this.click(ProductsPage.VIEW_CART_BUTTON);
  }

  async searchProduct(productName) {
    await this.enterProductNameInSearch(productName);
    await this.clickSearchButton();
  }

  async addProductsToCart() {
    await this.addFirstProductToCart();
    await this.clickContinueShoppingButton();
    await this.addSecondProductToCart();
  }
}

module.exports = ProductsPage;