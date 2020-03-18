const request = require("supertest");
const app = require("../../src/app");


describe("Usuario", () => { 

    
    it("Users acess login", async() => {
        
        const response = await request(app)
                        .post("/usuario/login")
                        .send({
                            nome : "Rodolfo", 
                            senha_pre_hash : "123456"
                        });
        
        expect(response.status).toBe(200);

    });

});