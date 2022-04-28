const serviceRouter = require('../routes/servise');
const express = require('express');
const swaggerDocs = require('../models/swagger');
const swaggerUi = require('swagger-ui-express');
module.exports = function(app) {
    app.use(express.json());
    app.use('/api-docs/',swaggerUi.serve,swaggerUi.setup(swaggerDocs));
    app.use('/api/service/',serviceRouter);
}