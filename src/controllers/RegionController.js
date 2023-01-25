const RegionService = require('../services/RegionService');

const service = new RegionService();

const RegionController = {
  getAll: async (req, res) => {
    const region = await service.getRegiones();
    res.json(region);
  },
  deleteById: async (req, res) => {
    const {idregion} = req.body;
    const isDeleted = await service.delete(idregion);
    res.json(isDeleted);
  },
  save: async (req, res) => {
    const {nombre,idpais} = req.body
    const isSaved = await service.save({nombre,idpais});
    res.json(isSaved);
  },
};

module.exports = RegionController;
