const { Router } = require('express');
const { listarController } = require('../controllers/usuariosController.js');

const router = Router();

router.get('/usuarios', listarController);

// ¡Muy importante que esté esta línea!
module.exports = router;