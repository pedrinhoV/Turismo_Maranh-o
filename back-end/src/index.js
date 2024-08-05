const express = require('express');

const routes = require('./routes.js');

const dotenv  = require('dotenv');

const bodyParser = require('body-parser');

const cors = require('cors');

dotenv.config();

const port = process.env.PORT || 4000;

require('./database');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(routes);

app.listen(port), console.log(`Server running in PORT:${port}`);
