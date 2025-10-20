const BasePage = require("./BasePage");
const { By } = require("selenium-webdriver");

class ContactUsPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  static GET_IN_TOUCH_TITLE = By.xpath(
    "//h2[contains(text(), 'GET IN TOUCH')]"
  );
  static NAME_INPUT = By.name("name");
  static EMAIL_INPUT = By.name("email");
  static SUBJECT_INPUT = By.name("subject");
  static MESSAGE_INPUT = By.name("message");
  static UPLOAD_FILE_INPUT = By.name("upload_file");
  static SUBMIT_BUTTON = By.xpath("//input[@data-qa='submit-button']");
  static SUCCESS_MESSAGE = By.xpath(
    "//div[contains(text(), 'Success! Your details have been submitted successfully.')]"
  );
  static HOME_BUTTON = By.xpath("//a[contains(text(), 'Home')]");

  async verifyGetInTouchVisible() {
    await this.verifyElementVisible(ContactUsPage.GET_IN_TOUCH_TITLE);
  }

  async enterName(name) {
    await this.sendKeys(ContactUsPage.NAME_INPUT, name);
  }

  async enterEmail(email) {
    await this.sendKeys(ContactUsPage.EMAIL_INPUT, email);
  }

  async enterSubject(subject) {
    await this.sendKeys(ContactUsPage.SUBJECT_INPUT, subject);
  }

  async enterMessage(message) {
    await this.sendKeys(ContactUsPage.MESSAGE_INPUT, message);
  }

  async uploadFile(filePath) {
    const fileInput = await this.findElement(ContactUsPage.UPLOAD_FILE_INPUT);
    await fileInput.sendKeys(filePath);
  }

  async clickSubmitButton() {
    await this.click(ContactUsPage.SUBMIT_BUTTON);
  }

  async acceptAlert() {
    await this.driver.switchTo().alert().accept();
  }

  async verifySuccessMessage() {
    await this.verifyElementVisible(ContactUsPage.SUCCESS_MESSAGE);
  }

  async clickHomeButton() {
    await this.click(ContactUsPage.HOME_BUTTON);
  }

  async fillContactForm(name, email, subject, message, filePath) {
    await this.enterName(name);
    await this.enterEmail(email);
    await this.enterSubject(subject);
    await this.enterMessage(message);
    await this.uploadFile(filePath);
  }
}

module.exports = ContactUsPage;