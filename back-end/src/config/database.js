const { underscoredIf } = require("sequelize/lib/utils");
const dotenv  = require('dotenv');
const Sequelize = require("sequelize");
dotenv.config();

const connection = new Sequelize (process.env.DATABASEURL);

connection.authenticate().then(()=> console.log('Conexão com o banco de dados bem sucedida'));

module.exports=connection;