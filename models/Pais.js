const { DataTypes, HasMany } = require('sequelize');
const {sequelize} = require('../config/bd')
const {Region}=require('./Region')


const Pais = sequelize.define('pais', {
  idpais: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  nombre: {
    type: DataTypes.STRING
  }
});

Pais.Region = Pais.hasMany(Region)

module.exports = {Pais}