#!/usr/bin/env bash
GID=$(id -g ${USER})

ls -1 /mnt/chromeos/MyFiles/Downloads/d_*.zip | xargs basename -s .zip \
  | docker-compose run --rm -u ${UID}:${GID} puppeteer node dest/index.js \
  >| data/dmm-map.txt
