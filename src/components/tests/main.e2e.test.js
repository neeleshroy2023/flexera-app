// __tests__/main.e2e.test.js
const puppeteer = require("puppeteer");

describe("Google", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: "new"
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display "google" text on page', async () => {
    await page.goto("https://localhost:1234");
    const el = await page.waitForSelector('#flexCheckChecked');

    await el.click("flexCheckChecked")
  });
});