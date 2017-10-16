// Dependeincies 
var express = require('express');
var path = require("path");
var app = express();
var http = require('http').Server(app);
var ioConnect = require("./config/io")(http);
var connection = require('./config/connection');
var messageJS = require("./models/message.js");
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var orm = require("./config/orm");

// Port
var port = process.env.PORT || 3000;
console.log("Now running on port " + port + ".");

// Set body-parser middleware to handle forms and json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set handlebars as the main engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static("public"));

// GET function 
app.get('/', function(req, res){
  res.render("index");
  // res.sendFile(path.join(__dirname, './controllers/controller.js'));
});

// Get messages from database upon page load
orm.all("messages", function(response) {
  console.log("Getting messages from database...");
});

// Socket.io functions
ioConnect.on('connection', function(socket){
  // Log
  console.log("User connected.");
  // Get all messages from database upon connecting
  socket.on("messages", function(messages){
    ioConnect.emit("messages", messages);
  });

  // If user sends a message
  socket.on("message", function(message){
    ioConnect.emit("message", message);
    messageJS.create(message, function(response) {
      console.log("User sent a message.");
    });
  });

  // If user disconnects
  socket.on("disconnect", function(){
    console.log('User disconnected.');
  });

});

// Import routes and give the server access to them
var routes = require('./controllers/controller.js');
app.use('/', routes);

// Listen on port
http.listen(port);

