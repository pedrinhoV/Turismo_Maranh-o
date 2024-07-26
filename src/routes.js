const express = require('express');

const DestinoController = require('./controllers/DestinoController');

const AtrativoController = require('./controllers/AtrativoController');

const router = express.Router();

router.get('/destinos', (DestinoController.pegaTodosDestinos));

router.get('/destinos/:nome', (DestinoController.pegaDestino));

router.get('/atrativos', (AtrativoController.pegaTodosAtrativos));

router.get('/atrativos/:nome', (AtrativoController.pegaAtrativo));

router.get('/destinos/atrativos/:municipio', (AtrativoController.pegaAtrativoPorLocal));

module.exports = router;
