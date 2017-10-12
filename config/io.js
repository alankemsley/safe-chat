var io = require('socket.io');
var messageModel = require("../models/message");

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
