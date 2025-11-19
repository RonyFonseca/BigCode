FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

RUN mvn -DskipTests clean package

FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]