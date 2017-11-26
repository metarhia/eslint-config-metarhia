# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
