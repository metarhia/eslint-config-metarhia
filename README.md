# eslint-config-metarhia

Opinionated [ESLint](https://eslint.org/) config and de-facto JavaScript
styleguide for [Metarhia](https://github.com/metarhia/) projects.

[![ci status](https://github.com/metarhia/eslint-config-metarhia/workflows/Testing%20CI/badge.svg)](https://github.com/metarhia/eslint-config-metarhia/actions?query=workflow%3A%22Testing+CI%22+branch%3Amaster)
[![snyk](https://snyk.io/test/github/metarhia/eslint-config-metarhia/badge.svg)](https://snyk.io/test/github/metarhia/eslint-config-metarhia)
[![npm version](https://badge.fury.io/js/eslint-config-metarhia.svg)](https://badge.fury.io/js/eslint-config-metarhia)
[![npm downloads/month](https://img.shields.io/npm/dm/eslint-config-metarhia.svg)](https://www.npmjs.com/package/eslint-config-metarhia)
[![npm downloads](https://img.shields.io/npm/dt/eslint-config-metarhia.svg)](https://www.npmjs.com/package/eslint-config-metarhia)

## Usage

1. Install ESLint and this config:

```console
npm i -D eslint eslint-config-metarhia
```

2. Import `eslint-config-metarhia` in `.eslint.config.js`, add additional rules,
   export everything together.

```js
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

## License

Copyright (c) 2017-2024 [Metarhia contributors](https://github.com/metarhia/eslint-config-metarhia/graphs/contributors).
eslint-config-metarhia is [MIT licensed](./LICENSE).\
eslint-config-metarhia is a part of [Metarhia](https://github.com/metarhia) technology stack.
