#!/bin/bash

echo -n "Enter your dev branch: "
read devBranch

git checkout master
git pull origin master
git checkout ${devBranch}
git merge master
git push origin ${devBranch}
