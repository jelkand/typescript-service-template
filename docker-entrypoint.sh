#!/bin/bash
set -e
cd /usr/src/app
npm i
exec "$@"