const bcrypt = require("bcryptjs")

class Bcrypt{
    encriptar(contrasena){
        let salt = bcrypt.genSaltSync()
        let contrasenaEncrypt = bcrypt.hashSync(contrasena,salt)
        return contrasenaEncrypt
    }
    validarContrasena(contrasena, contrasenaBd){
        const valicacion = bcrypt.compareSync(contrasena,contrasenaBd)
        if (!valicacion) {
            return false
        }
        return true
    }
}

module.exports = Bcrypt