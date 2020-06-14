#!/usr/bin/env bash
export BASEDIR=/mnt/chromeos/MyFiles/Downloads

cat data/dmm-map.txt| docker-compose run -u ${UID}:${GID} ruby bin/rename_dlfile.rb
