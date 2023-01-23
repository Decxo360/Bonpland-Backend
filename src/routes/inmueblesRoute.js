const {Router} = require('express');

const inmueblesController = require('../controllers/inmueblesController');

const inmueblesRoute = Router();

inmueblesRoute.get('/', inmueblesController.getAll);

inmueblesRoute.post('/', inmueblesController.save);

inmueblesRoute.post('/update', inmueblesController.update);

inmueblesRoute.delete('/', inmueblesController.deleteById);

module.exports = inmueblesRoute;
