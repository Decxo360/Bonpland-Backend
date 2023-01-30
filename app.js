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
app.use('/favorito', require('./src/routes/FavoritoRoutes'));
app.use('/ubicacion', require('./src/routes/UbicacionRoutes'));
app.use('/auth', require('./src/routes/AuthRoute'));

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log('RUNNING SERVER ON PORT:', port);
});
