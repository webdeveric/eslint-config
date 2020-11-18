module.exports = {
  extends: [
    '@webdeveric/eslint-config',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [ '@typescript-eslint' ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: [ '*.js' ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
