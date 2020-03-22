const Servico = require("../models/Servico");
const Cargo = require("../models/Cargo");

module.exports = {
    async inserir( req, res) {

        const { nome, duracao } = req.body;
        const { cargo_id } = req.params;
        const id = cargo_id ; 

        const find_cargo = await Cargo.findByPk(id);

        if (!find_cargo) return res.json({ warning: "not found Cargo" });

        const [ servico , created ]  = await Servico.findOrCreate(  { where: { nome, duracao, cargo_id } } );

        if (!created) return res.json({ message: "O Servico já Existe!!"});

        return res.json({ message: "Servico criado com Sucesso!!"});
    },
    async listagem(req, res) {

        const { page = 1 } = req.query;

        const option = {
            attributes: [ "id", "nome", "duracao" ],
            page,
            paginate: 4,
            order: [ ["id"] ],
            include: { association: 'tarefas_cargos' }
        } 
    
        const servico = await Servico.paginate(option);

        return res.json(servico);
    },
    async update(req, res){

        const { id , cargo_id } = req.params

        const { nome, duracao } = req.body;

        const [ number, servico ] = await Servico.update({ nome , duracao , cargo_id },{ where : { id } });

        if (number == 0) return res.json({ message: "Usuario não Existe"});

        return res.json({ message: "Usuario atualizado" });
    },
    async delete(req, res){

        const { id } = req.params;

        const servico = await Servico.destroy({ where : { id } });

        if (servico) return res.json({ message: "Usuario deletado" });

        return res.json({ warning: "Problema na exclusão" });
    }
}
