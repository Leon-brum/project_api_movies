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
    launch: {
      allowNull: false,
      type: Sequelize.DATE
    },
    directorId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'director_id',
      references:{
        model:'directors',
        key:'id',
      },
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    studioId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'studio_id',
      references:{
        model:'studios',
        key:'id',
      },
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
   });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('movies')
  }
};
