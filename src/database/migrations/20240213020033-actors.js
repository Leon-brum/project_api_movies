'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable('actors', {
      
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('actors')

  }
};
