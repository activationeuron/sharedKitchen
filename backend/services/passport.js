const passport = require("passport");
const googleStragy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook");
const keys = require("../config/keys");
const { mysqlconnection } = require("../db/index");

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  console.log(email, "console from desilibzer");
  const USERQUERY = `SELECT id,userId,name,profilePic,user_type,mail_id,license FROM users WHERE mail_id='${email}'`;
  mysqlconnection.query(USERQUERY, (err, row) => {
    done(err, row);
  });
});
passport.use(
  new googleStragy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.GoogleClientSecrate,
      callbackURL: "/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      //   console.log(accessToken);
      //   console.log(refreshToken);
      //   console.log(profile);
      const SQL_query = `SELECT * FROM users WHERE userId=${profile.id} OR mail_id='${profile.emails[0].value}'`;
      mysqlconnection.query(SQL_query, (err, row) => {
        if (err) {
          throw err;
        }
        if (row.length === 0) {
          const { sub, name, picture, email } = profile._json;
          const INSERT_USER = `INSERT INTO users(name,type,userId,profilePic,mail_id,verified) VALUES("${name}","GOOGLE","${sub}","${picture}","${email}",1)`;
          mysqlconnection.query(INSERT_USER, (err, row, fields) => {
            console.log(fields, "fileds");
            console.log(row);
            if (err) {
              throw err;
            } else {
              const GET_RECENT_USER = `SELECT * FROM users WHERE userId='${sub}' OR mail_id='${email}'`;
              mysqlconnection.query(GET_RECENT_USER, (err, row) => {
                if (err) {
                  throw err;
                }
                const user = {
                  userId: row[0].userId,
                  name: row[0].name,
                  profilePic: row[0].profilePic,
                  email: row[0].mail_id,
                  user_type: row[0].user_type,
                  license: row[0].license,
                  dbId: row[0].id
                };
                done(null, user);
              });
            }

            // console.log(row[0], "rows after inserting the user");
            // user = {
            //   userId: profile._json.sub,
            //   name: profile._json.name,
            //   profilePic: profile._json.picture,
            //   email: profile._json.email
            // };
            // console.log(user, "user---------------");
            // done(null, user);
          });
        } else {
          console.log(row, "rows from  database");
          const user = {
            userId: row[0].userId,
            name: row[0].name,
            profilePic: row[0].profilePic,
            email: row[0].mail_id,
            user_type: row[0].user_type,
            license: row[0].license,
            dbId: row[0].id
          };

          done(null, user);
        }
      });
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookAppId,
      clientSecret: keys.facebookSecrate,
      callbackURL: "http://localhost:5000/facebook/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      console.log(accessToken);
      console.log(refreshToken);
    }
  )
);
