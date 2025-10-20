const TestConfig = require("../config/testConfig");
const HomePage = require("../pages/HomePage");
const ProductsPage = require("../pages/ProductsPage");
const CartPage = require("../pages/CartPage");
const LoginPage = require("../pages/LoginPage");
const SignupPage = require("../pages/SignupPage");
const CheckoutPage = require("../pages/CheckoutPage");

describe("Test Case 15: Place Order: Register while Checkout", function () {
  let driver;
  let homePage;
  let productsPage;
  let cartPage;
  let loginPage;
  let signupPage;
  let checkoutPage;

  before(async function () {
    driver = await TestConfig.createDefaultDriver();
    homePage = new HomePage(driver);
    productsPage = new ProductsPage(driver);
    cartPage = new CartPage(driver);
    loginPage = new LoginPage(driver);
    signupPage = new SignupPage(driver);
    checkoutPage = new CheckoutPage(driver);
  });

  it("should place order by registering during checkout", async function () {
    const testName = "Test User";
    const testEmail = `testuser${Date.now()}@example.com`;
    const testPassword = "password123";

    await homePage.navigateToUrl(TestConfig.BASE_URL);

    await homePage.verifyHomePageIsVisible();

    await homePage.clickProductsButton();
    await productsPage.addProductsToCart();

    await productsPage.clickViewCartButton();

    await cartPage.verifyCartPageDisplayed();

    await cartPage.clickProceedToCheckoutButton();

    await cartPage.clickRegisterLoginButton();

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

    await signupPage.verifyAccountCreatedVisible();
    await signupPage.clickContinueButton();

    await homePage.verifyLoggedInAs(testName);

    await homePage.clickCartButton();

    await cartPage.clickProceedToCheckoutButton();

    await checkoutPage.verifyAddressDetailsVisible();
    await checkoutPage.verifyReviewOrderVisible();

    const comment = "Please deliver during business hours.";
    await checkoutPage.enterComment(comment);
    await checkoutPage.clickPlaceOrderButton();

    const nameOnCard = "Test User";
    const cardNumber = "4111111111111111";
    const cvc = "123";
    const expiryMonth = "12";
    const expiryYear = "2025";
    await checkoutPage.fillPaymentDetails(
      nameOnCard,
      cardNumber,
      cvc,
      expiryMonth,
      expiryYear
    );

    await checkoutPage.clickPayAndConfirmOrderButton();

    await checkoutPage.verifyOrderSuccessMessage();

    await homePage.clickDeleteAccountButton();

    await homePage.verifyAccountDeleted();
    await homePage.clickContinueButton();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });
});