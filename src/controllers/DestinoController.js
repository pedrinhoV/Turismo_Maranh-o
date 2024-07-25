const Destino = require('../models/Destino.js');

module.exports = {
    async pegaTodosDestinos(req, res) {
        
        const databaseDestino = await Destino.findAll();
        const listaDosDestinos = [];

        for (let i=1; i <= databaseDestino.length; i++) {
            listaDosDestinos.push(databaseDestino[i-1].nome);
        }

        if (listaDosDestinos =='' || listaDosDestinos == null) {
            return res.status(200).send({message: "Nenhum destino encontrado"});
        }

        return res.status(200).send(listaDosDestinos);
    },
    async pegaDestino(req, res) {
        const databaseDestino = await Destino.findAll();

        const { nome } = req.params;

        let destinoCompleto='';

        for (let i=0; i<=(databaseDestino.length-1) ; i++) {
            if (databaseDestino[i].nome === nome ) {
                destinoCompleto = databaseDestino[i];
            }
        }

        if (destinoCompleto =='' || destinoCompleto == null) {
            return res.status(200).send({message: "Nenhum destino encontrado"});
        }

        const destinoFinal = {
            nome : destinoCompleto.nome,
            quatidadesAtrativos : destinoCompleto.qtd_atrativos,
            localizacao : destinoCompleto.localizacao,
            descricao : destinoCompleto.descricao,
            fotos: destinoCompleto.foto,
        }
        return res.status(200).send(destinoFinal);
    },
    async update(req, res) {

    },
    async delete(req, res) {

    },
}
