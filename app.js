require("dotenv").config();
require("./config/mongoDB").connect();
const express = require('express');
const cors = require("cors");
const logger = require('morgan');
const apiRoutes = require("./Routes/api");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
    res.status(404).json({
        status_code: 404,
        status: "error",
        message: "Not Found!"
    });

    next();
});

module.exports = app;