module.exports = function (sequelize, DataTypes) {
  const books = sequelize.define(
    'books', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Unavailable',
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      freezeTableName: true,
      timestamps: false,
    },
  );
  return books;
};
