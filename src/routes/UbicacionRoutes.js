const {Router} = require('express');
const UbicacionController = require('../controllers/UbicacionController');

const router = Router();

router.get('/obtener', UbicacionController.getAll);

router.post('/guardar', UbicacionController.save);

router.delete('/eliminar', UbicacionController.deleteById);

module.exports = router;
