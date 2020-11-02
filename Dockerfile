FROM node:12.16

WORKDIR /app

ADD package.json .

RUN npm install

ADD . .

RUN npm run build:server

RUN npm run build:client

# be able to start as client if needed
ENTRYPOINT ["./entrypoint.sh"]

CMD npm run server:prod
