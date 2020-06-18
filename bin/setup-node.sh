#!/usr/bin/env bash
source base.sh

docker-compose build
docker-compose run --rm -u ${UID}:${GID} puppeteer yarn install
docker-compose run --rm -u ${UID}:${GID} puppeteer yarn run tsc
