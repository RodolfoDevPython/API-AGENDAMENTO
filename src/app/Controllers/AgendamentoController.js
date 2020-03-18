const Sequelize = require("sequelize");
const Agendamento = require("../models/Agendamento");
const Servico = require("../models/Servico");
const Promocao = require("../models/Promocao");
const Funcionario = require("../models/Funcionario");
const Horario = require("../models/Horario");

module.exports = {

    async inserir(req, res){
        const { 
            usuario_id, 
            funcionario_id,
            servico_id,
            horario_id,
        } = req.params;

        const { promocao_id } = req.body;

        const [ agendamento, created ] = await Agendamento.findOrCreate({
            where: { 
                usuario_id , 
                funcionario_id,
                servico_id,
                promocao_id,
                horario_id,
            } 
        });

        if(!created) return res.status(203).json({ error: "Ja foi um Agendamento com as mesmas especificacoes" });

        return res.json(agendamento);
    },

    async inserir_dados(req, res){

        //Buscando o servico que está no agendamento
        /*const servico = await Servico.findAll({
            include: [{
                model: Agendamento,
                association: "servicoEscolhido",
                where: { "id": Sequelize.col("servico_id") }
              }]
        });*/
        
        const agenda = await Agendamento.sequelize.query("call PutHrChoose(1, 1, 3, 1, '2001-11-10', 1, @msg)", {
            model: Agendamento,
            mapToModel: true // pass true here if you have any mapped fields
        });

        if (agenda) return res.json(agenda);

        return res.json({ message: "error no agendamento!" })
    },

    async listagem(req, res){
        
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