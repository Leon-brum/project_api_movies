'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('wishlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model:'users',
          key:'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      moviesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'movies_id',
        references: {
          model:'movies',
          key:'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('wishlists');
  }
};
