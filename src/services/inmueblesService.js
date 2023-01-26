const {Inmueble} = require('../models/Inmueble');

class InmueblesService {
  async getAll() {
    const inmuebles = await Inmueble.findAll();
    console.log(inmuebles);
    return inmuebles;
  }

  async save(inmuebleSave) {
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
    } = inmuebleSave;

    return await Inmueble.create({
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
  }

  async update(inmuebleReplace) {
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
    } = inmuebleReplace;

    return await Inmueble.update(
      {
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
      },
      {
        where: {
          idinmueble,
        },
      }
    );
  }

  async deleteById(idinmueble) {
    const result = await Inmueble.destroy({
      where: {
        idinmueble,
      },
    });

    return result;
  }
}

module.exports = InmueblesService;
