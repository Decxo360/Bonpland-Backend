const {Router} = require('express');
const AuthController = require('../controllers/AuthController');

const router = Router();

router.post('/logIn', AuthController.LogIn);

module.exports = router;
