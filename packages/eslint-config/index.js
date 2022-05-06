'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const ALWAYS = 'always';
const AS_NEEDED = 'as-needed';
const NEVER = 'never';

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'array-bracket-newline': [
      WARN,
      {
        multiline: true,
      },
    ],
    'array-bracket-spacing': [WARN, ALWAYS],
    'arrow-parens': [WARN, AS_NEEDED],
    'arrow-spacing': [
      ERROR,
      {
        after: true,
        before: true,
      },
    ],
    'comma-dangle': [WARN, 'always-multiline'],
    'comma-spacing': [
      ERROR,
      {
        after: true,
        before: false,
      },
    ],
    'comma-style': [ERROR, 'last'],
    'computed-property-spacing': [
      WARN,
      ALWAYS,
      {
        enforceForClassMembers: true,
      },
    ],
    curly: [ERROR, 'all'],
    'eol-last': ERROR,
    'func-call-spacing': [ERROR, NEVER],
    'id-length': [
      ERROR,
      {
        exceptions: ['_', 'i', 'j'],
        min: 2,
        properties: 'never',
      },
    ],
    indent: [
      ERROR,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'key-spacing': [
      ERROR,
      {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      ERROR,
      {
        after: true,
        before: true,
      },
    ],
    'lines-between-class-members': [ERROR, ALWAYS],
    'new-parens': WARN,
    'no-console': OFF,
    'no-mixed-requires': OFF,
    'no-multiple-empty-lines': [
      WARN,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-promise-executor-return': ERROR,
    'no-throw-literal': ERROR,
    'no-undef': ERROR,
    'no-underscore-dangle': OFF,
    'no-unused-vars': ERROR,
    'no-use-before-define': ERROR,
    'no-var': ERROR,
    'object-curly-newline': [
      ERROR,
      {
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
        },
        ImportDeclaration: {
          minProperties: 3,
          multiline: true,
        },
        ObjectExpression: {
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': [WARN, ALWAYS],
    'object-property-newline': [
      ERROR,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'padded-blocks': [ERROR, NEVER],
    'padding-line-between-statements': [
      ERROR,
      {
        blankLine: ALWAYS,
        next: 'return',
        prev: '*',
      },
      {
        blankLine: ALWAYS,
        next: '*',
        prev: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var'],
      },
      {
        blankLine: ALWAYS,
        next: '*',
        prev: 'directive',
      },
      {
        blankLine: 'any',
        next: 'directive',
        prev: 'directive',
      },
    ],
    'prefer-const': [
      ERROR,
      {
        destructuring: 'all',
      },
    ],
    'prefer-promise-reject-errors': ERROR,
    'quote-props': [WARN, AS_NEEDED],
    quotes: [WARN, 'single'],
    semi: [ERROR, ALWAYS],
    'sort-imports': [
      ERROR,
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys': [
      OFF,
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: true,
      },
    ],
    'space-before-function-paren': [
      ERROR,
      {
        anonymous: NEVER,
        asyncArrow: ALWAYS,
        named: NEVER,
      },
    ],
    'space-in-parens': OFF,
    'space-infix-ops': [
      ERROR,
      {
        int32Hint: true,
      },
    ],
    'space-unary-ops': [
      ERROR,
      {
        nonwords: false,
        overrides: {
          '!': true,
        },
        words: true,
      },
    ],
    'spaced-comment': [ERROR, ALWAYS],
    strict: [ERROR, 'safe'],
    'switch-colon-spacing': [
      ERROR,
      {
        after: true,
        before: false,
      },
    ],
    'template-tag-spacing': [ERROR, NEVER],
  },
};
