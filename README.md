# books-api

Desenvolvimento de API para cadastro, listagem e retorno de livros.

A API foi construida usando NodeJS v8.x, Postgresql com Ubuntu 16.04

## Padrão de código
O padrão de código utilizado é o definido pelo airbnb (https://github.com/airbnb/javascript) através do _linter_ (`eslint`).

## Docker
A imagem da aplicação está no docker hub

Para subir a aplicação com um banco de dados, só é necessário rodar o seguinte
comando dentro da pasta da aplicação
```bash
# criar banco de dados postgresql
docker-compose up -d books-db
# criar/ atualizar modelos da base
docker-compose up -d books-migrate
# rodar aplicação
docker-compose up -d books-api
# rodar testes
docker-compose up -d books-test
```
Obs.: A senha padrão utilizada é `pgpassword`.
Caso queira definir uma senha de acesso a base,
utilizar a variavel de ambiente `DB_PASSWORD`
como no exemplo abaixo:
```bash
DB_PASSWORD={SENHA} docker-compose up -d
```

### Acesso a aplicação
O comando vai subir 4 containers:

1. books-db: banco postgresql
2. books-migrate: container responsavel por criar o esquema de banco de dados
3. books-api: api de livros
4. books-test: uma lista de teste básico envolvendo as chamadas da api

A api ficará disponivel no http://localhost:3000/books


## Projetos correlacionados
- [books-scraper](https://github.com/gutogm/books-scraper): carrega os dados através da API.
- [books-lib](https://github.com/gutogm/books-lib): biblioteca para uso de API por outros projetos.