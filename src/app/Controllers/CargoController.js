const Cargo = require("../models/Cargo");

module.exports = {
    async listagem(req, res) {
        const cargo = await Cargo.findAll();
        
        return res.json(cargo);
    },
    async inserir(req, res){

        const { nome } = req.body;


        const cargo = await Cargo.create( {nome} );
        
        return res.json(cargo);
    }
}