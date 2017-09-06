# eslint-config-metarhia

[![Build Status][travis-badge]][travis-url]

Opinionated [ESLint][] config, originated in [metarhia-jstp][], spread all over
the [Metarhia][] repos, and decoupled into a separate and shareable one for
ease of updating and synchronization.  This is our de-facto JavaScript
styleguide.

## Usage

1. Install ESLint, this config and required plugins:

   ```console
   npm i -D eslint eslint-config-metarhia
   ```

2. Add `"extends": "metarhia"` to your `.eslintrc`.

## Contributing

Please adhere to [Conventional Commits][] styleguide for commit messages (`npm
install` creates a Git hook that lints your commit messages, and they are also
checked on CI, but please write them properly beforehand so that they don't get
rejected.  If that happens locally while committing, though, don't worry, your
commit message isn't lost, you can still find it in `.git/COMMIT_EDITMSG`).

### Releasing

Collaborators can relese new versions using

```console
npm run release
git push origin master --follow-tags
npm publish
```

This will update the version in `package.json` and `package-lock.json`
according to semantic versioning using commit messages to determine whether it
is a patch, minor or major release, update the changelog, tag the new version
in Git, and publish it to npm registry.

## License

MIT. See the [LICENSE][] file for details.

[Conventional Commits]: https://conventionalcommits.org/
[ESLint]: https://eslint.org/
[LICENSE]: LICENSE
[Metarhia]: https://github.com/metarhia
[metarhia-jstp]: https://github.com/metarhia/jstp
[travis-badge]: https://travis-ci.org/metarhia/eslint-config-metarhia.svg?branch=master
[travis-url]: https://travis-ci.org/metarhia/eslint-config-metarhia
