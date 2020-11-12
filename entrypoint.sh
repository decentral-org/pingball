#!/bin/bash

# Exit on fail
set -e

# Start as client
if [ "$START_AS_CLIENT" == "true" ]; then
    chmod +x app_conf_envsubst.sh
    ./app_conf_envsubst.sh
    service nginx start
    npm run client:prod
else # or by default: start what is defined in CMD
    exec "$@"
fi
