#!/bin/bash

echo -n "\nEnter your dev branch: \n"
read devBranch
echo -n "\nEnter your commit message: \n"
read commitMessage

rm -rf public/*
ng build
cp -rf dist/pingg/* public
firebase deploy --only hosting
git add -A
git commit -m "${commitMessage}"
git push origin ${devBranch}
git checkout master
git pull origin master
git merge ${devBranch}
git push origin master
git checkout ${devBranch}




