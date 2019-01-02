FROM node:10-alpine as builder

EXPOSE 4200

ADD . /usr/src/
WORKDIR /usr/src/

RUN npm install
RUN npm run build:prod

### FINAL IMAGE ###
FROM nginx:alpine

EXPOSE 80

COPY --from=builder /usr/src/dist/sah-mvp-frontend/ /var/www/
COPY nginx.conf /etc/nginx/nginx.conf
