'use strict';

module.exports = {
  extends: '@webdeveric/eslint-config',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
};
