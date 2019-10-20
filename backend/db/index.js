const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
  host: "35.238.39.172",
  user: "pardeep",
  password: "helloworld",
  database: "shared_kitchen",
  port: 3306
});
module.exports = { mysqlconnection };
