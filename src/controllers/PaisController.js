const PaisService = require('../services/PaisService');

const service = new PaisService();

const PaisController = {
  getAll: async (req, res) => {
    const paises = await service.getPaises();
    res.json(paises);
  },
  deleteById: async (req, res) => {
    const {idpais} = req.body;
    const isDeleted = await service.delete(idpais);
    res.json(isDeleted);
  },
  save: async (req, res) => {
    const nombre = req.body
    const isSaved = await service.save(nombre);
    res.json(isSaved);
  },
};

module.exports = PaisController;
