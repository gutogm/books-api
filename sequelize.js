const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  logging: process.env.DB_LOGGING ? process.env.DB_LOGGING === 'true' : false,
  dialect: 'postgres',
  migrationStorage: 'sequelize',
  seederStorage: 'sequelize',
  operatorsAliases: false,
});

module.exports = sequelize;
