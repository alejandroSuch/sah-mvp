FROM maven:3.3.9-jdk-8-alpine as builder

ADD . /src/
WORKDIR /src
RUN mvn clean install spring-boot:repackage -DskipTests

### FINAL IMAGE ###
FROM gcr.io/distroless/java
COPY --from=builder /src/target/sah-mvp-api-0.0.1-SNAPSHOT.jar /app/sah-mvp-api.jar
EXPOSE 8081

CMD ["/app/sah-mvp-api.jar"]