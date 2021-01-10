require('dotenv-safe').config();
import express from "express";
import { Strategy as GitHubStrategy } from "passport-github";
import passport from "passport";
import jwt from "jsonwebtoken";
import cors from "cors";
import { __prod__ } from "./constants";

(async () => {
  const app = express();
  passport.serializeUser((user: any, done) => {
    done(null, user.accessToken);
  });
  app.use(cors({ origin: "*" }));
  app.use(passport.initialize());
  app.use(express.json());

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(_, __, profile, cb) {
   cb(null, {accessToken: jwt.sign({userID: "bob"}, process.env.ACCESS_TOKEN_SECRET!,{ expiresIn: "1y"})
  })}
));
  app.get('/auth/github',
  passport.authenticate('github', {session: false}));

app.get('/auth/github/callback', 
  passport.authenticate('github',{session: false}),
  function(req: any, res) {
    res.redirect(`http://localhost:3000/auth/${req.user.accessToken}`)
  });
  app.listen(3001, () => {
    console.log(`Game-app api started on port 3001!`);
  });
})();
