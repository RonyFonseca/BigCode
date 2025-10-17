
# BigCode - Plataforma de Desafios de Algoritmos

BigCode é uma plataforma educativa inspirada no estilo do LeetCode, voltada para a anotação BigU. A aplicação permite que professores criem desafios de algoritmos e alunos possam resolvê-los, receber feedback imediato e competir em um ranking global.

---

## Tecnologias Utilizadas

**Back-end:**
- Java 21
- Spring Boot
- JPA
- PostgreSQL

**Front-end:**
- React.js
- JavaScript
- Bootstrap

**Documentação e Diagramas:**
- PlantUML (diagramas de classes, casos de uso e requisitos)

---

## Funcionalidades

### 1. Página de Desafios
- Lista de desafios com título, nível e tags (ex: "loops", "recursão").
- Ao clicar em um desafio:
    - Mostra o enunciado (em JS ou pseudo-código).
    - Opções de complexidade: `O(1)`, `O(log n)`, `O(n)`, `O(n²)`, `O(n log n)`.
    - Usuário seleciona a resposta e envia.

### 2. Feedback Imediato
- Mensagem automática indicando se a resposta está correta ou incorreta.
- Exemplo: "✅ Correto! Esse algoritmo é linear, pois há um loop que percorre todos os elementos."

### 3. Sistema de Pontuação e Ranking
- Cada acerto: +10 pontos.
- Cada erro: -5 pontos (ou 0 pontos).
- Ranking global dos top 10 jogadores.

### 4. Login / Cadastro
- Login rápido com nickname (senha opcional).
- Armazena pontuação e progresso do usuário.

### 5. Painel do Administrador
- Cadastrar novos desafios:
    - Código do problema.
    - Opções de resposta.
    - Complexidade correta.
    - Explicação detalhada.

---

## Estrutura do Projeto
    BigCode/ 
    ├─ Back-end/ # Spring Boot, JPA e PostgreSQL
    ├─ Front-end/ # React.js, JavaScript e Bootstrap
    └─ DOCS/ # Diagramas de requisitos, casos de uso e classes
---

## Configuração do Ambiente

### Back-end
1. Configure o PostgreSQL e crie um banco de dados chamado `bigcode`.

2. Ajuste o `application.properties`:
```properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/bigcode
    spring.datasource.username=SEU_USUARIO
    spring.datasource.password=SUA_SENHA
    spring.jpa.hibernate.ddl-auto=update
```

3. Rode o projeto:
```
cd Back-end
mvn spring-boot:run
```

### Front-end
1. Instale dependências:
```
cd Front-end
npm install
```

2. Inicie o servidor de desenvolvimento:
```
npm start
```


### Contribuição

#### Contribuições são bem-vindas!

    1. Crie uma branch com o seu recurso (git checkout -b feature/nome-da-feature).

    2. Faça commit das suas alterações (git commit -m 'feat: descrição da feature').

    3. Faça push para a branch (git push origin feature/nome-da-feature).

    4. Abra um Pull Request.

---
- Licença MIT License - sinta-se à vontade para usar, modificar e compartilhar este projeto.
---

