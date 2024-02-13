'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
     /**
    *
    * @param {import('sequelize').QueryInterface} queryInterface
    * @param {*} Sequelize
    */
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('movies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    generous: {
      allowNull: false,
      type: Sequelize.STRING
    },
    studio: { 
      allowNull: false,
      type: Sequelize.STRING
    },
    director: {
      allowNull: false,
      type: Sequelize.STRING
    },
    actorsId: { /** RELACIONAL */
      allowNull:false,
      type: Sequelize.INTEGER,
      field: 'actors_id',
      references: {
        model: 'actors',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'      
    },
    launch: {
      allowNull: false,
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE      
    },
     updateAt: {
      allowNull: false,
      type: Sequelize.DATE
     }
   });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('movies')
  }
};
