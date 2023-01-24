const {Usuario} = require('../models/Usuario');

class UsuarioService {
  async getUsers() {
    const users = await Usuario.findAll();

    return users;
  }

  async save(userNew) {
    const {nombre, apellido_p, apellido_m, correo, contrasena} = userNew;

    const users = await Usuario.create({
      nombre,
      apellido_p,
      apellido_m,
      correo,
      contrasena,
    });

    return users;
  }
}

module.exports = UsuarioService;
