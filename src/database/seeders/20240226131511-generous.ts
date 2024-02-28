import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('generous',[
      {
        name: 'Aventura',
      },
      {
        name: 'Ação',
      },
      {
        name: 'Terror',
      },
      {
        name: 'Suspense',
      },
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('generous', {});
  }
};
