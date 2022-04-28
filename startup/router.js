const serviceRouter = require('../routes/servise');
const express = require('express');
const swaggerDocs = require('../models/swagger');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
module.exports = function(app) {
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use('/api-docs/',swaggerUi.serve,swaggerUi.setup(swaggerDocs));
    app.use('/api/service/',serviceRouter);
}