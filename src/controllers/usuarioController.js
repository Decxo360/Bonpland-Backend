const { Usuario } = require('../models/Usuario');
const UsuarioService = require('../services/usuarioService')
const service = new UsuarioService();

const usuarioController = {
  getUsers: async (req, res) => {
    const user = await service.getUsers();

    res.json(user);
  },

  save: async (req, res) => {
    const {nombre, apellido_p, apellido_m, correo, contrasena,telefono} = req.body;

    const user = await service.save({
      nombre,
      apellido_p,
      apellido_m,
      correo,
      contrasena,
      telefono
    });

    res.json(user);
  },

  update: async (req, res) => {
    const {idusuario, nombre, apellido_p, apellido_m, correo, contrasena,img,telefono} =
      req.body;

    const user = await service.update({
      idusuario,
      nombre,
      apellido_p,
      apellido_m,
      correo,
      contrasena,
      telefono,
      img
    });

    res.json(user);
  },

  delete: async (req, res) => {
    const {idusuario} = req.body;

    const user = await service.delete(idusuario);

    res.json(user);
  },
  updateType: async(req,res)=>{
    const {idusuario,tipo} = req.body;
    const user = await service.updateTipo({idusuario,tipo});
    res.json(user)
  }
};

module.exports = usuarioController;
