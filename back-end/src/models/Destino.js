const {Model, DataTypes} = require('sequelize');

class Destino extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            qtd_atrativos: DataTypes.SMALLINT,
            localizacao: DataTypes.STRING,
            descricao: DataTypes.STRING,
        }, {sequelize})
    }
}

module.exports = Destino;