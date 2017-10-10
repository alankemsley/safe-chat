//specifies what to CRUD with the ORM queries...

var orm = require("../config/orm");
var ioConnect = require("../config/io");


// this code specified how to make the render query
var messageModel = {
  getMessages: function(cb) {
    ioConnect.on("connection", function(socket) {
      socket.emit("youreventname", {message: "Some data to emit"});
      orm.all("messages", cb);
    });
    
  },
// this code specified how to post the new message
  postMessage: function(cb) {
    orm.create(userMessage, cb);
  },
}

module.exports = messageModel;