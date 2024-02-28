import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('wishlists',[
      {
        user_id: '1',
        movie_id: '1'
      },
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('wishlists', {});
  }
};
