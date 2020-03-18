const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Servico = require("../app/models/Servico");
const Usuario = require("../app/models/Usuario");
const Cargo = require("../app/models/Cargo");
const Funcionario = require("../app/models/Funcionario");
const Promocao = require("../app/models/Promocao");
const Horario = require("../app/models/Horario");
const Agendamento = require("../app/models/Agendamento");

const connection = new Sequelize(dbConfig);

Servico.init(connection);
Usuario.init(connection);
Cargo.init(connection);
Funcionario.init(connection);
Promocao.init(connection);
Horario.init(connection);
Agendamento.init(connection);

Usuario.associate(connection.models);
Funcionario.associate(connection.models);
Cargo.associate(connection.models);
Servico.associate(connection.models);
Promocao.associate(connection.models);
Horario.associate(connection.models);
//Agendamento.associate(connection.models);

module.exports= connection;