const express = require('express');
const essentials = require("./middlewares/essentialPackages");
const notificationRoutes = require('./router');
const globalErrorHandler = require('./middlewares/globalErrorHandler');

const app = express();

essentials.init(app);
app.use(notificationRoutes);

// Global Error Handler
globalErrorHandler.handleError();

module.exports = app;