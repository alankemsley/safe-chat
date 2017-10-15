// Dependencies
var mysql=require('mysql');
var orm = require("../config/orm");
var ioConnect = require("../config/io");

var decoys = [];
// Render-query for 
var messageModel = {
  all: function(tableInput, cb) {
    orm.all("messages", cb);
  },
// Post new message
  create: function(userMessage, cb) {
    orm.create(userMessage, cb);
    //CALLING THE ORM.DECOY HERE WILL WORK, BUT WE WANT TO CALL IT WHEN THE USER SIGNS IN. 
    orm.decoy();
  },
  
};

module.exports = messageModel;