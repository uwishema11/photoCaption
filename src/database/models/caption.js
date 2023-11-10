'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Caption.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'users'
      })
      Caption.belongsTo(models.Image, {
        foreignKey: 'imageId',
        as: 'photos'
      })
    }
  }
  Caption.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Caption',
  });
  return Caption;
};