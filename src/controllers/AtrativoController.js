const Atrativo = require('../models/Atrativo.js');

module.exports = {
    async pegaTodosAtrativos(req, res) {
        
        const databaseAtrativo = await Atrativo.findAll();
        const listaDosAtrativos = [];

        for (let i=1; i <= databaseAtrativo.length; i++) {
            listaDosAtrativos.push(databaseAtrativo[i-1].nome);
        }

        if (listaDosAtrativos =='' || listaDosAtrativos == null) {
            return res.status(200).send({message: "Nenhum atrativo encontrado"});
        }

        return res.status(200).send(listaDosAtrativos);
    },
    async pegaAtrativo(req, res) {
        const databaseAtrativo = await Atrativo.findAll();

        const { nome } = req.params;

        let atrativoCompleto='';

        for (let i=0; i<=(databaseAtrativo.length-1) ; i++) {
            if (databaseAtrativo[i].nome === nome ) {
                atrativoCompleto = databaseAtrativo[i];
            }
        }

        if (atrativoCompleto =='' || atrativoCompleto == null) {
            return res.status(200).send({message: "Nenhum atrativo encontrado"});
        }

        const atrativoFinal = {
            nome : atrativoCompleto.nome,
            localizacao : atrativoCompleto.localizacao,
            descricao : atrativoCompleto.descricao,
            dicasVisitacao: atrativoCompleto.dicasVisitacao,
            municipio: atrativoCompleto.municipio
        }
        return res.status(200).send(atrativoFinal);
    },
    async pegaAtrativoPorLocal (req, res) {

        const databaseAtrativo = await Atrativo.findAll();

        const { municipio } = req.params;

        const listaAtrativosLocais = [];

        for (let i=0; i<=(databaseAtrativo.length-1) ; i++) {
            if (databaseAtrativo[i].municipio == municipio ) {
                listaAtrativosLocais.push(databaseAtrativo[i].nome);
            }
        }

        if (listaAtrativosLocais =='' || listaAtrativosLocais == null) {
            return res.status(200).send({message: "Nenhum atrativo encontrado no município indicado"});
        }

        return res.status(200).send(listaAtrativosLocais);
    }
}
