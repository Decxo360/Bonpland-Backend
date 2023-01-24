class InmueblesService {
  async getAll() {
    //Aqui recibo los datos de Base de datos

    return {message: 'lista de inmuebles'};
  }
  async deleteById(id) {
    return {message: 'inmueble eliminado', id};
  }
  async update(inmuebleReplace) {
    return {message: 'modifica por id', update: inmuebleReplace};
  }
  async save(inmuebleSave) {
    return {message: 'guarda un inmueble', save: inmuebleSave};
  }
}

module.exports = InmueblesService;
