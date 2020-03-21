const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sequelizePaginate = require("sequelize-paginate");

class Usuario extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            endereco: DataTypes.STRING,
            telefone: DataTypes.STRING,
            senha: DataTypes.STRING,
            senha_pre_hash: DataTypes.VIRTUAL,
            token: DataTypes.STRING,
        }, {
            sequelize: connection,
            hooks: {
                beforeSave: async user => {
                    if (user.senha_pre_hash) {
                        user.senha = await bcrypt.hash(user.senha_pre_hash, 8);
                    }
                }
            }
        });

        Usuario.prototype.checkPassword = function(password) {
            return bcrypt.compare(password, this.senha);
        }

        Usuario.prototype.generateToken = function(){
            return jwt.sign({ id: this.id }, process.env.APP_SECRET)
        }

    }

    static associate(models){
        this.hasMany(models.Agendamento, { foreignKey: 'usuario_id', as: 'pedidoDoUsuario' });
    }
}
sequelizePaginate.paginate(Usuario);
module.exports = Usuario;