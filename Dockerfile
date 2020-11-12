FROM node:12.19-buster
WORKDIR /app

RUN apt-get update
RUN apt-get install -y nginx

RUN apt-get -y install gettext-base

ADD package*.json ./
RUN npm install

ADD . .
RUN npm run build:server
RUN npm run build:client

# be able to start as client if needed
COPY nginx/app.conf.template /etc/nginx/templates/app.conf.template
COPY app_conf_envsubst.sh .
ENTRYPOINT ["./entrypoint.sh"]
CMD npm run server:prod
