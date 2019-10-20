const express = require("express");
const router = express.Router();
// to authonticate
const { getProductById } = require("../controller/kitchens");

router.get("/product/:id", getProductById);

module.exports = router;
