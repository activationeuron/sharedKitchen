const { mysqlconnection } = require("../db/index");
var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
router.use(cookieParser());
module.exports = router;

const renterData = (req, res) => {
  var userid;
  current = [];
  previous = [];
  kitchens = [];
  license = [];
  requests = [];
  userdata = [];
  userdata = req.user[0];
  console.log(userdata);
  try {
    userid = req.user[0].id;
    console.log(userid);
    if (req.user[0].usertype == "owner") {
      console.log("invalid user");
      res.json({
        message: "false",
        body: "Invalid user"
      });
    } else {
      var query =
        "SELECT booking_info.booked_from, booking_info.booked_until, booking_info.user_id,booking_info.kitchen_id, kitchens.name FROM booking_info INNER JOIN kitchens ON booking_info.kitchen_id = kitchens.id where booking_info.user_id = " +
        userid +
        " AND booking_info.current = 1;";
      mysqlconnection.query(query, (err, rows, fields) => {
        if (!err) {
          console.log(rows);
          current = rows;
        } else console.log(err);
      });

      var query =
        "SELECT booking_info.booked_from, booking_info.booked_until, booking_info.user_id,booking_info.kitchen_id, kitchens.name FROM booking_info INNER JOIN kitchens ON booking_info.kitchen_id = kitchens.id where booking_info.user_id = " +
        userid +
        " AND booking_info.current = 0;";
      mysqlconnection.query(query, (err, rows, fields) => {
        if (!err) {
          console.log(rows);
          previous = rows;
          res.json({
            current: current,
            previous: previous
          });
        } else console.log(err);
      });
    }
  } catch (err) {
    res.json({
      message: "false",
      body: "User not logged in"
    });
    console.log(err);
  }
};

const adminData = (req, res) => {
  var userid;
  kitchens = [];
  license = [];
  requests = [];
  userid = req.user[0].id;
  if (req.user[0].usertype == "admin") {
    console.log("invalid user");
    res.json({
      message: "false",
      body: "Invalid user"
    });
  } else {
    var query = "SELECT name FROM kitchens where verified = 0";
    mysqlconnection.query(query, (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        kitchens = rows;
      } else console.log(err);
    });

    var query = "SELECT name FROM users where license = 0";
    mysqlconnection.query(query, (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        license = rows;
      } else console.log(err);
    });

    var query =
      "SELECT users.id, users.name, kitchen_requests.description FROM kitchen_requests INNER JOIN users ON kitchen_requests.userid = users.id";
    console.log(query);
    mysqlconnection.query(query, (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        requests = rows;
        res.json({
          kitchens: kitchens,
          license: license,
          requests: requests
        });
      } else console.log(err);
    });
  }
};

const ownerData = (req, res) => {
  var userid;
  mykitchens = [];
  try {
    console.log(req.user[0].id);
    userid = req.user[0].id;
    if (req.user[0].usertype == "renter") {
      console.log("invalid user");
      res.json({
        message: "false",
        body: "Invalid user"
      });
    } else {
      var query =
        "SELECT users.id, users.name, kitchens.name, kitchens.verified, kitchens.id FROM kitchens INNER JOIN users ON kitchens.userid = users.id where users.id ='" +
        userid +
        "';";
      console.log(query);
      mysqlconnection.query(query, (err, rows, fields) => {
        if (!err) {
          console.log(rows);
          res.json({
            mykitchens: rows
          });
        } else console.log(err);
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      message: "false",
      body: "User not logged in"
    });
  }
};

module.exports = {
  renterData,
  adminData,
  ownerData
};
