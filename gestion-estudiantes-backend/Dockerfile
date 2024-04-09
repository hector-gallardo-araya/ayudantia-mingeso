FROM openjdk:20
ARG JAR_FILE=./target/*.jar
COPY ${JAR_FILE} gestion-estudiantes-backend.jar
EXPOSE 8090
ENTRYPOINT ["java","-jar","./gestion-estudiantes-backend.jar"]