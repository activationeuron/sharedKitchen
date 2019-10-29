const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
const logger = require("morgan");
const passport = require("passport");

const keys = require("./config/keys.js");
require("./services/passport");

const Profil = require("./router/profile");
const pardeepFile = require("./router/users.js");
const Products = require("./router/kitchens.js");
const fetchdb = require("./router/fetchdb.js");
const dashboard = require("./router/dashboard.js");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(
  cookieSession({
    maxAge: 1 * 24 * 60 * 60 * 1000,
    keys: [keys.secrateKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./authRouts/authRoutes.js")(app);
app.use("/api/", Profil);
app.use("/pardeep/users/", pardeepFile);
app.use("/p/", Products);
app.use("/fetchdb/", fetchdb);
app.use("/dashboard/", dashboard);
app.listen(5000, () => {
  console.log("appstarted at 5000");
});
