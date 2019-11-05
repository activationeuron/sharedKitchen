const { mysqlconnection } = require("../db/index");
var express = require("express");
var router = express.Router();
const bodyparser = require("body-parser");
var jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
var myQuery =
  "SELECT kitchens.id, kitchens.name, kitchen_info.cost, kitchen_info.rating FROM kitchens INNER JOIN kitchen_info ON kitchens.id=kitchen_info.id ORDER BY kitchen_info.rating DESC LIMIT 6";
module.exports = router;
router.use(bodyparser.json());
let objs = [];
let userid = [];
var app = express();
router.use(cookieParser());

const getUserLocation = (req, res) => {
  var myobj = req.body.response.body.address;
  console.log(myobj.postcode);
  var zipcode = myobj.postcode.slice(0, 1);
  console.log(zipcode);
  /*
    myQuery =
      "SELECT kitchens.id, kitchens.name, kitchen_info.cost, kitchen_info.rating FROM kitchens INNER JOIN kitchen_info ON kitchens.id=kitchen_info.id WHERE kitchens.address LIKE '%" +
      myobj.state +
      "%' ORDER BY kitchen_info.rating DESC LIMIT 6;";
      */
  myQuery =
    "SELECT kitchens.id, kitchens.name, kitchen_info.cost, kitchen_info.rating FROM kitchens INNER JOIN kitchen_info ON kitchens.id=kitchen_info.id WHERE kitchens.zipcode LIKE '" +
    myobj.postcode.slice(0, 1) +
    "%' ORDER BY kitchen_info.rating DESC LIMIT 6;";
  console.log(myQuery);
};

const getKitchenTabs = (req, res) => {
  mysqlconnection.query(myQuery, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
      console.log(rows);
    } else console.log(err);
  });
};

const getCookie = (req, res) => {
  try {
    var token = req.cookies["usertoken"];
    jwt.verify(token, "keepthissecret", function(err, decoded) {
      var user_type;
      console.log(decoded.user.id);
      var userQuery =
        "SELECT * FROM users WHERE id ='" + decoded.user.id + "';";
      mysqlconnection.query(userQuery, (err, rows, fields) => {
        if (!err) {
          console.log(rows);
          user_type = rows[0].user_type;
          console.log(user_type);
          return res.json({
            body: { username: decoded.user.name, type: user_type }
          });
        } else {
          console.log(err);
        }
      });
    });
  } catch (err) {
    return res.json({
      body: "not logged in"
    });
  }
};

module.exports = {
  getKitchenTabs,
  getUserLocation,
  getCookie
};
