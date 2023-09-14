'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Captions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type:Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      photoId: {
        type : Sequelize.INTEGER,
        references:{
          model:'Photos',
          key: 'id'
        }
      },
      captionText: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateCreated: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Captions');
  }
};