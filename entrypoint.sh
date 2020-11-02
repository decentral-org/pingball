#!/bin/bash

# Exit on fail
set -e

# Start as client
if [ "$START_AS_CLIENT" == "true" ]; then
    npm run client:prod
else # or by default: start what is defined in CMD
    exec "$@"
fi
