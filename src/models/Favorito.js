const { DataTypes, belongsToMany } = require('sequelize');
const {sequelize} = require('../config/bd');
const { Inmueble } = require('./Inmueble');
const { Usuario } = require('./Usuario');

const Favorito = sequelize.define('favorito', {},{
    freezeTableName:true,
    timestamps:false
});

Usuario.belongsToMany(Inmueble, { through: Favorito,foreignKey:'idusuario' });
Inmueble.belongsToMany(Usuario, { through: Favorito,foreignKey:'idinmueble' });



module.exports = {Favorito}