# books-api

Desenvolvimento de API para cadastro, listagem e retorno de livros.

A API foi construida usando NodeJS v8.x, Postgresql com Ubuntu 16.04

## Padrão de código
O padrão de código utilizado é o definido pelo airbnb (https://github.com/airbnb/javascript) através do _linter_ (`eslint`).

## Variaveis de ambiente
A configuração de acesso a base deve ser feita utilizando variaveis de ambiente do sistema.

- DB_USERNAME: usuário de acesso ao banco
- DB_PASSWORD: senha de acesso ao banco
- DB_DATABASE: nome da base de dados
- DB_HOST: endereço da base de dados
- DB_PORT: porta de acesso a base de dados
- DB_LOGGING: _flag_ para saide de queries executadas na base

Exemplo:
```bash
export DB_USERNAME="postgres";
export DB_PASSWORD="postgres";
export DB_DATABASE="db_postgres";
export DB_HOST="localhost";
export DB_PORT=5432;
export DB_LOGGING="true";
```

## Instalação de dependencias
```bash
npm install
```

## Execução
```bash
npm start
```

## Tests
```bash
npm tests
```

## Instalação de NodeJS v8 no Ubuntu
```bash
sudo apt-get update;
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Projetos correlacionados
- [books-scraper](https://github.com/gutogm/books-scraper): carrega os dados através da API.
- [books-lib](https://github.com/gutogm/books-lib): biblioteca para uso de API por outros projetos.