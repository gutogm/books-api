module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isbn: {
        type: Sequelize.STRING,
        defaultValue: 'Unavailable',
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('books');
  },
};
