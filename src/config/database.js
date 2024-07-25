const { underscoredIf } = require("sequelize/lib/utils");

module.exports = {
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: 'pvphmvvl14',
    database: 'turismo_db',
    define: {
        timestamps: true,
        underscored: true,

    },
};