FROM node:10-alpine

EXPOSE 4200

ADD . /usr/src/sah-mvp-frontend
WORKDIR /usr/src/sah-mvp-frontend

RUN npm install

ENTRYPOINT npm run start:prod
