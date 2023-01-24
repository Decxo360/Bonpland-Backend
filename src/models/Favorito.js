const { DataTypes, HasMany } = require('sequelize');
const {sequelize} = require('../config/bd')

const Favorito = sequelize.define('favorito', {},{
    freezeTableName:true
});



module.exports = {Favorito}