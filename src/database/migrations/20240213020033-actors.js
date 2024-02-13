'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
    /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('actors', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        allowNull:false,
        type: Sequelize.STRING
      },
      age:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      movies: {
        allowNull: false,
        type: Sequelize.STRING
      },
      moviesID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'movies_id',
        references:{
          model: 'movies',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      studio:{
        allowNull:false,
        type: Sequelize.STRING
      },
      createdAT: {
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
    await queryInterface.dropTable('actors')

  }
};
