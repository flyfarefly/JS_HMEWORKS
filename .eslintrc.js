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
    'no-continue': 'off',
    'no-throw-literal': 'off',
    'no-console': 'off',
    'wrap-iife': ['error', 'any'], // Ensures IIFEs are wrapped in parentheses
    'no-extra-parens': ['error', 'functions'],
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'comma-dangle': 'off',
    'curly': 'off',
    'no-alert': 'error',
    'operator-linebreak': 'error',
    'no-undefined': 'error',
    'nonblock-statement-body-position': 'off',
    'accessor-pairs': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          AssignmentExpression: true,
          ArrowFunctionExpression: true,
          CallExpression: true,
          VariableDeclarator: true,
        },
      },
    ],
  },
  ignorePatterns: ['.eslintrc.js'],
};
