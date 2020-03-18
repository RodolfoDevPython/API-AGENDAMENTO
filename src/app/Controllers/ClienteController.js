const Usuario = require("../models/Usuario");

module.exports = {

    async inserir(req, res){
        
        const { cliente_nome } = req.params;
        const { nome , senha_pre_hash, endereco = "teste", telefone = "teste" } = req.body;        

        const usuario = await Usuario.findOne({ where: { nome }});

        if (usuario) return res.status(401).json({ "message": "Not found Usuario" });

        try {
            const  user  = await Usuario.create({
                senha_pre_hash: senha_pre_hash,    
                nome,
                endereco,
                telefone,
                token: usuario.generateToken()
            });
    
        } catch(error) {
            return res.status(500).json({ "error": error });
        }

        return res.status(201).send();

    },

    
}