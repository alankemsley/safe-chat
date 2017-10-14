// Dependencies
var express = require("express");
var router = express.Router();
var orm = require("../config/orm.js");
var messageModel = require("../models/message.js");

// GET route
router.get("/", function(req, res) {
  messageModel.getMessages(function(data) {
    var msgObject = {
      messages: data
    };
    res.render("index", msgObject);
  });
});

// POST route
router.post("/", function(req, res) {
  messageModel.postMessage([
    "username", "message"
  ], [
    req.body.username, req.body.message
  ], function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use
module.exports = router;