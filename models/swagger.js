const swaggerDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

    const swaggerOptions = {
        swaggerDefinition :{
            openapi: "3.0.0",
            info:{
                title: "A REST server ",
                description: "A REST server that sends messages to a telegram channel/group.",
                contact: {
                    name: "Mirzohid Saidakramov"
                },
                servers:[{
                    url:"http://localhost:5000/"
                }],
            }
        },
        apis:["../routes/*.js"]
    }
    const swaggerDocs = swaggerDoc(swaggerOptions);
 module.exports = swaggerDocs;