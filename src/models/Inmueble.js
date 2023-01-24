const {sequelize} = require('../config/bd')
const {DataTypes}=require('sequelize')
const { Usuario } = require('./Usuario')

const Inmueble = sequelize.define('inmueble',{
    idinmueble: {
        type : DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    ambientes:{
        type: DataTypes.INTEGER
    },
    rangoMin:{
        type:DataTypes.STRING
    },
    rangoMax:{
        type:DataTypes.STRING
    },
    mtCuadrado:{
        type:DataTypes.INTEGER,
    },
    corredor:{
        type:DataTypes.INTEGER,
    },
    ubicacion:{
        type:DataTypes.STRING
    },
    imagen:{
        type:DataTypes.BLOB
    },
    descripcion:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    nDormitorio:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    nBano:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    freezeTableName:true
})
module.exports={
    Inmueble
}