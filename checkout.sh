#!/bin/bash

read -p "Enter your dev branch: " devBranch

git checkout master
git pull origin master
git checkout ${devBranch}
git merge master
git push origin ${devBranch}
