var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "America1!",
    database: "burgers_db"
});

//connection test//
var express = require("express");
var exphbs = require("express-handlebars");


var app = express();

var PORT = process.env.PORT || 8080;

//going to run the middle ware i will need for this app//

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set('view engine', "handlebars");

// start the server to listen to the client request //

app.listen(PORT, function() {
    //log server side to know that the server has started//
    console.log("sever listening on: http://localhost:" + PORT);
});
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;