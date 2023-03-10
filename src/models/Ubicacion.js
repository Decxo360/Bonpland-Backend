const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/bd');
const { Inmueble } = require('./Inmueble');

const Ubicacion = sequelize.define('ubicacion', {
  idubicacion: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  calle: {
    type: DataTypes.STRING
  },
  numero: {
    type: DataTypes.INTEGER
  }
},{
    freezeTableName:true,
    timestamps:false
});

Ubicacion.hasOne(Inmueble,{foreignKey:'idubicacion',sourceKey:'idubicacion'})
Inmueble.belongsTo(Inmueble,{foreignKey:'ubicacion',targetKey:'ubicacion'})


module.exports = {Ubicacion}
