// Dependencies
var express = require("express");
var router = express.Router();
// var orm = require("../config/orm.js");
var messageModel = require("../models/message.js");

// GET route
router.get("/", function(req, res) {
  messageModel.all(function(data) {
    var hbsObject = {
      messages: data
    };
    res.render("index", hbsObject);
  });
});

// POST route
router.post("/", function(req, res) {
  messageModel.create([
    "username", "message"
  ], [
    req.body.username, req.body.message
  ], function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use
module.exports = router;