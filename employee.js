// Importing Sequelize and sequelize

const Sequelize = require('sequelize');
const sequelize = require('../miniproject2/config');

// Structure
// Sequelize.define defines the model used in the table.
// Columns for ID attribute(col)
const Employee = sequelize.define('Employee', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    FirstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    LastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Salary: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

// Export module to be used elsewhere.
module.exports = Employee;