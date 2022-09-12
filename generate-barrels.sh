#!/bin/bash
cd src
npx barrelsby -n barrel -d ./ -i .*.ts -e .*.test.js -e .*testInputs.* -e .*map
cp barrel.ts ../dist/package/index.js
rm barrel.ts
