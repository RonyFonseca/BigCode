FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# Copia os arquivos do backend
COPY Backend/Backend/pom.xml .
COPY Backend/Backend/src ./src

RUN mvn -e -X -DskipTests clean package

FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
