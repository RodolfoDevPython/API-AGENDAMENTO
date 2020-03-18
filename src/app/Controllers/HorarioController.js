const Horario = require("../models/Horario");

module.exports = {

    async inserir(req, res){
        const { hora } = req.body;

        const [ horario ] = await Horario.findOrCreate({ where: { hora } });

        return res.json(horario);

    },

    async listagem(req, res){
        
        const horarios = await Horario.findAll();

        return res.status(200).json({ horarios });

    },

};