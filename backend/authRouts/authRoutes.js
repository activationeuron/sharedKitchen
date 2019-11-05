const passport = require("passport");
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/");
  });
  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log(req.user);
    res.redirect("/");
  });
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["id", "displayName", "photos"]
    })
  );

  app.get(
    "/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/" }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );
  
// local------------------------------------------------------------------------------
 app.post('/signup',(req,res,next)=>{console.log(req.body) 
  next()}, passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
 }));

 app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
 }),
  function(req, res){
   console.log(req)
  });

  


};



