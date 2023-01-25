const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Habilitar otras aplicaciones para que hagan solicitudes
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/usuario', require('./src/routes/usuariosRoute'));
app.use('/inmuebles', require('./src/routes/inmueblesRoute'));
app.use('/pais', require('./src/routes/PaisRoute'));
app.use('/region', require('./src/routes/RegionRoutes'));
app.use('/comuna', require('./src/routes/ComunaRoutes'));

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log('RUNNING SERVER ON PORT:', port);
});
