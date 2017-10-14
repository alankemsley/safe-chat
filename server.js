// Pull on Dependeincies 
var express = require('express');
var path = require("path");
var app = express();
var http = require('http').Server(app);
var ioConnect = require("./config/io")(http);
var connection = require('./config/connection');

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
  // res.sendFile(path.join(__dirname,  './controllers/controller.js'));
});

ioConnect.on('connection', function(socket){
  console.log('a user connected');
});

// Creating a connect and disconnect function
ioConnect.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

 // Import routes and give the server access to them
var routes = require('./controllers/controller.js');

app.use('/', routes);

http.listen(port);