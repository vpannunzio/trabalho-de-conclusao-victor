const TestConfig = require("../config/testConfig");
const HomePage = require("../pages/HomePage");
const LoginPage = require("../pages/LoginPage");
const SignupPage = require("../pages/SignupPage");

describe("Test Case 5: Register User with existing email", function () {
  let driver;
  let homePage;
  let loginPage;
  let signupPage;
  let existingEmail;
  let testName;

  before(async function () {
    driver = await TestConfig.createDefaultDriver();
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    signupPage = new SignupPage(driver);

    testName = "Test User";
    existingEmail = `existinguser${Date.now()}@example.com`;

    await createExistingUser();
  });

  async function createExistingUser() {
    await homePage.navigateToUrl(TestConfig.BASE_URL);
    await homePage.clickSignupLoginButton();
    await loginPage.enterSignupName(testName);
    await loginPage.enterSignupEmail(existingEmail);
    await loginPage.clickSignupButton();
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
    await signupPage.clickContinueButton();
    await homePage.clickDeleteAccountButton();
    await homePage.clickContinueButton();
  }

  it("should show error message for existing email", async function () {
    await homePage.navigateToUrl(TestConfig.BASE_URL);

    await homePage.verifyHomePageIsVisible();

    await homePage.clickSignupLoginButton();

    await loginPage.verifyNewUserSignupVisible();

    const newName = "New Test User";
    await loginPage.enterSignupName(newName);
    await loginPage.enterSignupEmail(existingEmail);

    await loginPage.clickSignupButton();

    await loginPage.verifyEmailExistsErrorMessage();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });
});