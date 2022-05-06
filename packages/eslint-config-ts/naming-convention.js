'use strict';

function getNamingConvention(extraRules = []) {
  const namingConvention = [
    {
      format: ['camelCase'],
      selector: 'default',
    },
    {
      format: ['camelCase'],
      leadingUnderscore: 'allow',
      selector: 'parameter',
    },
    {
      format: ['camelCase'],
      leadingUnderscore: 'allow',
      modifiers: ['private'],
      selector: 'memberLike',
    },
    {
      format: ['PascalCase'],
      selector: 'typeLike',
    },
    {
      format: ['PascalCase'],
      selector: 'enumMember',
    },
    {
      format: ['camelCase'],
      selector: 'variable',
    },
    {
      format: ['camelCase', 'UPPER_CASE'],
      modifiers: ['const'],
      selector: 'variable',
    },
    {
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      selector: ['objectLiteralProperty', 'typeProperty'],
    },
    {
      format: null,
      modifiers: ['requiresQuotes'],
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
      modifiers: ['destructured'],
      selector: 'variable',
    },
    ...extraRules,
  ];

  return namingConvention;
}

module.exports = {
  getNamingConvention,
};
