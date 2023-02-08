
<h1 align="center">Car Shop</h1>

<h3 align="center">Este projeto foi feito para aperfeiçoar e aplicar os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Isso será feito utilizando o banco de dados MongoDB com ODM Mongoose</h3>

## 💻 Sobre o projeto

Uma Api para gerenciar uma concessionária de veículos permite adicionar carros e motos, alterar e deletar veiculos já cadastratos .

---
## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
<details>

```bash

# Clone este repositório
$ git clone git@github.com:vitorbelarmino/Car-shop.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Car-shop

# Instale as dependências
$ npm install

# Suba os containers Docker da API e do banco de dados
$ docker-compose up -d

# Criar e popular o banco de dados
$ npm run prestart
$ npm run seed

# O servidor inciará na porta:3001 - acesse http://localhost:3001

# Caso queira executar a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3002 - acesse http://localhost:3002

```
</details>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
-  **[Node.js](https://nodejs.org/en/)**
-  **[Express](https://expressjs.com/)**
-  **[TypeScript](https://www.typescriptlang.org/)**
-  **[MongoBD](https://www.mongodb.com/)**
-  **[Mongoose](https://mongoosejs.com/)**
-  **[dotENV](https://github.com/motdotla/dotenv)**
-  **[Docker](https://www.docker.com/)**

