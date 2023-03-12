/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // or 'jsdom'
  moduleNameMapper: {
    "\\.(svg|css)$": "<rootDir>/__mocks__/fileMock.js"
  },
};