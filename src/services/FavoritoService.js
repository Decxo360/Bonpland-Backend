const {Favorito} = require('../models/Favorito');

class FavoritoService {
  async getFavoritos(idusuario) {
    const favorito = await Favorito.findAll({
        where:{
            idusuario
        }
    });
    return favorito
  }
  async save(newFavorito) {
    const {idusuario,idinmueble} = newFavorito
    const favorito = await Favorito.create({
      idusuario,idinmueble
    });
    return favorito
  }
  async delete({idusuario,idinmueble}) {
    const favorito = await Favorito.destroy({
      where: {
        idusuario,
        idinmueble
      },
    })
    return {
        "msg":"Ha sido eliminado correctamente",
        "RowsDeleted":Favorito
    }
  }
}

module.exports = FavoritoService;
