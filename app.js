const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Habilitar otras aplicaciones para que hagan solicitudes
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/usuario', require('./routes/usuariosRoute'));
app.use('/inmuebles', require('./src/routes/inmueblesRoute'));

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log('RUNNING SERVER ON PORT:', port);
});
