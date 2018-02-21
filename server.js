const express = require('express');
const app = express();
require("dotenv").config();
const expressJwt = require("express-jwt");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const cors = require("cors");

mongoose.connect("mongodb://localhost/modelz", (err) => {
    if (err) throw err;
    console.log("Connected to the Modelz Database");
});

app.use(bodyParser.json());
app.use("/api", expressJwt({secret: process.env.SECRET}));
// app.use(cors());
app.use("/auth", require("./routes/auth"));
app.use('/api/modelz', require('./routes/routes'));
app.use("/api/score", require("./routes/scoreboard"))


app.listen(8080, () =>{
    console.log("Server is running on port 8080");
})