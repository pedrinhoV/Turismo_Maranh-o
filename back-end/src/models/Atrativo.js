const {Model, DataTypes} = require('sequelize');

class Atrativo extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            localizacao: DataTypes.STRING,
            descricao: DataTypes.STRING,
            dicasVisitacao: DataTypes.STRING,
            municipio: DataTypes.STRING,
        }, {sequelize})
    }
}

module.exports = Atrativo;