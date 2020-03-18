const request = require("supertest");

const bcryptjs = require("bcryptjs");

const Usuario = require("../../src/app/models/Usuario");

const teste = require("../../src/database");

describe("Usuario", () => { 

    
    it("Criptografando a senha do usuario", async() => {
        Usuario.init(teste);

        const user = await Usuario.create({ 
            nome: "Diego",
            endereco: "teste de endereço",
            telefone: "41517961",
            email: "rodolfo@teste.com", 
            senha_pre_hash: "123456" 
        });
        
        const compare = await bcryptjs.compare("123456", user.senha);

        expect(compare).toBe(true);

    });

})