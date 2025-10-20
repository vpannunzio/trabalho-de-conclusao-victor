const TestConfig = require("../config/testConfig");
const HomePage = require("../pages/HomePage");
const LoginPage = require("../pages/LoginPage");
const SignupPage = require("../pages/SignupPage");

describe("Test Case 1: Register User", function () {
  let driver;
  let homePage;
  let loginPage;
  let signupPage;

  before(async function () {
    driver = await TestConfig.createDefaultDriver();
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    signupPage = new SignupPage(driver);
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it("should register a new user successfully", async function () {
    await homePage.navigateToUrl(TestConfig.BASE_URL);

    await homePage.verifyHomePageIsVisible();

    await homePage.clickSignupLoginButton();

    await loginPage.verifyNewUserSignupVisible();

    const name = "Test User";
    const email = `testuser${Date.now()}@example.com`;
    await loginPage.enterSignupName(name);
    await loginPage.enterSignupEmail(email);

    await loginPage.clickSignupButton();

    await signupPage.verifyEnterAccountInfoVisible();

    await signupPage.fillAccountInformation({
      title: "Mr",
      password: "password123",
      day: "15",
      month: "6",
      year: "1990",
      firstName: "Test",
      lastName: "User",
      company: "Test Company",
      address: "123 Test Street",
      address2: "Apt 1",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      zipcode: "90210",
      mobileNumber: "1234567890"
    });

    await signupPage.clickCreateAccountButton();

    await signupPage.verifyAccountCreatedVisible();

    await signupPage.clickContinueButton();

    await homePage.verifyLoggedInAs(name);

    await homePage.clickDeleteAccountButton();

    await homePage.verifyAccountDeleted();
    await homePage.clickContinueButton();
  });
});