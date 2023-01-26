const UbicacionService = require('../services/UbicacionService');

const service = new UbicacionService();

const UbicacionController = {
  getAll: async (req, res) => {
    const {idubicacion} = req.body
    const ubicacion= await service.getUbicaciones(idubicacion);
    res.json(ubicacion);
  },
  deleteById: async (req, res) => {
    const {idubicacion} = req.body;
    const isDeleted = await service.delete(idubicacion);
    res.json(isDeleted);
  },
  save: async (req, res) => {
    const {calle,numero,idregion,idpais,idcomuna} = req.body
    const isSaved = await service.save({calle,numero,idregion,idpais,idcomuna});
    res.json(isSaved);
  },
};

module.exports = UbicacionController;
