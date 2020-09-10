#!/bin/bash

echo -n "\nEnter your dev branch: \n"
read devBranch
echo -n "\nEnter your commit message: \n"
read commitMessage

rm -rf public/*
ng build
cp -rf dist/pingg/* public
firebase deploy --only hosting
git add .
git commit -m "${commitMessage}"
git checkout master
git merge ${devBranch}
git push origin
git checkout ${devBranch}
git push origin




