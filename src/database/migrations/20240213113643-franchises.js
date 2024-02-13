'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
     /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('franchises',{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name:{
          allowNull:false,
          type: Sequelize.STRING
        },
        launch: {
          allowNull: false,
          type: Sequelize.DATE
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE      
        },
         updateAt: {
          allowNull: false,
          type: Sequelize.DATE
         }
      })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('franchises')
  }
};
