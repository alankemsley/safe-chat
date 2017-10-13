//Here we creates general purpose functions to create queries

var connection = require('./connection'); 

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
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

