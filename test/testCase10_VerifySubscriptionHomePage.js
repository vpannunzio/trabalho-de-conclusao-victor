const TestConfig = require("../config/testConfig");
const HomePage = require("../pages/HomePage");

describe("Test Case 10: Verify Subscription in home page", function () {
  let driver;
  let homePage;

  before(async function () {
    driver = await TestConfig.createDefaultDriver();
    homePage = new HomePage(driver);
  });

  it("should verify subscription functionality on home page", async function () {
    await homePage.navigateToUrl(TestConfig.BASE_URL);

    await homePage.verifyHomePageIsVisible();

    await homePage.scrollToFooter();

    await homePage.verifySubscriptionText();

    const email = `testuser${Date.now()}@example.com`;
    await homePage.enterSubscriptionEmail(email);
    await homePage.clickSubscriptionArrowButton();

    await homePage.verifySubscriptionSuccessMessage();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });
});