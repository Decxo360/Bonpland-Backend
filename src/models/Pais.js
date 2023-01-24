const { DataTypes, HasMany } = require('sequelize');
const {sequelize} = require('../config/bd')
const {Region}=require('./Region');
const { Ubicacion } = require('./Ubicacion');


const Pais = sequelize.define('pais', {
  idpais: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  nombre: {
    type: DataTypes.STRING
  }
},{
    timestamps: false,
    freezeTableName:true
});

Pais.hasMany(Region,{foreignKey:'idpais',sourceKey:'idpais'})
Region.belongsTo(Pais,{foreignKey:'idpais',targetKey:'idpais'})

Pais.hasMany(Ubicacion,{foreignKey:'idpais',sourceKey:'idpais'})
Ubicacion.belongsTo(Pais,{foreignKey:'idpais',targetKey:'idpais'})


module.exports = {Pais}