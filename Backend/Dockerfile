# -------------------------------------------------------------------------
# FASE 1: BUILD (Compilação do Projeto)
#
# Usamos a imagem oficial do Maven que já tem o JDK 17 (LTS) configurado.
# Isso garante que o compilador (javac) suporte a versão 'release 17' do seu pom.xml.
# -------------------------------------------------------------------------
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o código-fonte
# IMPORTANTE: Verifique se 'Backend/Backend' é o diretório raiz do seu projeto Maven
COPY Backend/Backend .

# Executa o build (compilação e empacotamento)
# -DskipTests: pula os testes para agilizar o processo de build no CI/CD
# clean package: compila o código e gera o arquivo JAR executável
RUN mvn -DskipTests clean package

# -------------------------------------------------------------------------
# FASE 2: RUNTIME (Execução da Aplicação)
#
# Usamos uma imagem menor (apenas JRE 17) para a execução. 
# Isso torna a imagem final mais segura e leve, o que é ideal para produção.
# -------------------------------------------------------------------------
FROM eclipse-temurin:17-jre-jammy

# Define o diretório de trabalho para a execução
WORKDIR /app

# Expõe a porta padrão do Spring Boot
EXPOSE 8080

# Copia o arquivo JAR gerado na Fase 1 para a Fase 2
COPY --from=build /app/target/*.jar app.jar

# Comando de entrada para iniciar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]