// Pull on Dependeincies 
var express = require('express');
var path = require("path");
var app = express();
var http = require('http').Server(app);
var ioConnect = require("./config/io")(http);
var connection = require('./config/connection');
var messageJS = require("./models/message.js");

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

var port = process.env.PORT || 3000;
console.log(port + " Port 3000 is on fire!!");

// Setting handlebars as the main engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static("public"));

// GET function 
app.get('/', function(req, res){
  res.render("index");
  // res.sendFile(path.join(__dirname, './controllers/controller.js'));
});

// Creating a connect and disconnect function
ioConnect.on('connection', function(socket){
  socket.on("message", function(message){
    console.log("Message received: " + message);
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

http.listen(port);