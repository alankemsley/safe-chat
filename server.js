// Dependeincies 
var express = require('express');
var path = require("path");
var app = express();
var http = require('http').Server(app);
var ioConnect = require("./config/io")(http);
var connection = require('./config/connection');
var messageJS = require("./models/message.js");
var exphbs = require('express-handlebars');

// Port
var port = process.env.PORT || 3000;
console.log("Now running on Port " + port + ".");

// Set handlebars as the main engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static("public"));

// GET function 
app.get('/', function(req, res){
  res.render("index");
  // res.sendFile(path.join(__dirname, './controllers/controller.js'));
});

// Connect and disconnect functions
ioConnect.on('connection', function(socket){
  socket.on("message", function(message){
    ioConnect.emit("message", message);
    messageJS.postMessage(message, function(response) {
      console.log(response);
    });
  })
  socket.on('disconnect', function(){
    console.log('User disconnected');
  });
});

// Import routes and give the server access to them
var routes = require('./controllers/controller.js');
app.use('/', routes);

// Listen on port
http.listen(port);