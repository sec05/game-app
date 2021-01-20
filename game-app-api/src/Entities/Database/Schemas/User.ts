import { Schema } from "mongoose";

const User = new Schema({
    Username: String,
    Password: String,
    Items:{
        0: String
    },
    Scores:
    {
        Game1: Number,
    }
})