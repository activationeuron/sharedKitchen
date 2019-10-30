const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
   host: "35.223.45.7",
   user: "pardeep",
   password: "qazwsx",
   database: "shared_kitchen",
   port: 3306

/*   host: "localhost",
  user: "root",
  password: "",
  database: "shared_kitchen",
  port: 3306 */
});
module.exports = { mysqlconnection };
