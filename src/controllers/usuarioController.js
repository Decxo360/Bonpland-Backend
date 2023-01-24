const UsuarioService = require('../services/usuarioService');

const service = new UsuarioService();

const usuarioController = {
  getUsers: async (req, res) => {
    const user = await service.getUsers();

    res.json(user);
  },

  save: async (req, res) => {
    const user = await service.save();

    res.json(user);
  },
};

module.exports = usuarioController;
