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
        password: '$2y$10$HUOM8E0yNVp0p6r7GAYs0uU5erQ8d7KyyqLK1duYcyj0I/Dt5LkIq'
        // senha: senha_admin
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
