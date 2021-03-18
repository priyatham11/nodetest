const express =require( 'express');


const routes=require('./backend/routes/mainroutes')
const swaggerJsdoc =require( "swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app=express();
const PORT=process.env.PORT||4444;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: " API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "priyatham",
          
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:4444/",
        },
      ],
    },
    apis: ["./backend/routes/mainroutes.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs,{ explorer: true })
  );
app.listen(PORT,(err=>{
    if(err)console.log(err);
    console.log(`app is up and running at ${PORT}`);
}))

module.exports=app;