const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const fs = require("fs");


const Feedback = require("./model/FeedbackModel");

const feedbackRoutes = require("./routes/routes");

const config = require("./configs/appConfig.json");

const port = 3000;

const uri = `mongodb+srv://${config.username}:${config.password}@cluster0.c5gbk.mongodb.net/Storage?retryWrites=true&w=majority`

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/public", express.static("src/public"));

app.use(feedbackRoutes)

mongoose.connect(uri)
  .then(result => {
    app.listen(port, () => {
      console.log(`This app listening at http://localhost:${port}`);
    });
  })
  .catch(err => console.log(err))