const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const tweetsSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    user_uuid: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    tweet: {
        type: String,
        required: true,
    },
    likes_count: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
})

const Tweets = new mongoose.model("Tweets", tweetsSchema);

module.exports = Tweets;