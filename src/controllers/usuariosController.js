const { listarUsuarios } = require('../models/usuariosModel.js');

const listarController = async (req, res) => {
    try {
        const usuarios = await listarUsuarios();
        return res.status(200).json({
            Listado: usuarios
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error interno del servidor",
            detalle: error.message
        });
    }
};

module.exports = {
    listarController
};