'use strict';

const { default: nodemon } = require("nodemon");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('atrativos', {
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
      localizacao: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      descricao: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      dicasVisitacao: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      municipio: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('atrativos');

  }
};
