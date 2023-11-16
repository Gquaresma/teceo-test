# Teceo teste técnico
Projeto criado para a seleção do cargo Desenvolvedor, da Teceo. O projeto utiliza React.js para implementação do frontend, já para o backend, faz uso de Node.js e express. O banco de dados utilizado foi o PostgreSQL, o qual foi integrado ao backend utilizando a Mikro-orm.

### Objetivo
Elaborar uma aplicação para ajudar usuário a fazer a consulta de um CEP

### Pré-requisitos
* Node.js 16.14.2: https://nodejs.org/en
* Docker: https://docs.docker.com/get-docker/
* Yarn: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

### Executando a aplicação
##### Backend
1. Entre na pasta api utilizando o comando  $ cd api
2. Na raiz da API, crie um arquivo .env segundo o exemplo contido no arquivo .env.example.
3. Execute os seguintes comando
```bash
$ yarn install //irá instalar as dependências necessárias

$ docker-compose up -d //irá iniciar o postgress

$ yarn db:setup //irá criar as tableas e configurar o banco de dados

$ yarn dev //
```

4. Para execuçãos dos testes bastar utilizar o comando 
```bash
$ yarn test
```

##### Frontend

1. Entre na pasta cep-consult, localizada na pasta client
```bash
$ cd client/cep-consult
```
2. Crie um arquivo .env segundo o exemplo contido no arquivo .env.example
3. Instale as dependências necessárias utilizando o comando:
```bash
$ npm install
```
5. Execute o frontend através do comando:
```bash
$ npm start
```