const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/bd');
const { Comuna } = require('./Comuna');
const { Ubicacion } = require('./Ubicacion');

const Region = sequelize.define('region', {
  idregion: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  nombre: {
    type: DataTypes.STRING
  },
},{
    freezeTableName:true,
    timestamps:false
});

Region.hasOne(Comuna,{foreignKey:'idregion',sourceKey:'idregion'})
Comuna.belongsTo(Comuna,{foreignKey:'idregion',targetKey:'idregion'})

Region.hasOne(Ubicacion,{foreignKey:'idregion',sourceKey:'idregion'})
Ubicacion.belongsTo(Region,{foreignKey:'idregion',targetKey:'idregion'})

module.exports = {Region}
