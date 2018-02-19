const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new mongoose.Schema({
    "username": String,
    "score": Number,
    // "time": String
});

module.exports = mongoose.model("Score", scoreSchema);