'use strict';

const { default: nodemon } = require("nodemon");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('destinos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      qtd_atrativos: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      localizacao: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      descricao: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('destinos');

  }
};