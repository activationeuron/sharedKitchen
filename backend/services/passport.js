const passport = require("passport");
const googleStragy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook");
const LocalStrategy = require("passport-local").Strategy;
const keys = require("../config/keys");
const { mysqlconnection } = require("../db/index");
const bcrypt = require('bcrypt');

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
      console.log("Ami rtia ")
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

//  Local statergy ---------------------------------------------

passport.use(
  'local-signup',
  new LocalStrategy({
   usernameField : 'email',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, email, password, done){
    // ckeck if email is allready register
    const SQL=`SELECT mail_id,type from users where mail_id='${email}'`
    mysqlconnection.query(SQL,(err,row)=>{
    
      if(row.length===1 && row[0].type==="COSTOM"){
        console.log("consum")
        done(null,false,{message:"Allready Register, Please Login"})
        return;
      }

    if(row.length===1){
      let message=`The Account is register using ${row[0].type} use ${row[0].type} to Login`
        console.log(message)
      done(null,false,{message:message})
      return;
    }


    if(row.length===0){
      const {email,password,name}=req.body; 
      bcrypt.hash(password,10,(err,hash)=>{
        if(err){
          console.log(err)
          return;
        }
        const SQL1=`INSERT INTO users(name,mail_id,password,type,verified,user_type,license) VALUES("${name}","${email}","${hash}","COSTOM","0","0","0")`
        mysqlconnection.query(SQL1,(err,row)=>{
            console.log(err)
            console.log(row)
          })
      })      
      
      // bcrypt.compare('somePassword', hash, function(err, res) {
      //   if(res) {
      //    // Passwords match
      //   } else {
      //    // Passwords don't match
      //   } 
      // });
    }
          
    })
  })

 );

 passport.use(
  'local-login',
  new LocalStrategy({
   usernameField : 'email',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req,email, password,done){
     const SQL=`SELECT mail_id,password,type FROM users where mail_id='${req.body.email}'`
     console.log(req.body)
     mysqlconnection.query(SQL,(err,result,fiels)=>{
       console.log(err,"erroe linr 174")
        if(result.length===0){
          console.log("Email Do Not exist")
          return
        }

        if(result.length===1 && result[0].type==="GOOGLE"){
          done(null,false,{message:"Login in using google"})
          return;
        }
        bcrypt.compare(req.body.password,result[0].password,(err,result)=>{
         if(result){
           const SQL=`SELECT name,mail_id,type,verified,user_type FROM users WHERE mail_id='${req.body.email}'` 
            mysqlconnection.query(SQL,(err,res)=>{
            
            console.log(res)
            const {name,mail_id,type,verified,user_type}=res[0];
            const user={
            name: name,
            email: mail_id,
            user_type: user_type,
            
            }

            done(null,user)
          })
         
          }
        })


     })
  })
 );


