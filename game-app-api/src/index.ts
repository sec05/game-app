require('dotenv-safe').config();
const mongoose = require("mongoose")
const User = require("./Entities/Database/Models/User")
import express from "express";
import { Strategy as GitHubStrategy } from "passport-github";
import passport from "passport";
import jwt from "jsonwebtoken";
import cors from "cors";
import { __prod__ } from "./constants";
import cookieParser from "cookie-parser"
(async () => {
  mongoose.connect(process.env.DB_URI!, { useUnifiedTopology: true, useNewUrlParser: true });
  const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
  const app = express();
  passport.serializeUser((user: any, done) => {
    done(null, user.accessToken);
  });
  app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
  app.use(passport.initialize());
  app.use(express.json());
  app.use(cookieParser())
  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(_, __, profile, cb) {
    User.findOne({username: profile.username!}, (err: any, user: any)=>{
      if(user===null)
      {
        User.create({username: profile.username!,photos:  profile.photos!})
      }
      if(user !== null)
      {
        return;
      }
    });
   cb(null, {accessToken: jwt.sign({userID: profile.username}, process.env.ACCESS_TOKEN_SECRET!,{ expiresIn: "12h"})
  })}
));
  app.get('/auth/github',
  passport.authenticate('github', {session: false}));

app.get('/auth/github/callback', 
  passport.authenticate('github',{session: false}),
  function(req: any, res) {
    
    res.cookie("token", req.user.accessToken, {maxAge: 12*60*60*60, httpOnly: true, secure: process.env.NODE_ENV === "production" ? true: false});
    res.redirect(`http://localhost:3000/`);
  });
  app.get("/auth/userdata", (req: any, res)=>{
      if(req.headers.cookie===undefined)
      {
        res.send({user: null});
        return;
      }
      const rawCookies = req.headers.cookie.split('; ');  
      const parsedCookies: any = {};
      rawCookies.forEach(async (rawCookie:any )=>{
      const parsedCookie = rawCookie.split('=');
      parsedCookies[parsedCookie[0]] = parsedCookie[1];
        let userId = "";
        let photo = "";
        try
        {
          const payload: any = jwt.verify(parsedCookies.token, process.env.ACCESS_TOKEN_SECRET!);
          userId = payload.userID;
         await User.findOne({username: userId}, (err: any, user: any)=>{
            photo = user.photos[0].value ;
          });
        }
        catch(error)
        {
          res.send({user: null});
          return;
        }
        if(!userId)
        {
          res.send({user: null});
          return;
        }
        res.send({user: userId, photos: photo, })
      });
  })
  app.listen(3001, () => {
    console.log(`Game-app api started on port 3001!`);
  });
})();
