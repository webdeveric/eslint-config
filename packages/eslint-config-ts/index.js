'use strict';

module.exports = {
  extends: [
    '@webdeveric/eslint-config',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [ '@typescript-eslint' ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
  },
  overrides: [
    {
      files: [ '*.js' ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
