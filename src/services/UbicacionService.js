const {Ubicacion} = require('../models/Ubicacion');

class UbicacionService {
  async getUbicaciones(idubicacion) {
    const ubicacion = await Ubicacion.findAll({
        where:{
            idubicacion
        }
    });
    return ubicacion
  }
  async save(newUbicacion) {
    const {calle,numero,idregion,idpais,idcomuna} = newUbicacion
    const ubicacion = await Ubicacion.create({
      calle,
      numero,
      idregion,
      idpais,
      idcomuna
    });
    return ubicacion
  }
  async delete(idubicacion) {
    const ubicacion = await Ubicacion.destroy({
      where: {
        idubicacion,
      },
    })
    return {
      "msg":"Ha sido eliminado correctamente",
      "RowsDeleted":ubicacion
  }
  }
}

module.exports = UbicacionService;
