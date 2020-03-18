const crypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

module.exports = {
    async listagem(req, res){
        
        const usuario = await Usuario.findAll();

        return res.json(usuario);
    },
    
    async inserir(req, res){

        const { nome, endereco, telefone, email , senha_pre_hash } = req.body;

        const usuario = await Usuario.findOne({ where: { nome } });
        
        if (usuario) return res.status(202).json({ message: "Usuario já existe" });

        try {
            
            const usuario = await Usuario.create({ 
                nome, 
                endereco,
                telefone,
                senha_pre_hash
            });

        } catch (error) {
            return res.status(500).json({ message: "Algum problema" });
        }


        return res.status(200).json({ message: "Usuario Criado com Sucesso" });
    }, 
    
    async login(req, res){

        const { nome, senha_pre_hash } = req.body;
        
        const usuario = await Usuario.findOne({ where: { nome }});

        if (!usuario) return res.status(200).json({ message: `Usuario não existe ${nome}` , login_ok : false });
        
        const response = await usuario.checkPassword(senha_pre_hash)

        if (!response) return res.status(200).json({ message: "Senha invalida", login_ok : false });

        return res.json({ message : `Seja bem vindo ${nome}`, login_ok : true }
        );

    }
}