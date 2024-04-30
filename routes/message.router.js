const express = require('express');
const clientController = require("../controllers/message.controller");
const clientRouter = express.Router();
clientRouter.post('/submitNewMessage', clientController.submitNewMessage);
module.exports = clientRouter;