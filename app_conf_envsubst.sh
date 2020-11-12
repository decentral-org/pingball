#!/bin/bash

set -e

app_conf_envsubst() {
  defined_envs=$(printf '${%s} ' $(env | cut -d= -f1))
  envsubst "$defined_envs" < /etc/nginx/templates/app.conf.template > /etc/nginx/conf.d/app.conf
}

app_conf_envsubst

exit 0
