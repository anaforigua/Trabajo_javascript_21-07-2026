const { listarProductos } = require('../models/productosModel.js');

const listarProductosController = async (req, res) => {
    try {
        const productos = await listarProductos();
        return res.status(200).json({
            ListadoProductos: productos
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error al listar los productos",
            detalle: error.message
        });
    }
};

module.exports = {
    listarProductosController
};