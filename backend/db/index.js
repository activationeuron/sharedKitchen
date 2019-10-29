const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
  // host: "35.238.39.172",
  // user: "pardeep",
  // password: "helloworld",
  // database: "shared_kitchen",
  // port: 3306

  host: "localhost",
  user: "amit",
  password: "amit",
  database: "Kitchen",
  port: 3307
});
module.exports = { mysqlconnection };
