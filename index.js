'use strict';

const { recommended } = require('@eslint/js').configs;
const configPrettier = require('eslint-config-prettier');
const pluginPrettier = require('eslint-plugin-prettier');
const globals = require('./rules/globals.js');

const configMetarhia = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'commonjs',
    globals,
  },
  plugins: { prettier: pluginPrettier },
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

Object.assign(configMetarhia.rules, recommended.rules);
Object.assign(configMetarhia.rules, configPrettier.rules);

for (const section of sections) {
  Object.assign(configMetarhia.rules, section);
}

module.exports = [configMetarhia];
