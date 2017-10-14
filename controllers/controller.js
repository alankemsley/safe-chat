// Dependencies
var express = require('express');
var router = express.Router();
var orm = require('../config/orm.js');

// Import the model (messages.js) to use its database functions
var messageModel = require('../models/message.js');

// Create the routes and associated logic
// Creating a GET function
router.get('/', function(req, res) {
  console.log("Router get '/'");
    messageModel.getMessages(function(data) {
      var msgObject = {
        msg: data
      };
      console.log("msgObject: ", msgObject);
      res.render('index', msgObject);
    });
  });

// Export routes for server.js to use
module.exports = router;