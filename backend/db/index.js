const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
   host: "localhost",
   user: "linux",
   password: "linux",
   database: "kiychen",

/*   host: "localhost",
  user: "root",
  password: "",
  database: "shared_kitchen",
  port: 3306 */
});
module.exports = { mysqlconnection };
