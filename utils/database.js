const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-todo', 'root', '1111', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;