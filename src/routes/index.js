const { Router } = require('express');
const usuariosRoutes = require('./usuariosRoutes.js');
const productosRoutes = require('./productosRoutes.js');
const authRoutes = require('./authRoutes.js'); // <--- Importar rutas de auth

const router = Router();

router.use('/listar', usuariosRoutes);
router.use('/listar', productosRoutes);
router.use('/auth', authRoutes); // Quedará accesible en /api/auth/registro y /api/auth/login

module.exports = router;