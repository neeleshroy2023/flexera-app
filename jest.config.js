module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  // Commenting this for E2E to run, if you want to run unit tests, uncomment this.
  // testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/tests/**/*.test.js"],
  verbose: true,
  preset: "jest-puppeteer"
}