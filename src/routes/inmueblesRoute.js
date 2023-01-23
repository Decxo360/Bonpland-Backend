const {Router} = require('express');

const inmueblesController = require('../controllers/inmueblesController');

const inmueblesRoute = Router();

// const controller = new InmueblesController();

inmueblesRoute.get('/', inmueblesController.getAll);

module.exports = inmueblesRoute;
