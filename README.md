
<h1 align="center">Blogs Api</h1>

<h3 align="center">Neste projeto Desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog</h3>

## 💻 Sobre o projeto

Uma Api de Blogs que permite cadastrar usuários, criar posts, logar, modificar posts e deletar usuários e posts. 
Para todas essas coisas é necessário um usuário logado e este usuário pode modificar e deletas apenas os conteudos que pertencem a ele.

---
## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
<details>

```bash

# Clone este repositório
$ git clone git@github.com:serjofrancisco/ProjectTrybe-BlogsApi.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Blogs-Api

# Instale as dependências
$ npm install

# Suba os containers Docker da API e do banco de dados
$ docker-compose up -d

# Criar e popular o banco de dados
$ npm run prestart
$ npm run seed

# O servidor inciará na porta:3000 - acesse http://localhost:3000

# Caso queira executar a aplicação em modo de desenvolvimento
$ npm run debug

# O servidor inciará na porta:3001 - acesse http://localhost:3001

```
</details>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
-  **[Node.js](https://nodejs.org/en/)**
-    **[Express](https://expressjs.com/)**
-   **[Sequelize](https://sequelize.org/)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Docker](https://www.docker.com/)**
-   **[MySQL](https://www.mysql.com/)**
-   **[Joi](https://github.com/hapijs/joi)**
-   **[Jwt](https://jwt.io/)**

