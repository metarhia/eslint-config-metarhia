'use strict';

const rules = [
  './rules/possible-errors',
  './rules/best-practices',
  './rules/strict-mode',
  './rules/variables',
  './rules/nodejs-and-commonjs',
  './rules/stylistic-issues',
  './rules/ecmascript-6',
  './rules/plugin-import',
  './rules/parser-options',
].map(require.resolve);

module.exports = {
  extends: ['eslint:recommended', ...rules],
};
