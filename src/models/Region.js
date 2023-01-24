const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/bd');
const { Comuna } = require('./Comuna');

const Region = sequelize.define('region', {
  idregion: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  nombre: {
    type: DataTypes.STRING
  },
  idpais: {
    type: DataTypes.INTEGER
  }
},{
    freezeTableName:true
});

Region.Comuna = Region.hasMany(Comuna)

module.exports = {Region}
