const UsuarioService = require('../services/usuarioService');

const service = new UsuarioService();

const usuarioController = {
  getUsers: async (req, res) => {
    const user = await service.getUsers();

    res.json(user);
  },

  save: async (req, res) => {
    const {nombre, apellido_p, apellido_m, correo, contrasena} = req.body;

    const user = await service.save({
      nombre,
      apellido_p,
      apellido_m,
      correo,
      contrasena,
    });

    res.json(user);
  },

  update: async (req, res) => {
    const {idusuario, nombre, apellido_p, apellido_m, correo, contrasena} =
      req.body;

    const user = await service.update({
      idusuario,
      nombre,
      apellido_p,
      apellido_m,
      correo,
      contrasena,
    });

    res.json(user);
  },
};

module.exports = usuarioController;
