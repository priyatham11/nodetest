const Sequelize = require('sequelize');
const path = require('path');
const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: path.join(__dirname,"database.sqlite")
    });

  const employees = sequelize.define("employees", {
      name: {
        type: Sequelize.STRING,
       
      },
      age: {
        type: Sequelize.NUMBER,
        


      },
      role: {
        type: Sequelize.STRING,


      }})
    sequelize.sync().then(()=>{
        console.log('Employee table has been successfully created, if one doesnt exist')
    }).catch(err=>console.log(err));


    module.exports={

        Employee:employees
    }