const {sequelize} = require('../config/bd');
const {DataTypes} = require('sequelize');
const {Usuario} = require('./Usuario');
const { Imagen } = require('./Imagen');

const Inmueble = sequelize.define(
  'inmueble',
  {
    idinmueble: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ambientes: {
      type: DataTypes.INTEGER,
    },
    rangoMin: {
      type: DataTypes.INTEGER,
    },
    rangoMax: {
      type: DataTypes.INTEGER,
    },
    mtCuadrado: {
      type: DataTypes.INTEGER,
    },
    corredor: {
      type: DataTypes.INTEGER,
    },
    ubicacion: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nDormitorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nBano: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoPropiedad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idusuario: {
      type: DataTypes.INTEGER,
    },
    idubicacion: {
      type: DataTypes.INTEGER,
    },
    imagen:{
      type:DataTypes.INTEGER
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Inmueble.hasMany(Imagen,{foreignKey:'idinmueble',sourceKey:'idinmueble'})
Imagen.belongsTo(Inmueble,{foreignKey:'idimagen',targetKey:'imagen'})

module.exports = {
  Inmueble,
};
