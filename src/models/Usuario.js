const {sequelize} = require('../config/bd')
const {DataTypes}=require('sequelize')
const { Inmueble } = require('./Inmueble')
const { Favorito } = require('./Favorito')

const Usuario = sequelize.define('usuario',{
    idusuario: {
        type : DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
    },
    nombre:{
        type: DataTypes.STRING,
    },
    apellido_p:{
        type:DataTypes.STRING
    },
    apellido_m:{
        type:DataTypes.STRING
    },
    correo:{
        type:DataTypes.STRING,
        unique:true
    },
    contrasena:{
        type:DataTypes.STRING
    }
},{
    freezeTableName:true
})

Usuario.hasMany(Inmueble,{
    foreignKey:"idusuario",
    sourceKey:'idusuario'
})

Inmueble.belongsTo(Usuario,{
    foreignKey:"corredor",
    targetKey:'corredor'
})

Usuario.hasMany(Favorito,{
    foreignKey:'idusuario',
    sourceKey:'idusuario'
})

Favorito.belongsToMany(Usuario,{
    foreignKey:'idusuario',
    targetKey:'idusuario'
})



module.exports={
    Usuario
}