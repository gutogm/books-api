const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: 'books-db',
  host: 'books-db',
  port: 5432,
  logging: false,
  dialect: 'postgres',
  migrationStorage: 'sequelize',
  seederStorage: 'sequelize',
  operatorsAliases: false,
});

module.exports = sequelize;
