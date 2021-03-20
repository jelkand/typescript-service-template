#!/bin/bash
set -e
cd /usr/src/app

yarn build
sh -c './wait-for-it.sh host.docker.internal:5432 -t 30'
exec "$@"