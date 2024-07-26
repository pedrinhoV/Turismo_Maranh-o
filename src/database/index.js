const Sequelize = require ('sequelize');

const dbConfig = require('../config/database.js');

const Destino = require('../models/Destino');

const Atrativo = require('../models/Atrativo');

const connection = new Sequelize(dbConfig);

Destino.init(connection);

Atrativo.init(connection);

module.exports = connection;
