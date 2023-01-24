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
        type:DataTypes.INTEGER
    },
    rangoMax:{
        type:DataTypes.INTEGER
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
        type:DataTypes.BLOB,
        allowNull:true
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


Inmueble.hasMany(Favorito,{
    foreignKey:'idinmueble',
    sourceKey:'idinmueble'
})

Favorito.belongsToMany(Inmueble,{
    foreignKey:'idinmueble',
    targetKey:'idinmueble'
})

module.exports={
    Inmueble
}