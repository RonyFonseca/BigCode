# Etapa 1: build com Maven
FROM openjdk:21-jdk

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn -e -X -DskipTests clean package

# Etapa 2: imagem final
FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
