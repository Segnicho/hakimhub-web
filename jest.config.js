module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
  // testMatch: "__test__/**/*.[jt]s?(x),  **/?(*.)+(spec|test).[tj]s?(x)",
