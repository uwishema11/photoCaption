'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.hasMany(models.Caption, {
        foreignKey: 'captionId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Photo.belongsToMany(models.User,{
        foreignKey: 'userId',
        as: 'photoes'
      })
    }
  }
  Photo.init({
    image: {
        type: DataTypes.STRING,
        allowNull: false
      },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uploadDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};