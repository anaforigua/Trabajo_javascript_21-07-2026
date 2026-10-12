const { Router } = require('express');
const usuariosRoutes = require('./usuariosRoutes.js');
const productosRoutes = require('./productosRoutes.js');

const router = Router();

router.use('/listar', usuariosRoutes);
router.use('/listar', productosRoutes);

module.exports = router;