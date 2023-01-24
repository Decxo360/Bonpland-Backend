const {Router} = require('express');
const PaisController = require('../controllers/PaisController');

const router = Router();

router.get('/obtener', PaisController.getAll);

router.post('/guardar', PaisController.save);

router.delete('/eliminar', PaisController.deleteById);

module.exports = router;
