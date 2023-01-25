const {Comuna} = require('../models/Comuna');

class ComunaService {
  async getComunas() {
    const comuna = await Comuna.findAll();
    return comuna
  }
  async save(newComuna) {
    const {nombre,idregion} = newComuna
    const comuna = await Comuna.create({
      nombre,
      idregion
    });
    return comuna
  }
  async delete(idcomuna) {
    const comuna = await Comuna.destroy({
      where: {
        idcomuna,
      },
    })
    return {
      "msg":"Ha sido eliminado correctamente",
      "RowsDeleted":comuna
  }
  }
}

module.exports = ComunaService;
