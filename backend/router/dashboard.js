var express = require("express");
var router = express.Router();
module.exports = router;

const { renterData } = require("../controller/dashboard");
const { adminData } = require("../controller/dashboard");
const { ownerData } = require("../controller/dashboard");

router.get("/renterdata", renterData);

router.get("/admindata", adminData);

router.get("/ownerdata", ownerData);
