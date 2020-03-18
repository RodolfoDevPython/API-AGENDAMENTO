const { Model, DataTypes } = require("sequelize");

class Promocao extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            desc_taxa: DataTypes.STRING,
            taxa_desconto: DataTypes.INTEGER
        }, {
            sequelize: connection,
            tableName: 'promocoes'
        })
    }
    static associate(models){
        this.belongsToMany(models.Servico, { foreignKey: 'promocao_id', through: "promocoes_servicos", as: 'descontos' } );
        this.hasMany(models.Agendamento, { foreignKey: 'promocao_id', as: 'promocaoEscolhida' } );
    }
    
}

module.exports = Promocao;