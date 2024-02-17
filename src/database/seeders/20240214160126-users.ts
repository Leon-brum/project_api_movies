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
        name:'Marcos',
        role:'admin',
        email:'admin@admin.com',
        password: '$2a$10$TN6TwMIJRCbAT8LEgJQ4reSO.Yks65RoGVZbTH1.WOok569aBgbh.'
      }
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {});
  }
};
