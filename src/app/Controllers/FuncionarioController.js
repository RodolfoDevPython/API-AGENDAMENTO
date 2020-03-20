const Cargo = require("../models/Cargo");
const Servico = require("../models/Servico");
const Funcionario = require("../models/Funcionario");

module.exports = {
    //Listagem por um cargo  especifico
    async listagem(req, res){

        const { id } = req.params; //id do cargo
        const { page = 1} = req.query;
        
        /*const cargo = await Cargo.findByPk(id , {
            include: { association: 'Rel_funcionarios' }
        });*/
        const option = {
            attributes: [ "nome"],
            page,
            paginate: 4,
            order: [ ["id"] ],
            include: { association: 'Rel_cargos' }
        }

        const funcionario = await Funcionario.paginate(option);

        //if(!cargo) return res.status(400).json( {error: "Cargo not found!"} );

        return res.json(funcionario);

    },
    async inserir(req, res){
        
        const { id } = req.params;
        //id_cargo

        const { nome } = req.body;

        const cargo = await Cargo.findByPk(id);

        if(!cargo) return res.status(400).json({ error: 'Cargo not found!'});

        const funcionario = await Funcionario.create({
            nome,
            cargo_id : id
        });

        return res.json(funcionario);

    },
    async update(req, res){

        const { id } = req.params;
        const { nome } = req.body;

        const [ number, funcionario ] = await Funcionario.update({
            nome
        }, { where : { id } });

        if (number == 0) return res.json({ warning: "Ocorreu um erro na alteração" });

        return res.status(200).json("Funcionario Atualizado");
        
    },
    async delete(req, res){

        const { id } = req.params;

        const funcionario = await Funcionario.destroy({ where: { id } });

        if (funcionario) return res.status(200).json({ message: "Funcionario Deletado!"});
        
        return res.json({ warning: "Não foi possível deletar"});

    },
    async inserir_servico_funcionario(req, res){

        const { servico_id} = req.params;
        const { cargo_id } = req.body;
        
        const id = servico_id;

        const { nome } = req.body;
        
        const servico = await Servico.findByPk(id);

        if (!servico) return res.status(400).json( {error: "Servico Not Found!"} );

        const [ funcionario ] = await Funcionario.findOrCreate({
            where: { "nome": nome, "cargo_id": cargo_id } 
        });

        await servico.addTarefas(funcionario)

        return res.json(funcionario);

    },

    async lista_ser_func(req, res){

        const { funcionario_id } = req.params;

        const id = funcionario_id;

        const funcionario = await Funcionario.findByPk(id)
        
        //const servico = await Servico.getTarefas(funcionario)
        //Ainda não está definido está feacture  
    },
    
}