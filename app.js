const express = require("express");

const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");
const port = 3000;

const arr = [];
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  arr.push(req.body);
  res.send(req.body);
  // console.log("hi");
  // console.log(arr);
  console.log(arr);
});

app.get("/", (req, res) => {
  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
