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

//Usuarios
routes.post("/usuario", UsuarioController.inserir);
routes.get("/usuario", UsuarioController.listagem);
routes.post("/usuario/login", UsuarioController.login);
routes.put("/usuario/:id", UsuarioController.update);
//--------//
routes.post("/agenda", AgendamentoController.inserir_dados);

//Realiza um agendamento
//routes.post("/usuario/:usuario_id/servico/:servico_id/funcionario/:funcionario_id/hora/:horario_id/agendamento", AgendamentoController.inserir);
//routes.get("/agendamentos/horarios", AgendamentoController.horariosDisponiveis);
//Vai ser mandando um link no email do cliente onde ele vai poder config o login dele
//routes.post("/dashboard/admin/cliente/:cliente_nome", ClienteController.inserir);

//routes.use(AuthMiddleware); esse vai ser o proxy da aplicação

//routes.post("/dashboard/adm/cliente/:cliente_nome/servico", ServicoController.inserir);

//Cargo
routes.post("/dashboard/adm/cliente/:cliente_nome/cargo", CargoController.inserir);
routes.get("/dashboard/admin/cliente/:cliente_nome/cargo", CargoController.listagem);
routes.put("/dashboard/admin/cliente/:cliente_nome/cargo/:id", CargoController.update);
routes.delete("/dashboard/admin/cliente/:cliente_nome/cargo/:id", CargoController.delete);
//-------//

//Funcionario
routes.post("/dashboard/adm/cliente/:cliente_nome/cargo/:id/funcionario/", FuncionarioController.inserir);
routes.put("/dashboard/adm/cliente/:cliente_nome/funcionario/:id", FuncionarioController.update);
routes.get("/dashboard/adm/cliente/:cliente_nome/funcionario/", FuncionarioController.listagem);
routes.delete("/dashboard/adm/cliente/:cliente_nome/funcionario/:id", FuncionarioController.delete);
//-------//

//Serviço
routes.post("/dashboard/adm/cliente/:cliente_nome/servico/cargo/:cargo_id", ServicoController.inserir);
routes.get("/servicos" , ServicoController.listagem);
routes.delete("/dashboard/adm/cliente/:cliente_nome/servico/:id", ServicoController.delete);
routes.put("/dashboard/adm/cliente/:cliente_nome/servico/:id/cargo/:cargo_id", ServicoController.update);
//--------//

//Promocao
//Add um serviço para a promoção ou contrario
routes.post("/dashboard/adm/cliente/:cliente_nome/promocao/:servico_id/servico", PromocaoController.inserir);
routes.get("/dashboard/adm/cliente/:cliente_nome/promocao", PromocaoController.listagem);
//routes.put("/dashboard/adm/cliente/:cliente_nome/promocao/:id/servico/:servico_id", PromocaoController.update);

//Add Horario
routes.post("/horario", HorarioController.inserir);
routes.get("/horario", HorarioController.listagem);
routes.delete("/horario/:id", HorarioController.delete);
routes.put("/horario/:id", HorarioController.update);

//lista os usuarios agendamentos 
//routes.get("/agendamento/usuario", AgendamentoController.listagem_usuarios);

//lista os horarios do agendamento
//routes.get("/agendamento/horario", AgendamentoController.listagem);

module.exports = routes;