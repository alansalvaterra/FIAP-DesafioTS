## Desafio
  -  Objetivo:

Desenvolver um sistema de gerenciamento de biblioteca utilizando a última versão do TypeScript. O foco será criar um CRUD (Create, Read, Update, Delete), que se conecta a um banco de dados, podendo ser NoSQL ou SQL.

  -  Requisitos funcionais:

Gerenciamento de livros: o objetivo do seu sistema será disponibilizar uma API que tenha as funcionalidades de um CRUD para que uma aplicação Front-end possa gerenciar estes dados.
Estrutura proposta para entidade Livro: cada livro pode possuir um título, autor(a), ISBN, ano de publicação e, caso queira se aventurar, pode adicionar uma Entidade Editora, assim um livro pode fazer parte de uma Editora e uma Editora pode ter uma lista de livros

  -  Requisitos Técnicos:

Desenvolvimento do projeto utilizando a versão mais recente do TypeScript para garantir que o seu código esteja atualizado. Integração do sistema a um banco de dados que pode ser um NoSQL ou SQL. Neste cenário, você pode utilizar o Docker ou um banco de dados grátis como o PostgreSQL na plataforma Supabase.


## Como Usar a API

A API oferece as seguintes rotas:

- `GET /books`: Retorna todos os livros cadastrados.
- `GET /books/:id`: Retorna os detalhes de um livro específico pelo seu ID.
- `POST /books`: Adiciona um novo livro.
- `PUT /books/:id`: Atualiza os detalhes de um livro existente.
- `DELETE /books/:id`: Exclui um livro existente.


## Tecnologias utilizadas:

- TypeScript: Linguagem de programação utilizada para o desenvolvimento do projeto.
- TypeORM: Biblioteca de ORM utilizada para interagir com o banco de dados SQL.
- SQLite: Banco de dados SQL utilizado para armazenar os dados dos livros.
- Express: Framework web utilizado para construir a API REST.
- Postman: Ferramenta utilizada para testar e documentar as rotas da API.


## Para rodar o projeto:

1. Clone este repositório em sua máquina local.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor com `npm start`.
4. Acesse a API através de `http://localhost:3000`.
