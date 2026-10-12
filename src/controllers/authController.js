const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const CLAVE_SECRETA = 'mi_clave_secreta_sena';
const usuariosDB = [];

// 1. REGISTRO DE USUARIO (Genera token de inmediato)
const registrarController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({
                estado: 404,
                mensaje: "Error: Email y contraseña son requeridos."
            });
        }

        const usuarioExistente = usuariosDB.find(u => u.email === email);
        if (usuarioExistente) {
            return res.status(400).json({
                estado: 400,
                mensaje: "El usuario ya se encuentra registrado."
            });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordEncriptada = await bcrypt.hash(password, salt);

        usuariosDB.push({ email, password: passwordEncriptada });

        // Generar el token automáticamente al registrarse
        const token = jwt.sign(
            { email: email },
            CLAVE_SECRETA,
            { expiresIn: '1m' } // 1 minuto para pruebas de expiración
        );

        return res.status(200).json({
            estado: 200,
            mensaje: "Registro exitoso e ingreso autorizado",
            token: token,
            usuario: { email }
        });

    } catch (error) {
        return res.status(500).json({
            estado: 500,
            mensaje: "Error interno en el servidor",
            detalle: error.message
        });
    }
};

// 2. LOGIN
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({
                estado: 404,
                mensaje: "Credenciales incompletas."
            });
        }

        const usuarioEncontrado = usuariosDB.find(u => u.email === email);
        if (!usuarioEncontrado) {
            return res.status(404).json({
                estado: 404,
                mensaje: "Usuario no encontrado."
            });
        }

        const esValida = await bcrypt.compare(password, usuarioEncontrado.password);
        if (!esValida) {
            return res.status(404).json({
                estado: 404,
                mensaje: "Contraseña incorrecta."
            });
        }

        const token = jwt.sign(
            { email: usuarioEncontrado.email },
            CLAVE_SECRETA,
            { expiresIn: '1m' }
        );

        return res.status(200).json({
            estado: 200,
            mensaje: "Ingreso exitoso",
            token: token
        });

    } catch (error) {
        return res.status(500).json({
            estado: 500,
            mensaje: "Error interno en el servidor",
            detalle: error.message
        });
    }
};

// 3. VERIFICACIÓN DEL TOKEN
const verificarTokenController = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'] || req.headers['token'];

        if (!authHeader) {
            return res.status(404).json({
                estado: 404,
                mensaje: "Error: No se proporcionó ningún token de acceso."
            });
        }

        const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
        const decoded = jwt.verify(token, CLAVE_SECRETA);

        return res.status(200).json({
            estado: 200,
            mensaje: "Token válido y acceso concedido. ¡Coincide correctamente!",
            usuario: decoded
        });

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                estado: 401,
                mensaje: "El token ha expirado/vencido. Por favor inicie sesión de nuevo."
            });
        }

        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({
                estado: 403,
                mensaje: "Token incorrecto o inválido. Firma no coincidente."
            });
        }

        return res.status(500).json({
            estado: 500,
            mensaje: "Error interno al verificar el token",
            detalle: error.message
        });
    }
};

module.exports = {
    registrarController,
    loginController,
    verificarTokenController
};