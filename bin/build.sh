#!/usr/bin/env bash
set -eu
source bin/base.sh

docker-compose run --rm -u ${UID}:${GID} puppeteer yarn run tsc
