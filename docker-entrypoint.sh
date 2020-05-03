#!/bin/bash
set -e
cd /usr/src/app
export TYPEORM_CONNECTION=postgres

export TYPEORM_ENTITIES=dist/db/entity/**/*.js
export TYPEORM_SUBSCRIBERS=dist/db/subscriber/**/*.js
export TYPEORM_MIGRATIONS=dist/db/migration/**/*.js
export TYPEORM_ENTITIES_DIR=dist/db/entity
export TYPEORM_MIGRATIONS_DIR=dist/db/migration
export TYPEORM_SUBSCRIBERS_DIR=dist/db/subscriber

sh -c './wait-for-it.sh host.docker.internal:5432 -t 30'
exec "$@"