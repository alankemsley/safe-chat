// Dependencies
var mysql=require('mysql');
var orm = require("../config/orm");
var ioConnect = require("../config/io");

// Render query
var messageModel = {
  getMessages: function(cb) {
    orm.all("messages", cb);
  },
// Post new message
  postMessage: function(userMessage, cb) {
    orm.create(userMessage, cb);
  },
};

function renderMessages(){
  var query = "SELECT * FROM dummychat";
    connection.query(query, function(err, res){
      console.log(res);
    });
}
module.exports = messageModel;


