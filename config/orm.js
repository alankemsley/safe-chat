// Connect to connection.js file
var connection = require("./connection"); 

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

// ORM
var orm = {
  // Select all
  all: function(userMessage, cb) {
    var queryString = "SELECT * FROM messages;";
    connection.query(queryString, [userMessage.username, userMessage.message], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
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
        console.log(result);
    });
  },
};

// Export orm variable
module.exports = orm;

