'use strict';

module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],
  },
};
