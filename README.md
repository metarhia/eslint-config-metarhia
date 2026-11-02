# Eslint config for Metarhia

Opinionated [ESLint](https://eslint.org/) 10 shareable config and JavaScript
styleguide for [Metarhia](https://github.com/metarhia/) projects. One install
brings ESLint and Prettier.

[![ci status](https://github.com/metarhia/eslint-config-metarhia/workflows/Testing%20CI/badge.svg)](https://github.com/metarhia/eslint-config-metarhia/actions?query=workflow%3A%22Testing+CI%22+branch%3Amaster)
[![snyk](https://snyk.io/test/github/metarhia/eslint-config-metarhia/badge.svg)](https://snyk.io/test/github/metarhia/eslint-config-metarhia)
[![npm version](https://badge.fury.io/js/eslint-config-metarhia.svg)](https://badge.fury.io/js/eslint-config-metarhia)
[![npm downloads/month](https://img.shields.io/npm/dm/eslint-config-metarhia.svg)](https://www.npmjs.com/package/eslint-config-metarhia)
[![npm downloads](https://img.shields.io/npm/dt/eslint-config-metarhia.svg)](https://www.npmjs.com/package/eslint-config-metarhia)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/metarhia/eslint-config-metarhia/blob/master/LICENSE)

## Requirements

Node.js `^20.19.0 || ^22.13.0 || >=24`.

That is Node.js 20.19.0 and later 20.x, 22.13.0 and later 22.x, and 24 or
newer. Node.js 21 and 23 are not supported.

## Usage

1. Install:

```console
npm i eslint-config-metarhia
```

2. Create `eslint.config.js` and export one flat-config array. Objects later
   in the array override earlier ones.

```js
'use strict';

const config = require('eslint-config-metarhia');

module.exports = [
  ...config,
  {
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
```

The preset enables `eslint:recommended` and the Metarhia rules. It parses
the latest ECMAScript as CommonJS and defines Node.js and browser globals.
`'use strict'` is required at the top of each CommonJS file.

3. Check and fix from `package.json`:

```json
"lint": "eslint . && prettier --check \"**/*.{js,jsx,mjs,cjs,ts,tsx,json,md,mdx,yaml,yml}\"",
"fix": "eslint . --fix && prettier --write \"**/*.{js,jsx,mjs,cjs,ts,tsx,json,md,mdx,yaml,yml}\""
```

Changes are listed in [CHANGELOG.md](./CHANGELOG.md).

## License

Copyright (c) 2017-2026 [Metarhia contributors](https://github.com/metarhia/eslint-config-metarhia/graphs/contributors).
eslint-config-metarhia is [MIT licensed](./LICENSE).\
eslint-config-metarhia is a part of [Metarhia](https://github.com/metarhia) technology stack.
