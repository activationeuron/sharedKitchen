const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kitchen",
  port: 3306

  // host: "localhost",
  // user: "amit",
  // password: "amit",
  // database: "Kitchen",
  // port: 3307
});
module.exports = { mysqlconnection };
