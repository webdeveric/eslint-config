'use strict';

module.exports = {
  extends: [
    '@webdeveric/eslint-config',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: [ '*.js' ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: [ 'camelCase' ],
        selector: 'default',
      },
      {
        format: [ 'camelCase' ],
        leadingUnderscore: 'allow',
        selector: 'parameter',
      },
      {
        format: [ 'camelCase' ],
        leadingUnderscore: 'allow',
        modifiers: [ 'private' ],
        selector: 'memberLike',
      },
      {
        format: [ 'PascalCase' ],
        selector: 'typeLike',
      },
      {
        format: [ 'PascalCase' ],
        selector: 'enumMember',
      },
      {
        format: [ 'camelCase' ],
        selector: 'variable',
      },
      {
        format: [ 'camelCase', 'UPPER_CASE' ],
        modifiers: [ 'const' ],
        selector: 'variable',
      },
      {
        format: null,
        modifiers: [ 'requiresQuotes' ],
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
      },
      {
        format: null,
        modifiers: [ 'destructured' ],
        selector: 'variable',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    camelcase: 'off',
    'no-use-before-define': 'off',
  },
};
