// Dependencies
var mysql=require('mysql');
var orm = require("../config/orm");
var ioConnect = require("../config/io");

// Render-query for 
var messageModel = {
  // Get old messages
  all: function(userMessage, cb) {
    orm.all(userMessage, function(res) {
      cb(res);
    });
  },
  // Post new message
  create: function(userMessage, cb) {
    orm.create(userMessage, cb);
  },
};

module.exports = messageModel;