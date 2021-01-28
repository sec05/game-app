require('dotenv-safe').config();
import express from "express";
import { Strategy as GitHubStrategy } from "passport-github";
import passport from "passport";
import jwt from "jsonwebtoken";
import cors from "cors";
import { __prod__ } from "./constants";
import cookieParser from "cookie-parser"
(async () => {
  const app = express();
  passport.serializeUser((user: any, done) => {
    done(null, user.accessToken);
  });
  app.use(cors());
  app.use(passport.initialize());
  app.use(express.json());
  app.use(cookieParser())
  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(_, __, profile, cb) {
    //console.log(profile);
   cb(null, {accessToken: jwt.sign({userID: profile.username}, process.env.ACCESS_TOKEN_SECRET!,{ expiresIn: "12h"})
  })}
));
  app.get('/auth/github',
  passport.authenticate('github', {session: false}));

app.get('/auth/github/callback', 
  passport.authenticate('github',{session: false}),
  function(req: any, res) {
    
    res.cookie("token", req.accessToken, {maxAge: 12*60*60, httpOnly: true, secure: process.env.NODE_ENV === "production" ? true: false});
    res.redirect(`http://localhost:3000/`);
  });
  app.get("/auth/userdata",(req: any, res)=>{
      // We extract the raw cookies from the request headers
      const rawCookies = req.headers.cookie.split('; ');
      // rawCookies = ['myapp=secretcookie, 'analytics_cookie=beacon;']
     
      const parsedCookies: any = {};
      rawCookies.forEach((rawCookie:any )=>{
      const parsedCookie = rawCookie.split('=');
      // parsedCookie = ['myapp', 'secretcookie'], ['analytics_cookie', 'beacon']
       parsedCookies[parsedCookie[0]] = parsedCookie[1];
      });
      console.log(parsedCookies);
  })
  app.listen(3001, () => {
    console.log(`Game-app api started on port 3001!`);
  });
})();
