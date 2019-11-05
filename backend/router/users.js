var express = require("express");
var bodyParser = require("body-parser");
let fs = require("fs-extra");
var app = express();
const { mysqlconnection } = require("../db/index");
const path = require("path");
const multer = require("multer");
var cors = require("cors");
const fss = require("fs");
const requireLogin = require(".././controller/requireLogin");
app.use(cors());

app.post("/addkitchen", requireLogin, function(req, res) {
  mysqlconnection.connect(function(err) {
    mysqlconnection.query(
      `INSERT INTO kitchens(name,owner_name,address,mail_id,city,zipcode,category,userid,imagekey) VALUES("${
        req.body.Firststate.name
      }","${req.body.name}","${req.body.Firststate.address}","${
        req.body.mail
      }","${req.body.Firststate.city}","${
        req.body.Firststate.zip
      }","kitchen","${req.body.dbId}","${req.body.img}")`,
      function(err, result) {
        if (err) throw err;
        mysqlconnection.query(
          "Insert into kitchen_info (id,cusine_type,description,amenities,equipment_info,available_from,available_until,cost,terms,timings) VALUES ('" +
            result.insertId +
            "','" +
            req.body.Firststate.cuisine +
            "','" +
            req.body.Firststate.description +
            "','" +
            req.body.Firststate.amenities +
            "','" +
            req.body.Firststate.equipments +
            "','" +
            req.body.Secondstate.start +
            "','" +
            req.body.Secondstate.end +
            "','" +
            req.body.Secondstate.price +
            "','" +
            req.body.Secondstate.terms +
            "','" +
            req.body.Secondstate.timings +
            "')",
          function(err, result) {
            if (err) throw err;
          }
        );
      }
    );
  });
});

app.post("/image", function(req, res, err) {
  var c = "jhu";
  var counter = 0;
  var storage = multer.diskStorage({
    filename: function(req, file, cb) {
      var mime = require("mime-types"),
        fileExtension = mime.extension(file.mimetype);
      if (file.fieldname == "kitchen") {
        counter++;
        c = file.fieldname + counter + "." + fileExtension;
      } else c = file.fieldname + "." + fileExtension;
      cb(null, c);
    },
    destination: (req, file, callback) => {
      let path = `./public/restaurents/${req.headers.path}/${file.fieldname}`;
      fs.mkdirsSync(path);
      callback(null, path);
    }
  });
  var upload = multer({ storage: storage }).fields([
    { name: "threesixty", maxCount: 1 },
    { name: "kitchen", maxCount: 8 },
    { name: "oven", maxCount: 1 },
    { name: "griddle", maxCount: 1 },
    { name: "deepfryer", maxCount: 1 },
    { name: "grill", maxCount: 1 },
    { name: "ranges", maxCount: 1 },
    { name: "ice", maxCount: 1 },
    { name: "food", maxCount: 1 },
    { name: "Firstdoc", maxCount: 1 },
    { name: "seconddoc", maxCount: 1 },
    { name: "thirddoc", maxCount: 1 }
  ]);
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});
app.get("/nearby", function(req, res, next) {
  // res.send('respond with a resource');
  mysqlconnection.connect(function(err) {
    let lat = req.query.lat;
    let longi = req.query.longi;
    mysqlconnection.query(
      `SELECT *, ((ACOS(SIN(${lat} * PI() / 180) * SIN(latitude * PI() / 180) + COS(${lat} * PI() / 180) * COS(latitude * PI() / 180) * COS((${longi} - longitude) * PI() / 180)) * 180 / PI()) * 60 * 1.1515 * 1.609344) as distance FROM kitchens HAVING distance <= 5 ORDER BY distance ASC LIMIT 3`,
      function(err, result, fields) {
        if (result != null) res.json(result);
      }
    );
  });
});
app.get("/all", function(req, res, next) {
  // res.send('respond with a resource');
  mysqlconnection.connect(function(err) {
    let page = req.query.search;
    mysqlconnection.query(
      `SELECT * FROM kitchens INNER JOIN kitchen_info ON kitchens.id=kitchen_info.id LIMIT 3`,
      function(err, result, fields) {
        if (result != null) res.json(result);
      }
    );
  });
});
/* GET users listing. */
app.get("/", function(req, res, next) {
  // res.send('respond with a resource');
  mysqlconnection.connect(function(err) {
    let page = req.query.search;
    if (page.length > 1)
      mysqlconnection.query(
        `SELECT * FROM kitchens WHERE name LIKE '%${page}%' OR city LIKE '%${page}%' OR zipcode LIKE '%${page}%'`,
        function(err, result, fields) {
          if (result.length == 0) res.json(null);
          else res.json(result);
        }
      );
    else res.json(null);
  });
});
module.exports = app;
