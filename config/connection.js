var mysql = require("mysql");

var connection = mysql.createConnection( {
    host:"localhost",
    port: 8080,
    user: "root",
    password:"k10A25b85",
    database: "burgers_db",
});

connection.connect(function(err) {
    if(err) {
        console.log("error connectiong: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;