const TestConfig = require("../config/testConfig");
const ContactUsPage = require("../pages/ContactUsPage");
const HomePage = require("../pages/HomePage");
const fs = require("fs");
const path = require("path");

describe("Test Case 6: Contact Us Form", function () {
  let driver;
  let homePage;
  let contactUsPage;
  let testFilePath;

  before(async function () {
    driver = await TestConfig.createDefaultDriver();
    homePage = new HomePage(driver);
    contactUsPage = new ContactUsPage(driver);

    testFilePath = await createTestFile();
  });

  async function createTestFile() {
    const tempDir = path.join(__dirname, "../temp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }
    const filePath = path.join(tempDir, "test_upload.txt");
    fs.writeFileSync(filePath, "This is a test file for upload");
    return filePath;
  }

  it("should submit contact form successfully", async function () {
    await homePage.navigateToUrl(TestConfig.BASE_URL);

    await homePage.verifyHomePageIsVisible();

    await homePage.clickContactUsButton();

    await contactUsPage.verifyGetInTouchVisible();

    const name = "Test User";
    const email = "testuser@example.com";
    const subject = "Test Subject";
    const message = "This is a test message for the contact form.";

    await contactUsPage.fillContactForm(
      name,
      email,
      subject,
      message,
      testFilePath
    );


    await contactUsPage.clickSubmitButton();

    await contactUsPage.acceptAlert();

    await contactUsPage.verifySuccessMessage();

    await contactUsPage.clickHomeButton();
    await homePage.verifyHomePageIsVisible();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }

    if (testFilePath && fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });
});