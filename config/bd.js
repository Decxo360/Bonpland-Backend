const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    username:'',
    password:'',
    dialect: 'mysql'
});

module.exports = {
    sequelize
}