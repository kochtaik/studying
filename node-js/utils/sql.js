const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Fly-45677', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
