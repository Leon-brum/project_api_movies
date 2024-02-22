'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
    async up (queryInterface, Sequelize) {
      await queryInterface.createTable('movies_actors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'movie_id',
        references:{
          model:'movies',
          key:'id',
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      actorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'actor_id',
        references:{
          model:'actors',
          key:'id',
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('movies_actors')

  }
};
