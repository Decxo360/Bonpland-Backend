const {Region} = require('../models/Region');

class RegionService {
  async getRegiones() {
    const region = await Region.findAll();
    return region
  }
  async save(newRegion) {
    const {nombre,idpais} = newRegion
    const region = await Region.create({
      nombre,
      idpais
    });
    return region
  }
  async delete(idregion) {
    const region = await Region.destroy({
      where: {
        idregion,
      },
    })
    return region
  }
}

module.exports = RegionService;
