'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
     /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('movies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    genderId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'gender_id',
      references:{
        model:'generous',
        key:'id',
      },
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    launch: {
      allowNull: false,
      type: Sequelize.DATE
    }
   });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('movies')
  }
};
