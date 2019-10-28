const express = require("express");
const router = express.Router();
// to authonticate
const {
  getProductById,
  getProductReviewById,
  postReviewById,
  postBookingData,
  getBookingInfo
} = require("../controller/kitchens");

router.get("/bookkitchens/:id", getBookingInfo);
router.get("/product/:id", getProductById);
router.get("/review/:id", getProductReviewById);
router.post("/bookkitchens/:id", postBookingData);
router.post("/review/:id", postReviewById);
module.exports = router;
