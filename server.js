
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var mysql = require('mysql');

user = [];
connections = [];

server.listen(process.env.PORT || 3001);
  console.log("server running");
  app.get('/', function (req, res) {

    //WE NEED TO ADD THE CORRCT HANDLEBARS PAGE reference
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket){
  connections.push(socket);
  console.log("connected: %s sockets connected", connections.length);

  //Disconnect
  connections.splice(connections.indexOf(socket), 1);
  console.log("Disconnected. Phew! %s sockets connected", connections.length);
});