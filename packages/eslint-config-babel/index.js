module.exports = {
  extends: '@webdeveric/eslint-config',
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
