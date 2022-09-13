#!/bin/bash
cd src
rm barrel.ts 2> /dev/null
rm index.ts 2> /dev/null
npx barrelsby -n barrel -d ./ -i .*.ts -e .*.test.js -e .*testInputs.* -e .*map
cp barrel.ts index.ts
rm barrel.ts
