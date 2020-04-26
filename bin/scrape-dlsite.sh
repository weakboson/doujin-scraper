#!/usr/bin/env bash
ls -1 /mnt/chromeos/MyFiles/Downloads/?J*.zip | xargs basename -s .zip | node dest/dlsite.js >| data/dlsite-map.txt
