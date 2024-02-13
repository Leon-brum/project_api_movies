'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
     /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      moviesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'movies_id',
        references:{
          model:'movies',
          key:'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      franchisesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'franchises_id',
        references:{
          model:'franchises',
          key:'id',
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      studiosId:{
        allowNull:false,
        type: Sequelize.INTEGER,
        field: 'studio_id',
        references:{
          model:'studios',
          key:'id',
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      directorsId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        field: 'directors_id',
        references:{
          model: 'directors',
          key:'id',
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }

    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('products')

  }
};
