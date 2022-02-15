const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const Feedback = require("./model/FeedbackModel");

const feedbackRoutes = require("./routes/index");

const app = express();

const port = 3000;

const uri =
  "mongodb+srv://dbUser:dbUserPassword@cluster0.c5gbk.mongodb.net/Storage?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(feedbackRoutes)

mongoose.connect(uri)
  .then(res => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch(err => console.log(err))