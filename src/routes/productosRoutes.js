const { Router } = require('express');
const { listarProductosController } = require('../controllers/productosControllers.js');

const router = Router();

// Ruta final complementaria para formar /api/listar/productos
router.get('/productos', listarProductosController);

module.exports = router;