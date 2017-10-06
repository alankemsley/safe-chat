// Pull on Dependeincies 
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

var port = process.env.PORT || 3000;
console.log(port + " Port 3000 is on fire!!");

// Setting handlebars as the main engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// GET function 
app.get('/', function(req, res){
  res.sendFile(__dirname + './controllers/controller.js');
});

io.on('connection', function(socket){
  console.log('a user connected');
});
// Creating a PORT
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
// Creating a connect and disconnect function
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

 // Import routes and give the server access to them
var routes = require('./controllers/controller.js');

app.use('/', routes);

app.listen(port);