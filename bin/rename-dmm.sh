#!/usr/bin/env bash
set -eu
source bin/base.sh

cat data/dmm-map.txt| docker-compose run --rm -u ${UID}:${GID} ruby bin/rename_dlfile.rb
