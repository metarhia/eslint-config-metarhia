'use strict';

module.exports = {
  'no-shadow-restricted-names': ['error', { reportGlobalThis: false }],
  'no-use-before-define': [
    'error',
    {
      functions: false,
    },
  ],
};
