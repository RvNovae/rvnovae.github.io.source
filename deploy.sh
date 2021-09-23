#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'rvnovae.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m "deploy"

git push -f git@github.com:RvNovae/rvnovae.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages