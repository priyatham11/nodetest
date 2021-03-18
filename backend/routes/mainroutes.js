

const express = require("express");
const maincontroller = require("../controllers/maincontroller");
const { Employee } = require("../database/sqlite");


const router = express.Router();


/**
 * @swagger
 * /:
 *  get:
 *    description: use to get all the user data
 *    responses:
 *      '200':
 *        description: Asuccesful response
 */

 router.route('/').get(maincontroller.getallemployees);

/**
 * @swagger
 * /:
 *  post:
 *    description: used to post the new data
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type:string
 *              age:
 *                type:string
 *              role:
 *                type:string 
 *    responses:
 *      '200':
 *        description: A succesful post
 *      '400':
 *        description: Invalid Input
 * 
 */
 
 router.route('/').post(maincontroller.addEmployee);
/**
 * @swagger
 * /edit/{id}:
 *  put:
 *    description: It is to update any info of the employee
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              age:
 *                type: string
 *              role:
 *                type: string
 *    responses:
 *      '201':
 *        description: A succesful update
 *      
 *    
 * 
 */

 router.route('/edit/:id').put(maincontroller.updatedetails);
 
 module.exports = router;         
              


  
  
  
    
      
      
        
        
        
        
                
   
   
                
            
                
                
            
                
                
            
                
                
                
                
   


     
       
         



