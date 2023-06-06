FROM ubuntu:18.04 AS build
WORKDIR /app
RUN apt-get update
RUN apt-get install openjdk-17-jdk -y 
COPY . .
RUN ./gradlew bootJar --no-daemon
FROM openjdk:17-jdk-alpine
EXPOSE 8080
COPY --from=build /app/build/libs/sos-optica-0.0.1-SNAPSHOT.jar /app/app.jar

ENTRYPOINT [ "java", "-jar", "/app/app.jar" ]