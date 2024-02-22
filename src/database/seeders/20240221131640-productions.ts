import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('productions',[
      {
        movies_id: 1,
        actors_id: 1,
        director_id: 1,
        studio_id: 1,
      }
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('productions', {});
  }
};
