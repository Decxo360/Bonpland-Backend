const {Usuario} = require('../models/Usuario');

class UsuarioService {
  async getUsers() {
    const users = await Usuario.findAll();

    return users;
  }

  async save(userNew) {
    
    const {nombre, apellido_p, apellido_m, correo, contrasena,telefono} = userNew;
    const users = await Usuario.create({
      nombre,
      apellido_p,
      apellido_m,
      correo,
      contrasena,
      telefono
    });

    return users;
  }

  async update(userReplace) {
    const {idusuario, nombre, apellido_p, apellido_m, correo, contrasena,telefono,img} =
      userReplace;

    const users = await Usuario.update(
      {
        nombre,
        apellido_p,
        apellido_m,
        correo,
        contrasena,
        telefono,
        img
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

  async updateTipo(user){
    const {idusuario,tipo} = user
    const users = await Usuario.update({
      tipo
    },
    {
      where:{
        idusuario
      }
    })
    return users
  }
  async getUser(idusuario){
    const user = await Usuario.findOne(
    {
      where:{
        idusuario
      }
    })
    return user
  }
  async login(correo,contrasena){
    const user = await Usuario.findOne({
      where:{
        correo,
        contrasena
      }
    })
    return user
  }
}

module.exports = UsuarioService;
