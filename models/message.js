// Dependencies
var mysql=require('mysql');
var orm = require("../config/orm");
var ioConnect = require("../config/io");

// Render-query for 
var messageModel = {
  all: function(tableInput, cb) {
    orm.all("messages", cb);
  },
// Post new message
  create: function(userMessage, cb) {
    orm.create(userMessage, cb);
  },
};

module.exports = messageModel;