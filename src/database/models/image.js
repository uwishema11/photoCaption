'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.hasMany(models.Caption, {
        foreignKey: 'imageId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      Image.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'users',
        onDelete: 'CASCADE', // Add this line to enable cascading on deletion
        onUpdate: 'CASCADE', // Add this line to enable cascading on update
      });
    }
  }

  Image.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });

  return Image;
};
