const TestConfig = require("../config/testConfig");
const HomePage = require("../pages/HomePage");
const ProductsPage = require("../pages/ProductsPage");

describe("Test Case 9: Search Product", function () {
  let driver;
  let homePage;
  let productsPage;

  before(async function () {
    driver = await TestConfig.createDefaultDriver();
    homePage = new HomePage(driver);
    productsPage = new ProductsPage(driver);
  });

  it("should search for products successfully", async function () {
    await homePage.navigateToUrl(TestConfig.BASE_URL);

    await homePage.verifyHomePageIsVisible();

    await homePage.clickProductsButton();

    await productsPage.verifyAllProductsPageVisible();

    const productName = "Blue Top"; // Common product name on the site
    await productsPage.searchProduct(productName);

    await productsPage.verifySearchedProductsVisible();

    await productsPage.verifySearchedProductsListVisible();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });
});