#!/bin/bash

rm -rf public/*
ng build
cp -rf dist/pingg/* public
firebase deploy --only hosting



