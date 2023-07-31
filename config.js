const Sequelize = require('sequelize');
// Connecting to mysql database called booboo
const sequelize = new Sequelize('booboo', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1'
  });
  
  module.exports = sequelize;