const connection = require('../config/database.js');

const Destino = require('../models/Destino');

const Atrativo = require('../models/Atrativo');

Destino.init(connection);

Atrativo.init(connection);

module.exports = connection;