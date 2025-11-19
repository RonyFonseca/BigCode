FROM eclipse-temurin:21-jdk AS build

WORKDIR /app

COPY Backend/Backend/pom.xml .
COPY Backend/Backend/src ./src

RUN ./mvnw -q -DskipTests package || mvn -q -DskipTests package

FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
