import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('users',[
      {
        name:'leonardo',
        role:'admin',
        email:'admin@admin.com',
        password: 'senhasupersecreta'
      },
      {
        name:'anao',
        role:'admin',
        email:'admin@admin.com',
        password: 'senhasupersecreta'
      }
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {});
  }
};
