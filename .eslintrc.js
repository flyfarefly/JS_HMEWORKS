module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
    "wrap-iife": ["error", "any"],  // Ensures IIFEs are wrapped in parentheses
    "no-extra-parens": ["error", "functions"],  // Disallows unnecessary parentheses around functions
    "no-unused-expressions": "error"  // Errors on unused expressions which might be misused IIFEs
  },
  ignorePatterns: [".eslintrc.js"],
};
