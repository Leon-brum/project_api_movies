'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
     /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'movies_id',
        references:{
          model:'movies',
          key:'id',
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      actorsId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'actors_id',
        references:{
        model:'actors',
        key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate:'CASCADE'
      }, 
      directorId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        field: 'directors_id',
        references:{
          model: 'directors',
          key:'id',
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      studioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'studio_id',
        references:{
          model:'studios',
          key:'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('products')

  }
};
