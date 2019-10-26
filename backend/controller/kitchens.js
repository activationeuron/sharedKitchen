const { mysqlconnection } = require("../DB/index");
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
        console.log(rows);
        return res.json(rows);
      }
    }
  );
};

const getProductReviewById = (req, res) => {
  const sql = `SELECT * from product_review WHERE kitchenId=${req.params.id} LIMIT 10`;
  mysqlconnection.query(sql, (err, result, fields) => {
    if (err) {
      console.log(err);
    }
    return res.json(result);
  });
};

const postReviewById = (req, res) => {
  console.log(req.body);
  const sql = `INSERT into product_review(userid,kitchenId,ratings,review) VALUES('${req.body.emailId}' ,${req.body.kitchenId},'${req.body.stars}','${req.body.review}')`;
  console.log(sql);
  mysqlconnection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
};
const postBookingData = (req, res) => {
  console.log(req.body);
  const { start, end } = req.body;
  let start_on = start.split(" ").join("-");
  let end_on = end.split(" ").join("-");
  console.log(start_on, end_on);
  const sql = `INSERT INTO bookings_info(userId,kitchenId,start_on,end_on) VALUES('aforamitrai@gmail.com','${req.body.id}','${start_on}','${end_on}')`;
  mysqlconnection.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
};

const getBookingInfo = (req, res) => {
  console.log(req.body);
  sql = `SELECT start_on,end_on from bookings_info WHERE kitchenId='${req.params.id}'`;
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
