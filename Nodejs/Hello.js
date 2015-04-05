var express    = require("express");
var mysql      = require('mysql');

var app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();
 
});

app.get('/GetCountries',function(req,res){
	var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tiger',
  database : 'ims_me'
});

	connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n");  
}
});
connection.query('SELECT name from ims_country', function(err, rows, fields) {
connection.end();
  if (!err)
    res.end(JSON.stringify(rows));
	//res.end(JSON.stringify("test"));
  else
	console.log('The error is: ', err);
});
});

app.listen(8888,function(){
  console.log("NodeJs Server Started on PORT 8888");
});