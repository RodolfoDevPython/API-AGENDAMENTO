const express = require("express");
const AuthMiddleware = require("../src/app/middlewares/auth");

const ServicoController = require("./app/Controllers/ServicoController");
const UsuarioController = require("./app/Controllers/UsuarioController");
const CargoController = require("./app/Controllers/CargoController");
const FuncionarioController = require("./app/Controllers/FuncionarioController");
const PromocaoController = require("./app/Controllers/PromocaoController");
const AgendamentoController = require("./app/Controllers/AgendamentoController");
const HorarioController = require("./app/Controllers/HorarioController");
const ClienteController = require("./app/Controllers/ClienteController");

const routes = express.Router();

//routes.get("/", (req, res) => res.send("eai emerson") )
//Add um novo usuario
routes.post("/usuario", UsuarioController.inserir);
//listagem de usuarios
routes.get("/usuario", UsuarioController.listagem);

routes.post("/usuario/login", UsuarioController.login);

routes.post("/agenda", AgendamentoController.inserir_dados);
routes.get("/agendamentos", AgendamentoController.listagem);
//Realiza um agendamento
//routes.post("/usuario/:usuario_id/servico/:servico_id/funcionario/:funcionario_id/hora/:horario_id/agendamento", AgendamentoController.inserir);

//Vai ser mandando um link no email do cliente onde ele vai poder config o login dele
//routes.post("/dashboard/admin/cliente/:cliente_nome", ClienteController.inserir);

routes.get("/servico" , ServicoController.listagem);

//routes.get("/cargo", CargoController.listagem);

//routes.use(AuthMiddleware);

//routes.post("/dashboard/adm/cliente/:cliente_nome/servico", ServicoController.inserir);

//Add um cargo
//routes.post("/dashboard/adm/cliente/:cliente_nome/cargo", CargoController.inserir);

//Add um para o funcionario com um cargo
routes.post("/dashboard/adm/cliente/:cliente_nome/cargo/:id/funcionario/", FuncionarioController.inserir);

//update de Funcionario 
routes.put("/dashboard/adm/cliente/:cliente_nome/funcionario/:id", FuncionarioController.update);
//mudar o cargo para o funcionario
//routes.post("/dashboard/adm/cliente/:cliente_nome/cargo/:id/funcionario/", FuncionarioController.inserir);

//lista de funcionarios
routes.get("/dashboard/adm/cliente/:cliente_nome/cargo/:id/funcionario/", FuncionarioController.listagem);
//deleta funcionario
routes.delete("/funcionario/:id", FuncionarioController.delete);

//Add um serviço para o funcionario
//routes.post("/dashboard/adm/cliente/:cliente_nome/funcionario/:servico_id/servico", FuncionarioController.inserir_servico_funcionario);
//lista de servico de cada funcionario
//routes.get("/dashboard/adm/cliente/:cliente_nome/funcionario/:funcionario_id/servico", FuncionarioController.lista_ser_func);

//routes.post("/servicos", ServicoController.inserir);

//Update um serviço
//routes.post("/servicos/:id", ServicoController.update);

//Delete um serviço
//routes.delete("/servicos/:id", ServicoController.delete);

//Add um serviço para a promoção ou contrario
//routes.post("/dashboard/adm/cliente/:cliente_nome/promocao/:servico_id/servico", PromocaoController.inserir);

//Add Horario
routes.post("/horario", HorarioController.inserir);
routes.get("/horario", HorarioController.listagem);

//lista os usuarios agendamentos 
//routes.get("/agendamento/usuario", AgendamentoController.listagem_usuarios);

//lista os horarios do agendamento
routes.get("/agendamento/horario", AgendamentoController.listagem);

module.exports = routes;