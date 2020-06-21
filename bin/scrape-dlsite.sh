#!/usr/bin/env bash
set -eu
source bin/base.sh

ls -1 ${BASEDIR}/?J*.zip | xargs basename -s .zip \
  | docker-compose run --rm -u ${UID}:${GID} puppeteer node dest/dlsite.js \
  >| data/dlsite-map.txt
