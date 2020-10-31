FROM node:12.16

RUN mkdir projectPing

WORKDIR ./projectPing

ADD . .

RUN npm install

RUN npm run build:server

EXPOSE 3000

CMD npm run server:prod
