const Promocao = require("../models/Promocao");
const Servico = require("../models/Servico");

module.exports = {

    async inserir(req, res){
        //add uma trigger promocao_servico
        const { servico_id } = req.params;

        const id = servico_id ;//Ajuste para bater na comparação da column da tabela de servicos

        const { nome, desc_taxa, taxa_desconto } = req.body;

        const servico = await Servico.findByPk(id);

        if (!servico) return res.json( { warning: "Servico Not Found!" } );

        const [ promocao ] = await Promocao.findOrCreate({
            where: { nome, desc_taxa, taxa_desconto } 
        });

        await promocao.addDescontos(servico);

        return res.json(promocao);
    },
    async listagem(req, res){

        const { page = 1 } = req.query;

        const option = {
            page,
            paginate: 5,
            order: [['id']],
            include: { association: 'descontos' }
        }

        const servico = await Promocao.paginate(option);

        return res.json(servico);
    },
    async update(req, res){

        const { id, servico_id } = req.params;

        const { nome, desc_taxa, taxa_desconto } = req.body;

        const [ number, promocao ] = await Promocao.update( { nome, desc_taxa, taxa_desconto, servico_id },{ where: { id } });

        if (number == 0) return res.json({ warning: "Promotion not found" });

        return res.json({ message: "Updated Sucess", promocao });
    }
};