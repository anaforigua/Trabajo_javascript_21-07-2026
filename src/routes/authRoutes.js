const { Router } = require('express');
const { 
    registrarController, 
    loginController, 
    verificarTokenController 
} = require('../controllers/authController.js');

const router = Router();

router.post('/registro', registrarController);
router.post('/login', loginController);
router.post('/verificar', verificarTokenController); // Nueva ruta para probar token

module.exports = router;