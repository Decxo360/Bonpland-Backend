const {Router} = require('express');
const FavoritoController = require('../controllers/FavoritoController');

const router = Router();

router.get('/obtener', FavoritoController.getAll);

router.post('/guardar', FavoritoController.save);

router.delete('/eliminar', FavoritoController.deleteById);

module.exports = router;
