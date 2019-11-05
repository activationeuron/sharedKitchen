const { mysqlconnection } = require("../db/index");
const getProducts = (req, res) => {
  res.send("test");
};

const getProductById = (req, res) => {
  mysqlconnection.query(
    `SELECT * FROM kitchens WHERE id=${req.params.id}`,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        return res.json(rows);
      }
    }
  );
};

const getProductReviewById = (req, res) => {
  const sql = `SELECT product_review.date,product_review.userid,product_review.ratings,product_review.review,users.id,users.name from product_review Join users on users.id=product_review.userid WHERE kitchenId=${req.params.id} LIMIT 10`;
  mysqlconnection.query(sql, (err, result, fields) => {
    if (err) {
      console.log(err);
    }
    return res.json(result);
  });
};

const postReviewById = (req, res) => {
  const sql = `INSERT into product_review(userid,kitchenId,ratings,review) VALUES('${req.body.userId}' ,${req.body.kitchenId},'${req.body.stars}','${req.body.review}')`;
  mysqlconnection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "Review Sumbited Successfuly" });
  });
};
const postBookingData = (req, res) => {
  const { start, end } = req.body;
  let start_on = start.split(" ").join("-");
  let end_on = end.split(" ").join("-");
  const sql = `INSERT INTO booking_info(user_id,kitchen_id,	booked_from,booked_until) VALUES('${req.body.userId}','${req.body.kitchenId}','${start_on}','${end_on}')`;
  mysqlconnection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({ message: "Successfuly Booked" });
  });
};

const getBookingInfo = (req, res) => {
  console.log(req.body.id, "amit rai");
  sql = `SELECT booked_from,booked_until from booking_info WHERE 	kitchen_id='${req.params.id}'`;
  mysqlconnection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
};
module.exports = {
  getProducts,
  getProductById,
  getProductReviewById,
  postReviewById,
  postBookingData,
  getBookingInfo
};
