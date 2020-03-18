const Servico = require("../models/Servico");

module.exports = {
    async inserir( req, res) {

        const { nome, duracao } = req.body;

        const [ servico , created ]  = await Servico.findOrCreate(  { where: { nome, duracao } } );

        if (!created) return res.json({ message: "O Servico já Existe!!"})

        return res.json({ message: "Servico criado com Sucesso!!"});
    },
    async listagem(req, res) {

        const { page = 1 } = req.query;

        const option = {
            attributes: [ "nome", "duracao" ],
            page,
            paginate: 4,
            order: [ ["id"] ]
        } 
    
        const servico = await Servico.paginate(option);

        return res.json(servico);
    },

    async update(req, res){

        const { id } = req.params

        const { nome, duracao } = req.body;

        const [ number, servico ] = await Servico.update({ nome , duracao },{ where : { id } });

        if (number == 0) return res.json({ message: "Usuario não Existe"});

        return res.json({ message: "Usuario atualizado" });

    },

    async delete(req, res){

        const { id } = req.params;

        const servico = await Servico.destroy({ where : { id } });

        if(servico) return res.json({ message: "Usuario deletado" });

        return res.status(500).json({ message: "Problema na exclusão" }).send();

    }
}
