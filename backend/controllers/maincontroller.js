'use strict'
const db = require("../database/sqlite");
const Employee = db.Employee;
const sendemail=require('./notifications')


const addEmployee = (req,res)=>{
    const {name,age,role} = req.body;

    console.log(req.body);
    Employee.create({
        name,
        age,
        role
    }).then(employee=>{
       

        console.log('employee is now registered with this app');
        res.json(employee);
        sendemail(`<p>The employee with name ${req.body.name} is added</p>`);
        
        //res.send(JSON.stringify('get request succesful'));
        

        //res.end("All Employees: \n" + JSON.stringify(employee, null, 4));
    }).catch(err=>console.log(err));

}

const getallemployees =(req,res)=>{
    Employee.findAll().then((employee)=>{employee.forEach(employees=>console.log(employees.dataValues));res.json(employee)}).catch(err=>console.log(err));
}

const updatedetails = (req,res)=>{
    const id =req.params.id;
    Employee.findOne({where: {id: id}})
.then(record => {
  
  if (!record) {
    throw new Error('No record found')
  }

  console.log(`retrieved record ${JSON.stringify(record,null,2)}`) 

  let values = {
    ...req.body
  }
  
  record.update(values).then( updatedRecord => {
    console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
    res.json(record);
    // login into your DB and confirm update
  })

})
.catch((error) => {
  // do seomthing with the error
  throw new Error(error)
})
}



module.exports={
    addEmployee:addEmployee,
    getallemployees:getallemployees,
    updatedetails:updatedetails
}