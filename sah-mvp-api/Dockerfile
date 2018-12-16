FROM maven:3.3.9-jdk-8-alpine

EXPOSE 8081

ADD . /usr/src/sah-mvp-command
WORKDIR /usr/src/sah-mvp-command

ENTRYPOINT mvn spring-boot:run