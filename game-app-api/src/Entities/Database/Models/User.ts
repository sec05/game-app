const mongoose = require('mongoose');

const User = mongoose.Schema({
    username: String,
    photos: Array,
    Scores:
    {
        planetGuesser: Number,
    }
});
module.exports = mongoose.model("User",User)