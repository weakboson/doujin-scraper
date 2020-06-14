#!/usr/bin/env bash
GID=$(id -g ${USER})

docker-compose build
docker-compose run --rm -u ${UID}:${GID} puppeteer yarn install
docker-compose run --rm -u ${UID}:${GID} puppeteer yarn run tsc
