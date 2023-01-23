const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT||3030

app.use(express.json())
app.use('/usuario',require('./routes/usuarios'))

app.use(cors()) // Habilitar otras aplicaciones para que hagan solicitudes

app.listen(port,()=>{
    console.log("Escuchando peticiones desde el puerto ",port)
})