const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const fs = require("fs");

const Feedback = require("./src/model/FeedbackModel");

const feedbackRoutes = require("./src/routes/routes");

const config = require("./src/configs/appConfig.json");

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");


const port = 3000;

const uri = `mongodb+srv://${config.username}:${config.password}@cluster0.c5gbk.mongodb.net/Storage?retryWrites=true&w=majority`

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(feedbackRoutes)

mongoose.connect(uri)
  .then(result => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch(err => console.log(err))