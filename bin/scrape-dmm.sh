#!/usr/bin/env bash
ls -1 /mnt/chromeos/MyFiles/Downloads/d_*.zip | xargs basename -s .zip | node dest/index.js >| data/dmm-map.txt
