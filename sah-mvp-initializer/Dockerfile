FROM node:10-alpine

ADD . /usr/src/sah-mvp-initializer
WORKDIR /usr/src/sah-mvp-initializer

ENV DOCKERIZE_VERSION v0.3.0

RUN apk update && apk add ca-certificates wget && update-ca-certificates
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN npm install

ENTRYPOINT npm run start:prod
