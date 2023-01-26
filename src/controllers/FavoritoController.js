const FavoritoService = require('../services/FavoritoService');

const service = new FavoritoService();

const FavoritoController = {
  getAll: async (req, res) => {
    const {idusuario} = req.body
    const favorito = await service.getFavoritos(idusuario);
    res.json(favorito);
  },
  deleteById: async (req, res) => {
    const {idusuario,idinmueble} = req.body;
    const isDeleted = await service.delete({idusuario,idinmueble});
    res.json(isDeleted);
  },
  save: async (req, res) => {
    const {idusuario,idinmueble} = req.body
    const isSaved = await service.save({idusuario,idinmueble});
    res.json(isSaved);
  },
};

module.exports = FavoritoController;
