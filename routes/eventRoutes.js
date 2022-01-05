const express = require('express');
const eventRoutes = express.Router();
const eventControllers = require('../controllers/eventControllers');

eventRoutes.get('/', eventControllers.fetchAll)

module.exports = eventRoutes