const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/*", { target: "http://localhost:5000/" }));
  app.use(proxy("/google/callback", { target: "http://localhost:5000/" }));
  app.use(proxy("/api/*", { target: "http://localhost:5000/" }));
  app.use(proxy("/users/*", { target: "http://localhost:5000/pardeep/" }));
  app.use(proxy("/product/*", { target: "http://localhost:5000/p/" }));
  app.use(proxy("/api/*", { target: "http://localhost:5000/" }));
  app.use(proxy("/fetchdb/*", { target: "http://localhost:5000/" }));
  app.use(proxy("/dashboard/*", { target: "http://localhost:5000/" }));
};
