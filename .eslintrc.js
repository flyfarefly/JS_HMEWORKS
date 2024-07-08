module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    quotes: ['off', 'single'],
    'no-console': 'off',
    'wrap-iife': ['off', 'any'], // Ensures IIFEs are wrapped in parentheses
    'no-extra-parens': ['error', 'functions'],
    'no-restricted-syntax': 'off',
    'operator-linebreak': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
};
