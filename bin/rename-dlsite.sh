#!/usr/bin/env bash
export BASEDIR=/mnt/chromeos/MyFiles/Downloads

cat data/dlsite-map.txt | docker-compose run -u ${UID}:${GID} ruby bin/rename_dlfile.rb
