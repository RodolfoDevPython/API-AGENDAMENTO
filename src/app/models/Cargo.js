const { Model, DataTypes } = require('sequelize');

class Cargo extends Model {

    static init(connection) {
        super.init({
            nome: DataTypes.STRING
        },{
            sequelize: connection
        });
        
    }
    static associate(models) {
        this.hasMany(models.Funcionario, { foreignKey: "cargo_id", as: "Rel_funcionarios" });
        this.hasMany(models.Servico, { foreignKey: "cargo_id", as: "Rel_servicos" });
    }
}

module.exports = Cargo;