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
    await page.waitForSelector('#flexCheckChecked');
    await page.click("flexCheckChecked")
    await page.waitForNavigation();
    const html = await page.$eval("body", (e) => e.innerHTML);
    expect(html).toMatch("puppeteer");
  });
});