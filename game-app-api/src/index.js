import express from "express";
import { Strategy as GitHubStrategy } from "passport-github";
import passport from "passport";
import jwt from "jsonwebtoken";
import cors from "cors";

const main = async () => {
    const app = express();
    passport.serializeUser((user, done) => {
        done(null, user.accessToken);
    });

    app.use(cors({ origin: "*" }));
    app.use(passport.initialize());
    app.use(express.json());

    passport.use(
        new GitHubStrategy(
            {

                clientID: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                callbackURL: "http://localhost:3002/auth/github/callback",

            },async(_,__, profile, cb)=>{
                //let user =  fine one function
                if(true /*user*/)
                {
                    user.name = profile.displayName;
                    await user.save();
                }
                
            })
    )
}
main();