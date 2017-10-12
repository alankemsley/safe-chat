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
    var queryString = "INSERT INTO messages(userName, messages) VALUES( " + userName + "," + userMessage + ");";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
        cb(result);
    });
  }
};

module.exports = orm;

