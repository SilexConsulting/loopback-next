#!/bin/bash

npm i

cd ../../
npm run build:full
cd examples/globalimpact-api/node_modules/@loopback

rm -rf authentication
cp -a ../../../../packages/authentication .

rm -rf authentication-passport
cp -a ../../../../extensions/authentication-passport .

rm -rf authorization
cp -a ../../../../packages/authorization .

rm -rf boot
cp -a ../../../../packages/boot .

rm -rf build
cp -a ../../../../packages/build .

rm -rf context
cp -a ../../../../packages/context .

rm -rf core
cp -a ../../../../packages/core .

rm -rf openapi-v3
cp -a ../../../../packages/openapi-v3 .

rm -rf repository
cp -a ../../../../packages/repository .

rm -rf rest
cp -a ../../../../packages/rest .

rm -rf rest-explorer
cp -a ../../../../packages/rest-explorer .

rm -rf security
cp -a ../../../../packages/security .

rm -rf service-proxy
cp -a ../../../../packages/service-proxy .

rm -rf testlab
cp -a ../../../../packages/testlab .

cd ../../
cp -a node_modules/@loopback .
docker build -t globalimpact-api:latest .
