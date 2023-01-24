const { DataTypes, HasMany } = require('sequelize');
const {sequelize} = require('../config/bd')

const Favorito = sequelize.define('favorito', {
    idFavorito:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
},{
    freezeTableName:true
});



module.exports = {Favorito}