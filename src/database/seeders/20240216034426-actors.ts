import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('actors',[
      {
        name: 'Elijah Wood',
        age: 43
      },
      {
        name:'Ian McKellen',
        age: 84
      },
      {
        name: 'Viggo Mortensen',
        age: 65
      }
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('actors', {});
  }
};
