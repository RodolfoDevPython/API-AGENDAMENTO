//ARQUIVO PARA VERIFICAR SE O TOKEN É VALIDO
const jwt = require("jsonwebtoken");

const { promisify } = require("util");

//todo o middleware tem esse tres parametros req, res, next
module.exports = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ message: "Token not provided" })

    //authHeader return um Bearer eo token -> que é um numero tipo 12334565 
    //pra isso vamos pegar só o token pra isso vamos pular a primeira e pegar somente o token
    const [, token ] = authHeader.split(" ");

    try {
        //Basicamente ele vai verificar se oque está sendo decodificado é igual ao que está nas Variavel de ambiente é do arquivo .env
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);
        req.userId = decoded.id

        return next();

    } catch(err) {
        return res.status(401).json({ message: "Token Invalid" });
    }

}