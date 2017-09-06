#!/bin/bash

set -e
set -u

if [[ $TRAVIS_PULL_REQUEST_SLUG != "" && \
      $TRAVIS_PULL_REQUEST_SLUG != $TRAVIS_REPO_SLUG ]]; then
  git remote add "$TRAVIS_PULL_REQUEST_SLUG" \
                 "https://github.com/$TRAVIS_PULL_REQUEST_SLUG.git"
  git fetch "$TRAVIS_PULL_REQUEST_SLUG"
  TO="$TRAVIS_PULL_REQUEST_SLUG/$TRAVIS_PULL_REQUEST_BRANCH"
else
  TO=$TRAVIS_COMMIT
fi

commitlint --from="$TRAVIS_BRANCH" --to="$TO"
commitlint --from="$TRAVIS_COMMIT"
