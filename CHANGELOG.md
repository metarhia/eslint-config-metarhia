# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.0.0"></a>
# [4.0.0](https://github.com/metarhia/eslint-config-metarhia/compare/v3.0.0...v4.0.0) (2018-08-22)


### Features

* **rules:** omit arrow function parens unless they are necessary ([#11](https://github.com/metarhia/eslint-config-metarhia/issues/11)) ([16d56e4](https://github.com/metarhia/eslint-config-metarhia/commit/16d56e4))


### BREAKING CHANGES

* **rules:** previously, only arrow functions consisting of a single
expression were allowed to omit parentheses around the parameter list
(and required to, if there's only one parameter in the list).  After
this change, the parens are only allowed when they are required
syntactically.

Before:

```js
const f = x => x;

const g = (x, y) => x + y;

const h = (x) => {
  console.log(x);
};

const i = (x, f) => {
  f(x);
};
```

After:

```js
// Not affected
const f = x => x;

// Not affected
const g = (x, y) => x + y;

// AFFECTED
const h = x => {
  console.log(x);
};

// Not affected
const i = (x, f) => {
  f(x);
};
```

This rule is fixable via `eslint --fix`.

Refs: https://github.com/metarhia/Metarhia/issues/22



<a name="3.0.0"></a>
# [3.0.0](https://github.com/metarhia/eslint-config-metarhia/compare/v2.0.0...v3.0.0) (2018-07-19)


### Features

* **eslint:** upgrade to ESLint 5 ([a4ee615](https://github.com/metarhia/eslint-config-metarhia/commit/a4ee615))


### BREAKING CHANGES

* **eslint:** drop support for ESLint 4 and move to ESLint 5 being
the peerDependency, consequently enabling two new rules by default (see
https://eslint.org/docs/user-guide/migrating-to-5.0.0#eslint-recommended-changes
for details).



<a name="2.0.0"></a>
# [2.0.0](https://github.com/metarhia/eslint-config-metarhia/compare/v1.0.1...v2.0.0) (2017-11-26)


### Features

* **rules:** add implicit-arrow-linebreak rule ([75748ff](https://github.com/metarhia/eslint-config-metarhia/commit/75748ff))


### BREAKING CHANGES

* **rules:** before this change, if `doSomething()` in the following
  snippet of code

  ```js
  const fn = () => doSomething();
  ```

  could not fit on one line, both

  ```js
  const fn = () => (
    doSomething()
  );
  ```

  and

  ```js
  const fn = () =>
    doSomething();
  ```

  would be valid from the point of view of ESLint.

  After this change, only

  ```js
  const fn = () => (
    doSomething()
  );
  ```

  is valid.

  Also, it is required to update ESLint.



<a name="1.0.1"></a>
## [1.0.1](https://github.com/metarhia/eslint-config-metarhia/compare/v1.0.0...v1.0.1) (2017-09-25)



<a name="1.0.0"></a>
# 1.0.0 (2017-09-06)


### Features

* **config:** add basic ESLint config ([289e2e4](https://github.com/metarhia/eslint-config-metarhia/commit/289e2e4))
* **config:** export configuration from the module ([290d450](https://github.com/metarhia/eslint-config-metarhia/commit/290d450))
* **rules:** add arrow-parens rule ([6d431e4](https://github.com/metarhia/eslint-config-metarhia/commit/6d431e4))
* **rules:** add comma-dangle rule ([29b66fe](https://github.com/metarhia/eslint-config-metarhia/commit/29b66fe))
* **rules:** add handle-callback-err rule ([e083dd4](https://github.com/metarhia/eslint-config-metarhia/commit/e083dd4))
* **rules:** add import/no-unresolved rule ([5962ba5](https://github.com/metarhia/eslint-config-metarhia/commit/5962ba5))
