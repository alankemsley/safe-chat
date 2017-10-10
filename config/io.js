var io = require('socket.io');

module.exports = function (http) {
  var ioConnect = io(http);
  ioConnect.on('connection', function (socket) {
    console.log('a user connected');
  });
  
  return ioConnect;
  
}
