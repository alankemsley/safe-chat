// Dependency
var mysql=require("mysql");

// Connect to MySQL
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "safechat"
});

connection.connect(function(err){
  if(err) {throw err;}
  console.log("Connected to database on Port 3306 as ID: " + connection.threadID);
});

// Export
module.exports = connection;

