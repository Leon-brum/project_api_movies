# API de filmes
Este projeto é uma API de um banco de dados relacional voltado para o gerenciamento de informações sobre filmes. Ele permite o cadastro e a gestão de filmes e seus componentes, incluindo atores, diretores e estúdios. Além disso, possui um sistema de cadastro de usuários com autenticação via token de acesso para garantir a segurança e a privacidade das informações.

## Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Instalação](#instalação)
3. [Uso](#uso)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Tecnologias Utilizadas](#tecnologias-utilizadas)
6. [Licença](#licença)
7. [Contato](#contato)

## Pré-requisitos

- Docker
- Docker Compose
- Node.js

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/Leon-brum/project_api_movies
    cd api-filmes
    ```

2. Configure as variáveis de ambiente:
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```plaintext
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=api_movies
    DB_HOST=db
    JWT_SECRET=asmdlkoasojdijoasdjas
    MYSQL_ROOT_PASSWORD=password
    ```

3. Construa e inicie os contêineres Docker:
    ```bash
    docker-compose up --build
    ```
4. Dentro do container:
   ```bash
    npm run db:reset
    ```

## Uso

A API estará disponível em `http://localhost:3005`.

### Endpoints

- `GET` 
    `/movie`: Retorna uma lista de filmes.
    `/login`: Retorna os usuarios cadastrados.
    `/actor`: Retorna os atores.
    `/director`: Retorna os diretores.
    `/studio`: Retorna os estudios.
    `/movieActor`: Retorna os atores e os filmes na qual participou.
    `/movieGender`: Retorna os generos e os filmes.
    `/wishlist`: Retorna os usuarios e sua lista de filmes.
- `POST`
    `/movies`: Adiciona um novo filme.
    `/login`: Adiciona um novo usuario.
    `/actor`: Adiciona um novo ator.
    `/director`:  Adiciona um novo diretor.
    `/studio`: Adiciona um novo studio.
- `GET /x/:id`: Retorna detalhes de um x específico. (movies, login, actor, director, studio)
- `DELETE /x/:id`: Remove um x. (movies, login, actor, director, studio)

### Exemplo de Requisição

**GET /movies**

```bash
curl -X GET http://localhost:3005/movies
```

# Resposta
[
  {
    "id": 1,
    "name": "O Senhor dos Anéis: O Retorno do Rei",
    "launch": "2003-12-25",
    "directorId": 1,
    "studioId": 1,
    "studio": {
      "name": "Watford"
    },
    "director": {
      "name": "Peter Jackson",
      "age": 56
    }
  }
]

### Estrutura do Projeto

api-filmes/
├── src/

│   ├── controllers/

│   ├── database/

│   ├── interfaces/

│   ├── JWT/

│   ├── middlewares/

│   ├── model/

│   ├── routes/

│   ├── services/

│   ├── utils/

│   ├── app.ts

│   └── server.ts

├── .env

├── .eslintignore

├── .eslintrc.json

├── .gitignore

├── .sequelizerc

├── docker-compose.yml

├── Dockerfile

├── package-lock.json

├── package.json

├── README.md

└── tsconfig.json

### Tecnologias Utilizadas

- TypeScript
- cors
- Docker
- MySQL
- Express
- sequelize
- sequelize-cli
- Eslint
- jsonwebtoken
- bcrypt

### Licença

Este projeto está licenciado sob a MIT License.

### Contato

Email: leu-profissional@hotmail.com  
LinkedIn: (https://www.linkedin.com/in/leonardo-moreno-b8015a294/)

Email: marcosVieira23dev@gmail.com
LinkedIn: (https://www.linkedin.com/in/marcos-lucas-vieira-a1b61b200/)
