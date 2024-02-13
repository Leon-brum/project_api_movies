'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
     /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('studios', {
      id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false, 
        type: Sequelize.STRING
      },
      movies: {
        allowNull: false,
        type: Sequelize.STRING
      },
      moviesId:{
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
      franchises: {
        allowNull: false,
        type: Sequelize.STRING
      },
      actors: {
        allowNull: false,
        type: Sequelize.STRING
      },
      actorsId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        field: 'actors_id',
        references: {
          model: 'actors',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updateAt: {
        allowNull:false,
        type: Sequelize.DATE
      }
     });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('studios')
  }
};
