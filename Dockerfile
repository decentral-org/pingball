FROM node:12.16

RUN mkdir projectPing

WORKDIR ./projectPing

ADD . .

RUN npm install

ARG arg

RUN if [ "$arg" = "" ] ; then echo Argument not provided ; else echo Argument is $arg ; fi

RUN npm run build:$arg

ENV VAR=$arg

CMD npm run ${VAR}:prod
