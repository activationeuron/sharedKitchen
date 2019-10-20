const express = require("express");
const router = express.Router();
// to authonticate
const requireLogin = require("../controller/requireLogin");

const { getProfile } = require("../controller/profile");

router.get("/profile", requireLogin, getProfile);

module.exports = router;
