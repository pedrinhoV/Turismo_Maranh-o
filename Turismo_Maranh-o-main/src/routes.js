const express = require('express');

const DestinoController = require('./controllers/DestinoController');

const router = express.Router();

router.get('/destinos', (DestinoController.pegaTodosDestinos));

router.get('/destinos/:nome', (DestinoController.pegaDestino));

module.exports = router;