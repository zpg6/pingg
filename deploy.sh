#!/bin/bash

echo -n "Enter your dev branch: "
read devBranch
echo -n "Enter your commit message: "
read commitMessage

rm -rf public/*
ng build
cp -rf dist/pingg/* public
firebase deploy --only hosting

git add .
git commit -m "${commitMessage}"
git checkout master
git pull origin master
git merge ${devBranch}
git add .
git commit -m "${commitMessage}"
git push origin master
git checkout ${devBranch}
git merge master
git push origin ${devBranch}




