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

  async update(userReplace) {
    const {idusuario, nombre, apellido_p, apellido_m, correo, contrasena} =
      userReplace;

    const users = await Usuario.update(
      {
        nombre,
        apellido_p,
        apellido_m,
        correo,
        contrasena,
      },
      {
        where: {
          idusuario,
        },
      }
    );

    return users;
  }

  async delete(idusuario) {
    const users = await Usuario.destroy({
      where: {
        idusuario,
      },
    });

    return users;
  }
}

module.exports = UsuarioService;
