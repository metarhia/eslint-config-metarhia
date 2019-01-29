'use strict';

module.exports = {
  env: {
    node: true,
  },
  rules: {
    'handle-callback-err': ['error', '^.*(e|E)rr'],
  },
};
