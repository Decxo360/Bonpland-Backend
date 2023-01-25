const {Router} = require('express');
const ComunaController = require('../controllers/ComunaController');

const router = Router();

router.get('/obtener', ComunaController.getAll);

router.post('/guardar', ComunaController.save);

router.delete('/eliminar', ComunaController.deleteById);

module.exports = router;
