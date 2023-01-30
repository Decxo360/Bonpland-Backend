const UsuarioService = require('../services/usuarioService')
const service = new UsuarioService();

const AuthController = {
    LogIn: async (req,res)=>{
        const {correo,contrasena} = req.body
        const usuario = await service.login(correo,contrasena)
        res.json(usuario)
    }

}

module.exports = AuthController