// Pull in required dependencies
var express = require('express');
var router = express.Router();
var orm = require('../config/orm.js');

// Import the model (app.js) to use its database functions.
var messageModel = require('../models/app.js');

// 1.Create the routes and associated logic
// 1.2 Creating a GET function

router.get('/', function(req, res) {
    messageModel.getMessages(function(data) {
      var msgObject = {
        msg: data
      };
      console.log(msgObject);
      res.render('index', msgObject);
    })
  });

// 1.3 creating a post function
  router.post('/', function(req, res) {
    appModelsFolder.insertOne([
      ''
    ], [
      req.body.msg
    ], function(data) {
      res.redirect('/');
    });
  });

// Export routes for server.js to use.
module.exports = router;