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
    'no-console': 'off',
    'wrap-iife': ['error', 'any'], // Ensures IIFEs are wrapped in parentheses
    'no-extra-parens': ['error', 'functions'],
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "comma-dangle": "error",
    "curly": "error",
    "no-alert": "error",
    "operator-linebreak": "error",
    "no-undefined": "error",
    "nonblock-statement-body-position": "error",
    "accessor-pairs": "error",
    "no-multi-spaces": ["error", {
      "ignoreEOLComments": true,
      "exceptions": {
        "AssignmentExpression": true,
        "ArrowFunctionExpression": true,
        "CallExpression": true,
        "VariableDeclarator": true
      }
    }
    ],

  },
  ignorePatterns: ['.eslintrc.js'],
};
