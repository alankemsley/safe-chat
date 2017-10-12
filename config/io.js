//this page defines the server-side listener for socket emits

var io = require('socket.io');

//socket.io emit functions here:
module.exports = function (http) {
  var ioConnect = io(http);
  ioConnect.on('connection', function (socket) {
    console.log('a user connected');
  });
  
  return ioConnect;
  
}
