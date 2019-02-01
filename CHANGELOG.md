# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="7.0.0"></a>
# [7.0.0](https://github.com/metarhia/eslint-config-metarhia/compare/v6.1.0...v7.0.0) (2019-02-01)


### Features

* **rules:** change space-before-function-paren for async functions ([#26](https://github.com/metarhia/eslint-config-metarhia/issues/26)) ([c5922b2](https://github.com/metarhia/eslint-config-metarhia/commit/c5922b2))
* **rules:** disallow unnecessary return await ([#27](https://github.com/metarhia/eslint-config-metarhia/issues/27)) ([d49c1ac](https://github.com/metarhia/eslint-config-metarhia/commit/d49c1ac))


### BREAKING CHANGES

* **rules:** with this change it is an error to not have a space
before function parentheses in an async function declaration.

Before:

```js
const a = async() => {};
```

After:

```js
const a = async () => {};
```
* **rules:** with this it is an error to use return await in an
async function where it doesn't bring any benefits. Note that separate
await and then return or return await inside of the try-catch block are
still allowed.

This is an error:

```js
async function foo() {
  return await bar();
}
```

These are not:

```js
async function foo() {
  await bar();
  return;
}
```

```js
async function foo() {
  try {
    return await bar();
  } catch (e) {}
}
```



<a name="6.1.0"></a>
# [6.1.0](https://github.com/metarhia/eslint-config-metarhia/compare/v6.0.0...v6.1.0) (2018-12-07)


### Features

* **rules:** add parserOptions and set ecmaVersion to 2018 ([#24](https://github.com/metarhia/eslint-config-metarhia/issues/24)) ([18d8cd5](https://github.com/metarhia/eslint-config-metarhia/commit/18d8cd5))
* **rules:** enable allowTemplateLiterals option for quotes rule ([#23](https://github.com/metarhia/eslint-config-metarhia/issues/23)) ([00e3ac2](https://github.com/metarhia/eslint-config-metarhia/commit/00e3ac2))



<a name="6.0.0"></a>
# [6.0.0](https://github.com/metarhia/eslint-config-metarhia/compare/v5.0.0...v6.0.0) (2018-10-22)


### Features

* **rules:** add no-extra-parens rule ([#21](https://github.com/metarhia/eslint-config-metarhia/issues/21)) ([226fc9c](https://github.com/metarhia/eslint-config-metarhia/commit/226fc9c))
* **rules:** add no-return-assign rule ([#19](https://github.com/metarhia/eslint-config-metarhia/issues/19)) ([e8838ed](https://github.com/metarhia/eslint-config-metarhia/commit/e8838ed))
* **rules:** remove implicit-arrow-linebreak rule ([#20](https://github.com/metarhia/eslint-config-metarhia/issues/20)) ([d4f68d9](https://github.com/metarhia/eslint-config-metarhia/commit/d4f68d9))


### BREAKING CHANGES

* **rules:** with this change it is allowed to use parentheses
only where they are necessary, except for arrow conditionals (to avoid
conflicts with no-confusing-arrow rule), return assignments (to avoid
conflicts with no-return-assign rule) and nested binary expressions
(where parentheses can be used for clarity).

Before:

```js
a = (b * c);

typeof (a);

const fn = () => (
  doSomething()
);
```

After:

```js
a = b * c;

typeof a;

const fn = () => doSomething();
```
* **rules:** before, it was possible to use assignment operators in
a return statement without using parentheses, which could lead to some
mistakes, where assignment operators are used in place of the comparison
operators.

Before:

```js
function doSomething() {
  return foo = bar + 2;
}
```

After:

```js
function doSomething() {
  return foo === bar + 2;
}

// or

function doSomething() {
  return (foo = bar + 2);
}
```



<a name="5.0.0"></a>
# [5.0.0](https://github.com/metarhia/eslint-config-metarhia/compare/v4.0.0...v5.0.0) (2018-09-28)


### Features

* **rules:** add consistent-return rule ([#15](https://github.com/metarhia/eslint-config-metarhia/issues/15)) ([e91c939](https://github.com/metarhia/eslint-config-metarhia/commit/e91c939))
* **rules:** enforce curly braces on multiline blocks ([#16](https://github.com/metarhia/eslint-config-metarhia/issues/16)) ([3132fdc](https://github.com/metarhia/eslint-config-metarhia/commit/3132fdc))


### BREAKING CHANGES

* **rules:** before this change, it was possible to have a function
that used the `return` statement with a value only in some of its
execution paths. This rule enforces function to explicitly return a
value in every execution path if at least one execution path returns a
value.

Before:

```js
function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return;
    }
}
```

After:

```js
function doSomething(condition) {
    if (condition) {
        return true;
    } else {
        return false;
    }
}

// or

function doSomething(condition) {
    if (condition) {
        return true;
    }
    return false;
}
```
* **rules:** before this change, it was allowed to avoid the use of
block statements (curly braces) with `if`, `else`, `for`, `while`, and
`do`, when there is only one statement in the block. After this change,
omitting the curly braces is only allowed when the statement is on the
same line as `if`, `else if`, `else`, `for`, `while`, or `do`. Also,
this change enforces consistency in the usage of curly braces for `if`,
`else if` and `else` chains.

Before:

```js
if (foo)
  bar();

if (x) a();
else {
  b();
  c();
}
```

After:

```js
if (foo) bar();

// or

if (foo) {
  bar();
}

if (x) {
  a();
} else {
  b();
  c();
}
```

Some of the problems reported by this rule can be fixed via
`eslint --fix`.



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
