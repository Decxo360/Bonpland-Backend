const jwt = require('jsonwebtoken')

const generarToken = (correo, idusuario) => {
    secret = 'asdasasdasd'
    return new Promise((resolve, reject) => {
        jwt.sign({ id, correo }, secret, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                console.log(err)
                reject('no se pudo generar el token')
            }
            resolve(token)
        })
    })
}


module.exports={generarJWT}
