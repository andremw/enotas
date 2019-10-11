module.exports = {
  roots: ["<rootDir>/test"],
  testRegex: "(.*|(\\.|/)(test|spec))\\.(t|j)s$",
  moduleFileExtensions: ["ts", "js"],
  collectCoverageFrom: ["**/*.ts", "**/*.js"],
  coverageReporters: ["html", "lcov", "text"]
};
