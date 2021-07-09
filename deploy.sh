#!/usr/bin/env sh

# abort on errors 只要脚本发生错误就会终止执行
set -e

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:garmin21/im-vue-ui.git master:gh-pages

# 返回到上一次的工作目录
cd - 

rm -rf dist
