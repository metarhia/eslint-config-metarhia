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

const ruleFiles = [
  './rules/possible-errors.js',
  './rules/best-practices.js',
  './rules/strict-mode.js',
  './rules/variables.js',
  './rules/stylistic-issues.js',
  './rules/ecmascript-6.js',
  './rules/ecmascript-13.js',
];

const ruleSections = ruleFiles.map(require);
const { rules } = configMetarhia;

Object.assign(rules, recommended.rules);
Object.assign(rules, configPrettier.rules);

for (const section of ruleSections) {
  Object.assign(rules, section);
}

module.exports = [configMetarhia];
