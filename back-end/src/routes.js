const express = require('express');

const DestinoController = require('./controllers/DestinoController');

const AtrativoController = require('./controllers/AtrativoController');

const router = express.Router();

router.get('/', (req, res) => res.send('PAGE ONE'))

router.get('/destinos', (DestinoController.pegaTodosDestinos));

router.get('/destinos/:nome', (DestinoController.pegaDestino));

router.get('/tudo/destinos', (DestinoController.pegaTudoDestino));

router.get('/atrativos', (AtrativoController.pegaTodosAtrativos));

router.get('/atrativos/:nome', (AtrativoController.pegaAtrativo));

router.get('/tudo/atrativos', (AtrativoController.pegaTudoAtrativo));

router.get('/destinos/atrativos/:municipio', (AtrativoController.pegaAtrativoPorLocal));

router.get('/tudo/destinos/atrativos/:municipio', (AtrativoController.pegaAtrativoPorLocalTotal));

module.exports = router;

