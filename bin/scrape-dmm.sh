#!/usr/bin/env bash
set -eu
source bin/base.sh

ls -1 ${BASEDIR}/d_*.zip | xargs basename -s .zip \
  | docker-compose run --rm -u ${UID}:${GID} puppeteer node dest/index.js \
  >| data/dmm-map.txt
