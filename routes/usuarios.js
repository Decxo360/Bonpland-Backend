const { Router } = require('express')
const { getUsers } = require('../controllers/usuario.controller')

const router = Router()

router.get('/obtener', getUsers);



module.exports = router