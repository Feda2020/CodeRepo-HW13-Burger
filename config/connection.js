var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();
//Connecting to JAWSDB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        //Username and password
        user: "root",
        password: process.env.MYSQLPW,
        database: "burgers_db"
    });
};

connection.connect();
// Export connection for our ORM to use.
module.exports = connection;