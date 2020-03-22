const Horario = require("../models/Horario");

module.exports = {

    async inserir(req, res){
        const { hora } = req.body;

        const [ horario, created ] = await Horario.findOrCreate({ where: { hora } });

        if (!created) return res.json({ warning: "Problema ao criar um novo Horario" });

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

    async delete(req, res){

        const { id } = req.params;

        const horario = await Horario.destroy({ where:{ id } });

        if (!horario) return res.json({ warning: "Problema ao excluir um horario" });

        return res.json({ message: "Horario deletado com sucesso" });
    },

    async update(req, res){

        const { id } = req.params;
        const { hora } = req.body;

        const [ number, horario ] = await Horario.update({ hora } ,{ where: { id } });

        if (number == 0) return res.json({ warning: "Problema ao atualizar" });

        return res.json({ message: "Horario Atualizado com Sucesso", horario });
    }
};