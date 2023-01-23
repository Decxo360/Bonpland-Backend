const {Router} = require('express');
const {getUsers} = require('../controllers/usuarioController');

const router = Router();

router.get('/obtener', getUsers);

module.exports = router;
