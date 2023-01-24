const {Pais} = require('../models/Pais');

class PaisService {
  async getPaises() {
    const pais = await Pais.findAll();
    return pais
  }
  async save(newPais) {
    const {nombre} = newPais
    const pais = await Pais.create({
      nombre
    });
    return pais
  }
  async delete(idpais) {
    const pais = await Pais.destroy({
      where: {
        idpais,
      },
    })
    return {
        "msg":"Ha sido eliminado correctamente",
        "RowsDeleted":pais
    }
  }
}

module.exports = PaisService;
