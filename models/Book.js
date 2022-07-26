const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      summary: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isURL: true
      }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'book'
    }
  );

  module.exports = Book;
