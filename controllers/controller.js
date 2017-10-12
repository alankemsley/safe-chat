// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (app.js) to use its database functions.
var messageModel = require('../models/message.js');

// 1.Create the routes and associated logic
// 1.2 Creating a GET function

router.get('/', function(req, res) {
    messageModel.getMessages(function(data) {
      var msgObject = {
        msg: data
      };
      console.log(msgObject);
      res.render('index', msgObject);
    });
  });

// Export routes for server.js to use.
module.exports = router;