# Change Log

## [Unreleased][unreleased]

## [9.2.0][] - 2026-08-15

- Updated dependencies
- Add rules: no-unassigned-vars, no-useless-assignment, array-callback-return, no-promise-executor-return, no-template-curly-in-string, no-unreachable-loop, no-eval, no-implied-eval, no-useless-constructor, no-caller, no-proto, no-iterator, radix, yoda, prefer-object-has-own, prefer-exponentiation-operator

## [9.1.9][] - 2026-04-14

- Updated ESLint, Prettier, and related dependencies (including explicit `@eslint/js`).
- Required Node.js >= 20.19 in `engines`.
- Re-enabled `prefer-template` (it was removed in 9.1.7).
- Added and removed rules to align with the supported ESLint release line.
- Bumped `minimatch` to 10.2.4.
- Added `metaskills` as a dev dependency.
- Set package `author` to Metarhia contributors (see `AUTHORS`).

## [9.1.8][] - 2026-02-24

- Fix minimatch ReDoS vulnerability via npm overrides
- Update vulnerable dependencies to safe nearest versions

## [9.1.7][] - 2026-02-14

- Remove prefer-template rule

## [9.1.6][] - 2026-02-13

- Update dependencies
- Remove rule: handle-callback-err and nodejs-and-commonjs.js
  (deprecated, scheduled for removal in ESLint 11)
- Add rules:
  - default-case-last
  - logical-assignment-operators
  - no-useless-return
  - prefer-template
- Configure no-shadow-restricted-names with reportGlobalThis: false for ESLint 10 compatibility

## [9.1.5][] - 2025-12-22

- Add globals.crypto
- Update dependencies

## [9.1.4][] - 2025-12-10

- Add node.js 25 to CI
- Update dependencies

## [9.1.3][] - 2025-08-31

- Update dependencies

## [9.1.2][] - 2025-06-06

- Add node.js 24 to CI
- Update dependencies

## [9.1.1][] - 2024-10-24

- Update space-before-function-paren

## [9.1.0][] - 2024-10-21

- Added more global identifiers for node and browser environment
- Add node.js 23 to CI

## [9.0.7][] - 2024-09-12

- Merge rules from all style guides

## [9.0.6][] - 2024-09-03

- Add more global classes

## [9.0.5][] - 2024-08-31

- Add more global classes
- Fix github template

## [9.0.4][] - 2024-08-27

- Add much more node.js and frontend globals
- Move globals to separate submodule

## [9.0.3][] - 2024-08-18

- Add more frontend globals

## [9.0.2][] - 2024-08-16

- Add node.js backend globals
- Mode devDependencies to dependencies

## [9.0.1][] - 2024-08-15

- Resolve formatting conflict between ESLint and Prettier
- Update npm scripts and remove /scripts folder from package

## [9.0.0][] - 2024-08-14

- Update eslint to 9.x: Rewrite rules to plain format
- Drop node.js 18.x support and add node.js 22 support
- Update repository structure, CI, and badges
- Update dependencies and package file structure

## [8.2.1][] - 2023-07-20

- Update dependencies and package file structure

## [8.2.0][] - 2023-07-06

- Updated: consistent-return

## [8.1.0][] - 2022-06-21

- Updated: arrow-parens, handle-callback-err, operator-linebreak

## [8.0.0][] - 2022-06-04

- Dependencies updated to latest versions
- ECMAScript 13 (2022) features support

## [7.0.0][] - 2019-02-01

- Change space-before-function-paren for async functions
- Disallow unnecessary return await

## [6.1.0][] - 2018-12-07

- Add parserOptions and set ecmaVersion to 2018
- Enable allowTemplateLiterals option for quotes rule

## [6.0.0][] - 2018-10-22

- Add no-extra-parens rule
- Add no-return-assign rule
- Remove implicit-arrow-linebreak rule

## [5.0.0][] - 2018-09-28

- Add consistent-return rule
- Enforce curly braces on multiline blocks

## [4.0.0][] - 2018-08-22

- Omit arrow function parens unless they are necessary

## [3.0.0][] - 2018-07-19

- Upgrade to ESLint 5
- Drop support for ESLint 4

## [2.0.0][] - 2017-11-26

- Add implicit-arrow-linebreak rule

## [1.0.1][] - 2017-09-25

- Bug fixes and improvements

## [1.0.0][] - 2017-09-06

- Add basic ESLint config
- Export configuration from the module
- Add arrow-parens rule
- Add comma-dangle rule
- Add handle-callback-err rule
- Add import/no-unresolved rule

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

[unreleased]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.9...HEAD
[9.1.9]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.8...v9.1.9
[9.1.8]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.7...v9.1.8
[9.1.7]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.6...v9.1.7
[9.1.6]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.5...v9.1.6
[9.1.5]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.4...v9.1.5
[9.1.4]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.3...v9.1.4
[9.1.3]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.2...v9.1.3
[9.1.2]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.1...v9.1.2
[9.1.1]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.1.0...v9.1.1
[9.1.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.0.7...v9.1.0
[9.0.7]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.0.6...v9.0.7
[9.0.6]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.0.5...v9.0.6
[9.0.5]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.0.4...v9.0.5
[9.0.4]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.0.3...v9.0.4
[9.0.3]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.0.2...v9.0.3
[9.0.2]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.0.1...v9.0.2
[9.0.1]: https://github.com/metarhia/eslint-config-metarhia/compare/v9.0.0...v9.0.1
[9.0.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v8.2.1...v9.0.0
[8.2.1]: https://github.com/metarhia/eslint-config-metarhia/compare/v8.2.0...v8.2.1
[8.2.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v8.1.0...v8.2.0
[8.1.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v8.0.0...v8.1.0
[8.0.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v7.0.0...v8.0.0
[7.0.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v6.1.0...v7.0.0
[6.1.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v6.0.0...v6.1.0
[6.0.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v5.0.0...v6.0.0
[5.0.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/metarhia/eslint-config-metarhia/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/metarhia/eslint-config-metarhia/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/metarhia/eslint-config-metarhia/releases/tag/v1.0.0
