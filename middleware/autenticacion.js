const jwt = require("jsonwebtoken");

const autenticacionToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    
    if (!authHeader) {
        return res.status(401).json({ Error: "Acceso denegado, token no proporcionado.!Harry Potter ha muerto!" });
    }

    // El formato esperado es "Bearer <token>"
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ Error: "Formato de token inválido." });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ Error: "Token inválido. !Yo mate a Sirius Black¡" });
        }
        
        req.aprendiz = user;
        next();
    });
};

module.exports = autenticacionToken;