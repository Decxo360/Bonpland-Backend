const {Usuario} = require('../models/Usuario');

const getUsers = async () => {
  const user = await Usuario.findAll();
  console.log(user);
  return true;
};

module.exports = {
  getUsers,
};
