const express = require('express');
const sequelize = require('../miniproject2/config');
const app = express();

sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

app.listen(3000, ()=>{console.log('listening to port 3000')});

const Employee = require('../miniproject2/employee');
const Department = require('../miniproject2/department');
Department.hasMany(Employee,
         {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});

         sequelize.sync()
         .then(() => {
           console.log('Database synchronized');
         })
         .catch((err) => {
           console.log('Error synchronizing database:', err);
         });