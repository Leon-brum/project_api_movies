'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
     /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('studios', {
      id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false, 
        type: Sequelize.STRING
      },
      movieId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'movie_id',
        references:{
          model:'movies',
          key:'id',
        },
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
     });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('studios')
  }
};
