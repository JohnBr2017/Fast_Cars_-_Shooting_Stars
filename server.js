const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require("cors");

mongoose.connect("mongodb://localhost/modelz", (err) => {
    if (err) throw err;
    console.log("Connected to the Modelz Database");
});
app.use(cors());
app.use(bodyParser.json());
app.use('/modelz', require('./routes/routes'));
app.use("/score", require("./routes/scoreboard"))


app.listen(8080, () =>{
    console.log("Server is running on port 8080");
})