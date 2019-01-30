'use strict';

module.exports = {
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: {
          let: 2,
          const: 3,
        },
        MemberExpression: 1,
      },
    ],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['error', 'last'],
    'eol-last': ['error'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum',
      },
    ],
    'keyword-spacing': [
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
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true,
      },
    ],
    'max-nested-callbacks': [
      'error',
      {
        max: 5,
      },
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
      },
    ],
    'new-parens': ['error'],
    'no-lonely-if': ['error'],
    'no-trailing-spaces': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {
          typeof: false,
        },
      },
    ],
    'no-extra-parens': [
      'error',
      'all',
      {
        returnAssign: false,
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: false,
      },
    ],
  },
};
