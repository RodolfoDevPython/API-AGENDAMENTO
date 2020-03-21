const Sequelize = require("sequelize");
const Agendamento = require("../models/Agendamento");
const Servico = require("../models/Servico");
const Promocao = require("../models/Promocao");
const Funcionario = require("../models/Funcionario");
const Horario = require("../models/Horario");

module.exports = {

    async inserir_dados(req, res){

        const agenda = await Agendamento.sequelize.query("call PutHrChoose(1, 1, 3, 1, '2001-11-10', 1, @msg)", {
            model: Agendamento,
            mapToModel: true // pass true here if you have any mapped fields
        });

        if (agenda) return res.json(agenda);

        return res.json({ message: "error no agendamento!" })
    },

    async horariosDisponiveis(req, res){
        
        const hora = await Horario.findAll({
            include:[{
                model: Agendamento,
                association: "hora_escolhida",
                where: { "id": Sequelize.col("horario_id") }
            }]
        });

        return res.json(hora);
    }

}