const Sequelize = require ('sequelize');

const dbConfig = require('../config/database.js');

const Destino = require('../models/Destino');

const connection = new Sequelize(dbConfig);

Destino.init(connection);

module.exports = connection;
