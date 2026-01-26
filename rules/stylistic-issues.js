'use strict';

// unchanged = not part of eslint.style/rules

module.exports = {
  '@stylistic/indent': ['off'],
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/brace-style': [
    'error',
    '1tbs',
    {
      allowSingleLine: true,
    },
  ],
  camelcase: ['error'], // unchanged
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/comma-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/eol-last': ['error'],
  '@stylistic/function-call-spacing': ['error', 'never'],
  '@stylistic/key-spacing': [
    'error',
    {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum',
    },
  ],
  '@stylistic/keyword-spacing': [
    'error',
    {
      before: true,
      after: true,
      overrides: {
        function: {
          after: false,
        },
      },
    },
  ],
  '@stylistic/linebreak-style': ['error', 'unix'],
  '@stylistic/max-len': [
    'error',
    {
      code: 80,
      ignoreUrls: true,
    },
  ],
  'max-nested-callbacks': [ // unchanged
    'error',
    {
      max: 5,
    },
  ],
  'new-cap': [ // unchanged
    'error',
    {
      newIsCap: true,
      capIsNew: true,
      properties: true,
    },
  ],
  '@stylistic/new-parens': ['error'],
  'no-lonely-if': ['error'], // unchanged
  '@stylistic/no-trailing-spaces': ['error'],
  'no-unneeded-ternary': ['error'], // unchanged
  'no-nested-ternary': ['error'], // unchanged
  '@stylistic/no-whitespace-before-property': ['error'],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  'operator-assignment': ['error', 'always'], // unchanged
  '@stylistic/operator-linebreak': [
    'error',
    'after',
    { overrides: { '?': 'before', ':': 'before' } },
  ],
  '@stylistic/quotes': [
    'error',
    'single',
    {
      allowTemplateLiterals: true,
    },
  ],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/semi-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],
  '@stylistic/space-before-blocks': ['error', 'always'],
  '@stylistic/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  '@stylistic/space-in-parens': ['error', 'never'],
  '@stylistic/space-infix-ops': ['error'],
  '@stylistic/space-unary-ops': [
    'error',
    {
      words: true,
      nonwords: false,
      overrides: {
        typeof: false,
      },
    },
  ],
  '@stylistic/no-extra-parens': [
    'error',
    'all',
    {
      returnAssign: false,
      nestedBinaryExpressions: false,
      enforceForArrowConditionals: false,
      ternaryOperandBinaryExpressions: false 
    },
  ],
}