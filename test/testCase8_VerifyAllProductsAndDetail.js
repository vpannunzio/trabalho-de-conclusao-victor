const TestConfig = require("../config/testConfig");
const HomePage = require("../pages/HomePage");
const ProductDetailPage = require("../pages/ProductDetailPage");
const ProductsPage = require("../pages/ProductsPage");

describe("Test Case 8: Verify All Products and product detail page", function () {
  let driver;
  let homePage;
  let productsPage;
  let productDetailPage;

  before(async function () {
    driver = await TestConfig.createDefaultDriver();
    homePage = new HomePage(driver);
    productsPage = new ProductsPage(driver);
    productDetailPage = new ProductDetailPage(driver);
  });

  it("should verify all products and product detail page", async function () {
    await homePage.navigateToUrl(TestConfig.BASE_URL);

    await homePage.verifyHomePageIsVisible();

    await homePage.clickProductsButton();

    await productsPage.verifyAllProductsPageVisible();

    await productsPage.verifyProductsListVisible();

    await productsPage.clickFirstProductView();

    await productDetailPage.verifyProductDetailVisible();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });
});