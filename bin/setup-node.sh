#!/usr/bin/env bash
IMAGE=node:12.18.0-buster-slim
GID=$(id -g ${USER})

docker run --rm -v ${PWD}:/app -w /app -u ${UID}:${GID} ${IMAGE} yarn install
docker run --rm -v ${PWD}:/app -w /app -u ${UID}:${GID} ${IMAGE} yarn run tsc
