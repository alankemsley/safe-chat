//this page defines the server-side listener for socket emits

var io = require('socket.io');
var messageModel = require("../models/message");

//socket.io emit functions here:
module.exports = function (http) {
  var ioConnect = io(http);
  ioConnect.on("connection", function(socket) {
    socket.on("message", function(message) {
      messageModel.postMessage(message, function(data) {
        console.log(data);
      });
    });
  });
  return ioConnect;
};
