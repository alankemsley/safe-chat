//specifies what to CRUD with the ORM queries...

var orm = require("../config/orm");
var ioConnect = require("../config/io");


// this code specified how to make the render query
var messageModel = {
  getMessages: function(cb) {
    orm.all("messages", cb);
  },
// this code specified how to post the new message
  postMessage: function(userMessage, cb) {
    orm.create(userMessage, cb);
  },
};

module.exports = messageModel;