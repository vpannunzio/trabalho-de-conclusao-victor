const TestConfig = require("../config/testConfig");
const HomePage = require("../pages/HomePage");
const LoginPage = require("../pages/LoginPage");
const SignupPage = require("../pages/SignupPage");

describe("Test Case 4: Logout User", function () {
  let driver;
  let homePage;
  let loginPage;
  let signupPage;
  let testEmail;
  let testPassword;
  let testName;

  before(async function () {
    driver = await TestConfig.createDefaultDriver();
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    signupPage = new SignupPage(driver);

    testName = "Test User";
    testEmail = `testuser${Date.now()}@example.com`;
    testPassword = "password123";

    await createTestUser();
  });

  async function createTestUser() {
    await homePage.navigateToUrl(TestConfig.BASE_URL);
    await homePage.clickSignupLoginButton();
    await loginPage.enterSignupName(testName);
    await loginPage.enterSignupEmail(testEmail);
    await loginPage.clickSignupButton();
    await signupPage.fillAccountInformation({
      title: "Mr",
      password: testPassword,
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
    await signupPage.clickContinueButton();
    await homePage.clickDeleteAccountButton();
    await homePage.clickContinueButton();
  }

  it("should logout user successfully", async function () {
    await homePage.navigateToUrl(TestConfig.BASE_URL);

    await homePage.verifyHomePageIsVisible();

    await homePage.clickSignupLoginButton();

    await loginPage.verifyLoginToAccountVisible();

    await loginPage.loginWithCredentials(testEmail, testPassword);


    await homePage.verifyLoggedInAs(testName);

    await homePage.clickLogoutButton();

    await loginPage.verifyLoginToAccountVisible();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });
});