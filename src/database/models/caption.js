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
        foreignKey: 'captionId',
        as: 'users'
      })
      Caption.belongsTo(models.Photo, {
        foreignKey: 'captionId',
        as: 'photos'
      })
    }

  }
  Caption.init({
    captionText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateCreated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Caption',
  });
  return Caption;
};