// __tests__/main.e2e.test.js
const puppeteer = require("puppeteer");

describe("Main E2E", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should check the checkbox', async () => {
    await page.goto("http://localhost:1234");
    const el = await page.waitForSelector('#flexCheckChecked');
    await el.click("flexCheckChecked")
  });
});