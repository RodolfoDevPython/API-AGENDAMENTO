const Promocao = require("../models/Promocao");
const Servico = require("../models/Servico");

module.exports = {

    async inserir(req, res){

        const { servico_id } = req.params;

        const id = servico_id ;//Ajuste para bater na comparação da column da tabela de servicos

        const { nome, desc_taxa, taxa_desconto } = req.body;

        const servico = await Servico.findByPk(id);

        if(!servico) return res.status(400).json( { error: "Servico Not Found!" } )

        const [ promocao ] = await Promocao.findOrCreate({
            where: { nome, desc_taxa, taxa_desconto } 
        });

        await promocao.addDescontos(servico);

        return res.json(promocao);
    }

};