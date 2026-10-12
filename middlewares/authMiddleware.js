const bcrypt = require('bcryptjs');

const loginMiddleware = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validar si llegan los campos (Simulando un 404 si no se encuentra o falta información)
        if (!email || !password) {
            return res.status(404).json({
                estado: 404,
                mensaje: "Error: Usuario no encontrado o faltan credenciales (Email y Password requeridos)."
            });
        }

        // Simulación de validación de base de datos o estado condicional (Ejemplo para un 304 o recurso no modificado)
        // Aquí puedes poner tu lógica de negocio
        const usuarioRegistrado = { email: "admin@sena.edu.co", passwordHash: "$2a$10$..." }; // Ejemplo

        // Encriptar la contraseña recibida
        const salt = await bcrypt.genSalt(10);
        const passwordEncriptada = await bcrypt.hash(password, salt);

        // Si todo es correcto, retornamos un estado 200 con ingreso exitoso
        return res.status(200).json({
            estado: 200,
            mensaje: "Ingreso exitoso",
            datosUsuario: {
                email: email,
                passwordSegura: passwordEncriptada // Mostramos la contraseña encriptada por seguridad
            }
        });

    } catch (error) {
        // Manejo de error general (Estado 500)
        return res.status(500).json({
            estado: 500,
            mensaje: "Error interno del servidor",
            detalle: error.message
        });
    }
};

module.exports = {
    loginMiddleware
};