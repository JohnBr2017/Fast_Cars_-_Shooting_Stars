const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelzSchema = new mongoose.Schema({
    "playerOne": String,
    "playerTwo": String,
    "playerThree": String,
    "playerFour": String,
    "playerFive": String,
    "players": Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Modelz", modelzSchema);