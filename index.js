'use strict';

const { recommended } = require('@eslint/js').configs;

const metarhia = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'commonjs',
    globals: {
      BigInt: true,
    },
  },
  ignores: ['node_modules/*'],
  rules: {},
};

const files = [
  './rules/possible-errors.js',
  './rules/best-practices.js',
  './rules/strict-mode.js',
  './rules/variables.js',
  './rules/nodejs-and-commonjs.js',
  './rules/stylistic-issues.js',
  './rules/ecmascript-6.js',
  './rules/ecmascript-13.js',
];

const sections = files.map(require);

for (const section of sections) {
  Object.assign(metarhia.rules, section);
}

module.exports = [recommended, metarhia];
