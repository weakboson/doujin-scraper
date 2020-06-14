#!/usr/bin/env bash
GID=$(id -g ${USER})

ls -1 /mnt/chromeos/MyFiles/Downloads/?J*.zip | xargs basename -s .zip \
  | docker-compose run --rm -u ${UID}:${GID} puppeteer node dest/dlsite.js \
  >| data/dlsite-map.txt
