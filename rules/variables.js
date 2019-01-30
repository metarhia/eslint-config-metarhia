'use strict';

module.exports = {
  rules: {
    'no-shadow-restricted-names': ['error'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
  },
};
