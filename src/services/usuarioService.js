const {Usuario} = require('../models/Usuario');

class UsuarioService {
  async getUsers() {
    const users = await Usuario.findAll();

    return users;
  }

  async save() {
    const users = await Usuario.create({
      nombre: 'prueba',
      apellido_p: 'prueba',
      apellido_m: 'prueba',
      correo: 'prueba',
      contrasena: 'prueba',
    });

    return users;
  }
}

module.exports = UsuarioService;
