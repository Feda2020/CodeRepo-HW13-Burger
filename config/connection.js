var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();

// mydql connection information
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    //Username and password
    user: "root",
    password: process.env.MYSQLPW,
    database: "burgers_db"
});

// to test connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;