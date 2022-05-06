'use strict';

const { getNamingConvention } = require('./naming-convention.js');

module.exports = {
  extends: [
    '@webdeveric/eslint-config',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          ...getNamingConvention([
            {
              format: ['camelCase', 'PascalCase'],
              selector: ['variable'],
              types: ['function'],
            },
          ]),
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/naming-convention': ['error', ...getNamingConvention()],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    camelcase: 'off',
    'no-use-before-define': 'off',
  },
};
