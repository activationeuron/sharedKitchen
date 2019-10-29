var express = require("express");
var router = express.Router();
module.exports = router;

const {
  getUserLocation,
  getKitchenTabs,
  getCookie
} = require("../controller/homepage");

router.post("/loc", getUserLocation);

router.get("/all", getKitchenTabs);

router.get("/getcookie", getCookie);
