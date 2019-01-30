# eslint-config-metarhia

[![Build Status][travis-badge]][travis-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/metarhia/eslint-config-metarhia.svg)](https://greenkeeper.io/)

Opinionated [ESLint][] config and de-facto JavaScript styleguide for
[Metarhia][] projects.

## Usage

1. Install ESLint, this config and required plugins:

   ```console
   npm i -D eslint eslint-plugin-import eslint-config-metarhia
   ```

2. Add `"extends": "metarhia"` to your `.eslintrc`.

## Contributing

Please adhere to [Conventional Commits][] styleguide for commit messages
(`npm install` creates a Git hook that lints your commit messages, and they are
also checked on CI, but please write them properly beforehand so that they don't
get rejected. If that happens locally while committing, though, don't worry,
your commit message isn't lost, you can still find it in `.git/COMMIT_EDITMSG`).

### Releasing

Collaborators can release new versions using

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

[conventional commits]: https://conventionalcommits.org/
[eslint]: https://eslint.org/
[license]: LICENSE
[metarhia]: https://github.com/metarhia
[travis-badge]: https://travis-ci.org/metarhia/eslint-config-metarhia.svg?branch=master
[travis-url]: https://travis-ci.org/metarhia/eslint-config-metarhia
