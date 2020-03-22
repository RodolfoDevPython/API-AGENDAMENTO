const { Model, DataTypes} = require("sequelize");
const sequelizePaginate = require("sequelize-paginate");

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
        this.hasMany(models.Agendamento, { foreignKey: 'funcionario_id', as: 'ativosDaTarefa' });
    }
}

sequelizePaginate.paginate(Funcionario);
module.exports = Funcionario;