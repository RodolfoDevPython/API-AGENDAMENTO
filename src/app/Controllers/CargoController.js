const Cargo = require("../models/Cargo");

module.exports = {
    async listagem(req, res) {
        const cargo = await Cargo.findAll();
        return res.json(cargo);
    },
    async inserir(req, res){

        const { nome } = req.body;

        const [ cargo, create ] = await Cargo.findOrCreate( { where: { nome } } );
        
        if(!create) return res.status(200).json({ warning: "Esse cargo já existe" });

        return res.json({message: "Cargo Criado com Sucesso!!"});
    },
    async update(req, res){

        const { id } = req.params;
        const { nome } = req.body;

        const [ number, cargo ] = await Cargo.update({ nome }, { where: { id } });

        if(number == 0) return res.status(200).json({ warning: "Ocorreu um erro na atualização de Cargo" });

        return res.json({ message: "Cargo Atualizado com Sucesso" });
    },
    async delete(req, res){

        const { id } = req.params;

        const cargo = await Cargo.destroy({ where: { id } });

        if(!cargo) return res.status(200).json({ warning: "Problema ao excluir!" });

        return res.status(200).json({ message: "Excluido com Sucesso" });
    }
}