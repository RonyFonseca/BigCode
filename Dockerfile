FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

COPY Backend/Backend/pom.xml .
COPY Backend/Backend/src ./src

RUN mvn -e -X -DskipTests clean package


FROM eclipse-temurin:17-jdk
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
