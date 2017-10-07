// Dependencies
var mysql = require("mysql");

// Connect to mysql
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "safechat"
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Connected to database as ID: " + connection.threadId);
});

// Export
module.exports = connection;
