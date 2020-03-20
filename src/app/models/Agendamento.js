const { Model, DataTypes } = require('sequelize');
const sequelizePaginate = require("sequelize-paginate");

class Agendamento extends Model{
    static init(connection){
        super.init({ 
            dia_marcado: DataTypes.DATE ,
            usuario_id: DataTypes.INTEGER, 
            funcionario_id: DataTypes.INTEGER,
            servico_id: DataTypes.INTEGER,
            horario_id: DataTypes.INTEGER,
            promocao_id: DataTypes.INTEGER
        }, {
            sequelize : connection
        });
    }
};

sequelizePaginate.paginate(Agendamento);
module.exports = Agendamento;