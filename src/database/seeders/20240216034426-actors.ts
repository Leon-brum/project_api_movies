import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('actors',[
      {
        name: 'Adam Sandler',
        age: 57
      },
      {
        name:'Kevin James',
        age: 58
      }
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('actors', {});
  }
};
