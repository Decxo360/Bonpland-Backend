const InmueblesService = require('../services/inmueblesService');

const service = new InmueblesService();

const inmueblesController = {
  getAll: async (req, res) => {
    const inmuebles = await service.getAll();

    res.json(inmuebles);
  },
};

module.exports = inmueblesController;
