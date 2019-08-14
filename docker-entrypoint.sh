#!/bin/bash
set -e
cd /usr/src/app

less package.json
npm i
exec "$@"