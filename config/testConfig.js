const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const edge = require("selenium-webdriver/edge");

class TestConfig {
  static BASE_URL = "http://automationexercise.com";
  static IMPLICIT_WAIT = 10000;
  static PAGE_LOAD_TIMEOUT = 30000;

  static async createDriver(browser = "chrome") {
    let driver;

    switch (browser.toLowerCase()) {
    case "chrome": {
      const chromeOptions = new chrome.Options();
      chromeOptions.addArguments("--headless");
      chromeOptions.addArguments("--no-sandbox");
      chromeOptions.addArguments("--disable-dev-shm-usage");
      chromeOptions.addArguments("--disable-gpu");
      chromeOptions.addArguments("--window-size=1920,1080");

      driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(chromeOptions)
        .build();
      break;
    }

    case "firefox": {
      const firefoxOptions = new firefox.Options();
      firefoxOptions.addArguments("--headless");

      driver = await new Builder()
        .forBrowser("firefox")
        .setFirefoxOptions(firefoxOptions)
        .build();
      break;
    }

    case "edge": {
      const edgeOptions = new edge.Options();
      edgeOptions.addArguments("--headless");
      edgeOptions.addArguments("--no-sandbox");
      edgeOptions.addArguments("--disable-dev-shm-usage");

      driver = await new Builder()
        .forBrowser("MicrosoftEdge")
        .setEdgeOptions(edgeOptions)
        .build();
      break;
    }

    default:
      throw new Error(`Unsupported browser: ${browser}`);
    }

    await driver.manage().setTimeouts({
      implicit: this.IMPLICIT_WAIT,
      pageLoad: this.PAGE_LOAD_TIMEOUT
    });

    return driver;
  }

  static async createDefaultDriver() {
    const browser = process.env.BROWSER || "chrome";
    return await this.createDriver(browser);
  }
}

module.exports = TestConfig;
