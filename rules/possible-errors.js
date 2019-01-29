'use strict';

module.exports = {
  rules: {
    'no-console': ['off'],
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    'no-return-assign': ['error'],
  },
};
