const InmueblesService = require('../services/inmueblesService');

const service = new InmueblesService();

const inmueblesController = {
  getAll: async (req, res) => {
    const inmuebles = await service.getAll();

    res.json(inmuebles);
  },
  deleteById: async (req, res) => {
    const {id} = req.body;

    const isDeleted = await service.deleteById(id);

    res.json(isDeleted);
  },
  update: async (req, res) => {
    const {id, type} = req.body;

    const isUpdated = await service.update({id, type});

    res.json(isUpdated);
  },
  save: async (req, res) => {
    const {id, type} = req.body;

    const isSaved = await service.save({id, type});

    res.json(isSaved);
  },
};

module.exports = inmueblesController;
