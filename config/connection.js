//this page connects to mysql

var mysql=require('mysql');


var connection = mysql.createConnection({
  host:"localhost",
  port:3306,
  user:"root",
  password:"",
  database: "safechat"
});

connection.connect(function(err){
  if(err) throw err;
  console.log("mysql is connected on port 3306");
});
