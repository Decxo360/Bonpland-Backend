const {Router} = require('express');
const RegionController = require('../controllers/RegionController');

const router = Router();

router.get('/obtener', RegionController.getAll);

router.post('/guardar', RegionController.save);

router.delete('/eliminar', RegionController.deleteById);

module.exports = router;
