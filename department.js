// importing Sequelize and sequelize
const Sequelize = require('sequelize');
const sequelize = require('../miniproject2/config');
// Defining the table structure
const Department = sequelize.define('Department', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    DepartmentName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Exporting module
module.exports = Department;