'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const ALWAYS = 'always';
const AS_NEEDED = 'as-needed';
const NEVER = 'never';

module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prefer-const': [
      ERROR,
      {
        destructuring: 'all',
      },
    ],
    'sort-imports': [
      ERROR,
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
        allowSeparatedGroups: true,
      },
    ],
    'no-console': OFF,
    quotes: [
      WARN,
      'single',
    ],
    'eol-last': ERROR,
    'no-multiple-empty-lines': [
      WARN,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    indent: [
      ERROR,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-mixed-requires': OFF,
    'no-underscore-dangle': OFF,
    strict: [
      ERROR,
      'safe',
    ],
    'no-var': ERROR,
    'no-unused-vars': ERROR,
    semi: [
      ERROR,
      ALWAYS,
    ],
    'no-use-before-define': ERROR,
    'no-undef': ERROR,
    'comma-spacing': [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      ERROR,
      'last',
    ],
    'comma-dangle': [
      WARN,
      'always-multiline',
    ],
    'func-call-spacing': [
      ERROR,
      NEVER,
    ],
    'new-parens': WARN,
    'padded-blocks': [
      ERROR,
      NEVER,
    ],
    'lines-between-class-members': [
      ERROR,
      ALWAYS,
    ],
    'padding-line-between-statements': [
      ERROR,
      {
        blankLine: ALWAYS,
        prev: '*',
        next: 'return',
      },
      {
        blankLine: ALWAYS,
        prev: [
          'const',
          'let',
          'var',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: [
          'const',
          'let',
          'var',
        ],
      },
      {
        blankLine: ALWAYS,
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'space-before-function-paren': [
      ERROR,
      {
        anonymous: NEVER,
        named: NEVER,
        asyncArrow: ALWAYS,
      },
    ],
    'arrow-parens': [
      WARN,
      AS_NEEDED,
    ],
    'arrow-spacing': [
      ERROR,
      {
        before: true,
        after: true,
      },
    ],
    'key-spacing': [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      ERROR,
      {
        before: true,
        after: true,
      },
    ],
    'array-bracket-newline': [
      WARN,
      {
        multiline: true,
      },
    ],
    'space-infix-ops': [
      ERROR,
      {
        int32Hint: true,
      },
    ],
    'space-unary-ops': [
      ERROR,
      {
        words: true,
        nonwords: false,
        overrides: {
          '!': true,
        },
      },
    ],
    'spaced-comment': [
      ERROR,
      ALWAYS,
    ],
    'switch-colon-spacing': [
      ERROR,
      {
        after: true,
        before: false,
      },
    ],
    'template-tag-spacing': [
      ERROR,
      NEVER,
    ],
    'space-in-parens': OFF,
    'array-bracket-spacing': [
      WARN,
      ALWAYS,
    ],
    'computed-property-spacing': [
      WARN,
      ALWAYS,
      {
        enforceForClassMembers: true,
      },
    ],
    curly: [
      ERROR,
      'all',
    ],
    'object-curly-newline': [
      ERROR,
      {
        ObjectExpression: {
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'object-curly-spacing': [
      WARN,
      ALWAYS,
    ],
    'object-property-newline': [
      ERROR,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'quote-props': [
      WARN,
      AS_NEEDED,
    ],
  },
};
