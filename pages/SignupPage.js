const BasePage = require("./BasePage");
const { By } = require("selenium-webdriver");

class SignupPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  static ENTER_ACCOUNT_INFO_TITLE = By.xpath(
    "//h2[contains(text(), 'ENTER ACCOUNT INFORMATION')]"
  );
  static ACCOUNT_CREATED_TITLE = By.xpath(
    "//h2[contains(text(), 'ACCOUNT CREATED!')]"
  );
  static TITLE_MR_RADIO = By.id("id_gender1");
  static TITLE_MRS_RADIO = By.id("id_gender2");
  static PASSWORD_INPUT = By.id("password");
  static DAY_DROPDOWN = By.id("days");
  static MONTH_DROPDOWN = By.id("months");
  static YEAR_DROPDOWN = By.id("years");
  static NEWSLETTER_CHECKBOX = By.id("newsletter");
  static SPECIAL_OFFERS_CHECKBOX = By.id("optin");
  static FIRST_NAME_INPUT = By.id("first_name");
  static LAST_NAME_INPUT = By.id("last_name");
  static COMPANY_INPUT = By.id("company");
  static ADDRESS_INPUT = By.id("address1");
  static ADDRESS2_INPUT = By.id("address2");
  static COUNTRY_DROPDOWN = By.id("country");
  static STATE_INPUT = By.id("state");
  static CITY_INPUT = By.id("city");
  static ZIPCODE_INPUT = By.id("zipcode");
  static MOBILE_NUMBER_INPUT = By.id("mobile_number");
  static CREATE_ACCOUNT_BUTTON = By.xpath(
    "//button[@data-qa='create-account']"
  );

  async verifyEnterAccountInfoVisible() {
    await this.verifyElementVisible(SignupPage.ENTER_ACCOUNT_INFO_TITLE);
  }

  async verifyAccountCreatedVisible() {
    await this.verifyElementVisible(SignupPage.ACCOUNT_CREATED_TITLE);
  }

  async selectTitle(title) {
    if (title === "Mr") {
      await this.click(SignupPage.TITLE_MR_RADIO);
    } else if (title === "Mrs") {
      await this.click(SignupPage.TITLE_MRS_RADIO);
    }
  }

  async enterPassword(password) {
    await this.sendKeys(SignupPage.PASSWORD_INPUT, password);
  }

  async selectDateOfBirth(day, month, year) {
    const { Select } = require("selenium-webdriver");

    const dayElement = await this.findElement(SignupPage.DAY_DROPDOWN);
    const daySelect = new Select(dayElement);
    await daySelect.selectByValue(day);

    const monthElement = await this.findElement(SignupPage.MONTH_DROPDOWN);
    const monthSelect = new Select(monthElement);
    await monthSelect.selectByValue(month);

    const yearElement = await this.findElement(SignupPage.YEAR_DROPDOWN);
    const yearSelect = new Select(yearElement);
    await yearSelect.selectByValue(year);
  }

  async selectNewsletterCheckbox() {
    const checkbox = await this.findElement(SignupPage.NEWSLETTER_CHECKBOX);
    const isSelected = await checkbox.isSelected();
    if (!isSelected) {
      await this.click(SignupPage.NEWSLETTER_CHECKBOX);
    }
  }

  async selectSpecialOffersCheckbox() {
    const checkbox = await this.findElement(SignupPage.SPECIAL_OFFERS_CHECKBOX);
    const isSelected = await checkbox.isSelected();
    if (!isSelected) {
      await this.click(SignupPage.SPECIAL_OFFERS_CHECKBOX);
    }
  }

  async enterFirstName(firstName) {
    await this.sendKeys(SignupPage.FIRST_NAME_INPUT, firstName);
  }

  async enterLastName(lastName) {
    await this.sendKeys(SignupPage.LAST_NAME_INPUT, lastName);
  }

  async enterCompany(company) {
    await this.sendKeys(SignupPage.COMPANY_INPUT, company);
  }

  async enterAddress(address) {
    await this.sendKeys(SignupPage.ADDRESS_INPUT, address);
  }

  async enterAddress2(address2) {
    await this.sendKeys(SignupPage.ADDRESS2_INPUT, address2);
  }

  async selectCountry(country) {
    const { Select } = require("selenium-webdriver");
    const countryElement = await this.findElement(SignupPage.COUNTRY_DROPDOWN);
    const countrySelect = new Select(countryElement);
    await countrySelect.selectByVisibleText(country);
  }

  async enterState(state) {
    await this.sendKeys(SignupPage.STATE_INPUT, state);
  }

  async enterCity(city) {
    await this.sendKeys(SignupPage.CITY_INPUT, city);
  }

  async enterZipcode(zipcode) {
    await this.sendKeys(SignupPage.ZIPCODE_INPUT, zipcode);
  }

  async enterMobileNumber(mobileNumber) {
    await this.sendKeys(SignupPage.MOBILE_NUMBER_INPUT, mobileNumber);
  }

  async clickCreateAccountButton() {
    await this.click(SignupPage.CREATE_ACCOUNT_BUTTON);
  }

  async fillAccountInformation(accountData) {
    await this.selectTitle(accountData.title);
    await this.enterPassword(accountData.password);
    await this.selectDateOfBirth(
      accountData.day,
      accountData.month,
      accountData.year
    );
    await this.selectNewsletterCheckbox();
    await this.selectSpecialOffersCheckbox();
    await this.enterFirstName(accountData.firstName);
    await this.enterLastName(accountData.lastName);
    await this.enterCompany(accountData.company);
    await this.enterAddress(accountData.address);
    await this.enterAddress2(accountData.address2);
    await this.selectCountry(accountData.country);
    await this.enterState(accountData.state);
    await this.enterCity(accountData.city);
    await this.enterZipcode(accountData.zipcode);
    await this.enterMobileNumber(accountData.mobileNumber);
  }
}

module.exports = SignupPage;