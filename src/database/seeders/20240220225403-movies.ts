import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('movies', [
      {
        name: 'O Senhor dos Anéis: O Retorno do Rei',
        launch: '2003-12-25',
        director_id: 1,
        studio_id: 1
      },
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('movies', {});
  }
};
