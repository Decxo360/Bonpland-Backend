const ComunaService = require('../services/ComunaService');

const service = new ComunaService();

const ComunaController = {
  getAll: async (req, res) => {
    const region = await service.getComunas();
    res.json(region);
  },
  deleteById: async (req, res) => {
    const {idcomuna} = req.body;
    const isDeleted = await service.delete(idcomuna);
    res.json(isDeleted);
  },
  save: async (req, res) => {
    const {nombre,idregion} = req.body
    const isSaved = await service.save({nombre,idregion});
    res.json(isSaved);
  },
};

module.exports = ComunaController;
