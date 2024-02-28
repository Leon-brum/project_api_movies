import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('movies_generous',[
      {
        movie_id: '1',
        gender_id: '1'
      },
      {
        movie_id: '1',
        gender_id: '2'
      },
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('movies_generous', {});
  }
};
