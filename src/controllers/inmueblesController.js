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
    const {
      idinmueble,
      ambientes,
      rangoMin,
      rangoMax,
      mtCuadrado,
      corredor,
      ubicacion,
      imagen,
      descripcion,
      nDormitorio,
      nBano,
      tipoPropiedad,
      estado,
    } = req.body;

    const isUpdated = await service.update({
      idinmueble,
      ambientes,
      rangoMin,
      rangoMax,
      mtCuadrado,
      corredor,
      ubicacion,
      imagen,
      descripcion,
      nDormitorio,
      nBano,
      tipoPropiedad,
      estado,
    });

    res.json(isUpdated);
  },
  save: async (req, res) => {
    const {
      ambientes,
      rangoMin,
      rangoMax,
      mtCuadrado,
      corredor,
      ubicacion,
      imagen,
      descripcion,
      nDormitorio,
      nBano,
      tipoPropiedad,
      estado,
    } = req.body;

    const isSaved = await service.save({
      ambientes,
      rangoMin,
      rangoMax,
      mtCuadrado,
      corredor,
      ubicacion,
      imagen,
      descripcion,
      nDormitorio,
      nBano,
      tipoPropiedad,
      estado,
    });

    res.json(isSaved);
  },
};

module.exports = inmueblesController;
