const { Model, DataTypes } = require('sequelize');

class Horario extends Model{

    static init(connection){
        super.init({
            hora: DataTypes.TIME
        }, {
            sequelize: connection
        })
    }

    static associate(models){
        //this.belongsToMany(models.Agendamento, { foreignKey: "horario_id", through: 'agendamentos', as: 'hora_escolhida' });
        this.hasMany(models.Agendamento, { foreignKey: "horario_id", as: "hora_escolhida" });
    }
}

module.exports = Horario;