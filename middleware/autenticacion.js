const token = require("jsonwebtoken");

const autenticacionToken =(req ,res , next) => {
    //formato de token 
const token = req.headers["autenticacion"].split(" ")[1];
if (!token) {return res.status(401).json({ Error: "Acceso denegado, token no proporcionado. Buen intento hacker" }) }
//verificar token
token.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
        return res.status(403).json({ Error: "Token inválido. Intente nuevamente regitre bién los datos" });
    }
    req.aprendiz = user;
   
});
 next();
}

module.exports = autenticacionToken;