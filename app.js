const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const Feedback = require("./model");

const app = express();

const port = 3000;

const uri =
  "mongodb+srv://dbUser:dbUserPassword@cluster0.c5gbk.mongodb.net/Storage?retryWrites=true&w=majority";

const arr = [];
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  arr.push(req.body);
  res.send(req.body);

  mongoose
    .connect(uri)
    .then((res) => {
      const feedback = new Feedback({
        email: req.body.mail,
        feedback: req.body.feedback,
      });

      feedback
        .save()
        .then((res) => console.log("successfully written to db"))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

  console.log(req.body.mail);

  console.log(req.body.feedback);

  // console.log(arr);
  console.log(arr);
});

app.get("/", (req, res) => {
  mongoose.connect(uri).then((result1) => {
    Feedback.find()
      .then((result) => {
        res.send(result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  });
  //res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
