const TestConfig = require("../config/testConfig");
const HomePage = require("../pages/HomePage");
const LoginPage = require("../pages/LoginPage");

describe("Test Case 3: Login User with incorrect email and password", function () {
  let driver;
  let homePage;
  let loginPage;

  before(async function () {
    driver = await TestConfig.createDefaultDriver();
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
  });

  it("should show error message for incorrect credentials", async function () {
    await homePage.navigateToUrl(TestConfig.BASE_URL);

    await homePage.verifyHomePageIsVisible();

    await homePage.clickSignupLoginButton();

    await loginPage.verifyLoginToAccountVisible();

    const incorrectEmail = "incorrect@example.com";
    const incorrectPassword = "wrongpassword";
    await loginPage.enterLoginEmail(incorrectEmail);
    await loginPage.enterLoginPassword(incorrectPassword);

    await loginPage.clickLoginButton();

    await loginPage.verifyLoginErrorMessage();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });
});