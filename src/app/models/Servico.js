const { Model, DataTypes } = require('sequelize');
const sequelizePaginate = require("sequelize-paginate");

class Servico extends Model{

    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            duracao: DataTypes.INTEGER,
        }, {
            sequelize: connection
        });
    }   

    static associate(models){
        this.belongsTo(models.Cargo, { foreignKey: 'cargo_id', as: 'tarefas_cargos' } ); 
        this.belongsToMany(models.Promocao, { foreignKey: 'servico_id', through: 'promocoes_servicos', as: 'servicos' } ); 
        this.hasMany(models.Agendamento, { foreignKey: 'servico_id', as: 'servicoEscolhido' })
    }   

    
}

sequelizePaginate.paginate(Servico);
module.exports = Servico;