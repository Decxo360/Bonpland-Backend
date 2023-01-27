const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/bd');


const Imagen = sequelize.define('imagen', {
  idimagen: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  img: {
    type: DataTypes.BLOB
  },
  idinmueble:{
    type:DataTypes.INTEGER
  }
},{
    freezeTableName:true,
    timestamps:false
});
module.exports = {Imagen}