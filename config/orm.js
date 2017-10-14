// Connect to connection.js file
var connection = require("./connection"); 

// ORM
var orm = {
  // Select all
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Create
  create: function(userMessage, cb) {
    var queryString = "INSERT INTO messages(username, message) VALUES(?, ?);";
    connection.query(queryString, [userMessage.username, userMessage.message], function(err, result) {
      if (err) {
        throw err;
      }
        cb(result);
    });
  }
};

module.exports = orm;

