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

Comuna.hasOne(Ubicacion,{foreignKey:'idcomuna',sourceKey:'idcomuna'})
Ubicacion.belongsTo(Comuna,{foreignKey:'idcomuna',targetKey:'idcomuna'})


module.exports = {Comuna}