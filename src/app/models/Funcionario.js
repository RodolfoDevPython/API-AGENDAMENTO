const { Model, DataTypes} = require("sequelize");

class Funcionario extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING, 
        }, {
            sequelize : connection
        });
    }
    static associate(models){
        this.belongsTo(models.Cargo, { foreignKey: "cargo_id", as: "Rel_cargos"})
        this.belongsToMany(models.Servico, { foreignKey: 'funcionario_id', through: 'servicos_funcionarios', as: 'prestador' } ); 
        this.hasMany(models.Agendamento, { foreignKey: 'funcionario_id', as: 'ativosDaTarefa' });
    }
}

module.exports = Funcionario;