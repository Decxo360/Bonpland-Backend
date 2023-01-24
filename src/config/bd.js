const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  database: 'bonpland',
  host: 'localhost',
  username: 'root',
  password: '',
  dialect: 'mysql',
});

module.exports = {
  sequelize,
};
