'use strict';

module.exports = {
  'no-console': ['off'],
  'no-constant-condition': [
    'error',
    {
      checkLoops: false,
    },
  ],
  'no-return-assign': ['error'],
  'no-unassigned-vars': ['error'],
  'no-useless-assignment': ['error'],
  'preserve-caught-error': ['error'],
  'array-callback-return': ['error', { allowImplicit: true }],
  'no-promise-executor-return': ['error', { allowVoid: true }],
  'no-template-curly-in-string': ['error'],
  'no-unexpected-multiline': ['error'],
  'no-unreachable-loop': ['error'],
};
