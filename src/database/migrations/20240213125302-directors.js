'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
     /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('directors',{
      id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING
      },
      age: {
        allowNull:false,
        type: Sequelize.INTEGER 
      }
    })
  },

  async down (queryInterface, _Sequelize) {
   await queryInterface.dropTable('directors')
  }
};
