import { QueryInterface } from 'sequelize';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('movies_actors',[
      {
        movie_id: '1',
        actor_id: '1'
      },
      {
        movie_id: '1',
        actor_id: '2'
      },
      {
        movie_id: '1',
        actor_id: '3'
      }
    ])
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('movies_actors', {});
  }
};

