const { Router } = require('express');
const { listarProductos,listarUnProducto,crearProductos,actualizarProductos,eliminarProductos } = require('../controllers/productosControllers.js');

const router = Router();

// Ruta final complementaria para formar /api/productos/listado
router.get('/listado', listarProductos);
router.get('/listarUno', listarUnProducto);
router.get('/crear', crearProductos);
router.get('/actualizar',actualizarProductos);
router.get('/eliminar',eliminarProductos);

module.exports = router;