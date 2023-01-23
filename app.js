const express = require('express');
const inmueblesRoute = require('./src/routes/inmueblesRoute');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/inmuebles', inmueblesRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('RUNNING SERVER ON PORT:', port);
});
