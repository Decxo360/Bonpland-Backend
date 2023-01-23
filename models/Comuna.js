const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/bd')

const Comuna = sequelize.define('comuna', {
  idcomuna: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  nombre: {
    type: DataTypes.STRING
  },
  idregion:{
    type:DataTypes.STRING
  }
},{
    freezeTableName:true
});



module.exports = {Comuna}