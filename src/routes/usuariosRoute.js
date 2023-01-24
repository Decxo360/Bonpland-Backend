const {Router} = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = Router();

router.get('/obtener', usuarioController.getUsers);

router.post('/guardar', usuarioController.save);

router.post('/modificar', usuarioController.update);

module.exports = router;
