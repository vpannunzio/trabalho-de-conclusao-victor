const BasePage = require("./BasePage");
const { By } = require("selenium-webdriver");

class LoginPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  static NEW_USER_SIGNUP_TITLE = By.xpath(
    "//h2[contains(text(), 'New User Signup!')]"
  );
  static LOGIN_TO_ACCOUNT_TITLE = By.xpath(
    "//h2[contains(text(), 'Login to your account')]"
  );
  static SIGNUP_NAME_INPUT = By.name("name");
  static SIGNUP_EMAIL_INPUT = By.xpath("//input[@data-qa='signup-email']");
  static SIGNUP_BUTTON = By.xpath("//button[@data-qa='signup-button']");
  static LOGIN_EMAIL_INPUT = By.xpath("//input[@data-qa='login-email']");
  static LOGIN_PASSWORD_INPUT = By.xpath("//input[@data-qa='login-password']");
  static LOGIN_BUTTON = By.xpath("//button[@data-qa='login-button']");
  static LOGIN_ERROR_MESSAGE = By.xpath(
    "//p[contains(text(), 'Your email or password is incorrect!')]"
  );
  static EMAIL_EXISTS_ERROR = By.xpath(
    "//p[contains(text(), 'Email Address already exist!')]"
  );

  async verifyNewUserSignupVisible() {
    await this.verifyElementVisible(LoginPage.NEW_USER_SIGNUP_TITLE);
  }

  async verifyLoginToAccountVisible() {
    await this.verifyElementVisible(LoginPage.LOGIN_TO_ACCOUNT_TITLE);
  }

  async enterSignupName(name) {
    await this.sendKeys(LoginPage.SIGNUP_NAME_INPUT, name);
  }

  async enterSignupEmail(email) {
    await this.sendKeys(LoginPage.SIGNUP_EMAIL_INPUT, email);
  }

  async clickSignupButton() {
    await this.click(LoginPage.SIGNUP_BUTTON);
  }

  async enterLoginEmail(email) {
    await this.sendKeys(LoginPage.LOGIN_EMAIL_INPUT, email);
  }

  async enterLoginPassword(password) {
    await this.sendKeys(LoginPage.LOGIN_PASSWORD_INPUT, password);
  }

  async clickLoginButton() {
    await this.click(LoginPage.LOGIN_BUTTON);
  }

  async verifyLoginErrorMessage() {
    await this.verifyElementVisible(LoginPage.LOGIN_ERROR_MESSAGE);
  }

  async verifyEmailExistsErrorMessage() {
    await this.verifyElementVisible(LoginPage.EMAIL_EXISTS_ERROR);
  }

  async signupWithExistingEmail(name, email) {
    await this.enterSignupName(name);
    await this.enterSignupEmail(email);
    await this.clickSignupButton();
  }

  async loginWithCredentials(email, password) {
    await this.enterLoginEmail(email);
    await this.enterLoginPassword(password);
    await this.clickLoginButton();
  }
}

module.exports = LoginPage;