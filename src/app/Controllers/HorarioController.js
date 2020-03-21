const Horario = require("../models/Horario");

module.exports = {

    async inserir(req, res){
        const { hora } = req.body;

        const [ horario ] = await Horario.findOrCreate({ where: { hora } });

        return res.json(horario);

    },

    async listagem(req, res){
        const { page = 1 } = req.query;

        const option = {
            attribute: ["hora", "id"],
            page,
            paginate: 6,
            order: [['id']]
        }
        const horarios = await Horario.paginate(option);

        return res.status(200).json({ horarios });

    },

};