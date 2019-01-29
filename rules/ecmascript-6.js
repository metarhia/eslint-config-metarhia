'use strict';

module.exports = {
  env: {
    es6: true,
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error'],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-useless-computed-key': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-numeric-literals': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
  },
};
