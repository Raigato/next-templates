// jest.config.js
module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts",
    // "<rootDir>/src/__tests__/mocks/mymock.ts",
  ],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testRegex: "(/__tests__/.*.(spec|test)).(j|t)sx?$",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
}
