const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/courses", (req, res, next) => {
  let token = req.headers.auth;
  token = token.replace("Bearer ", "");
  jwt.verify(token, process.env.SECRET, (err, decode) => {
    if (err) {
      res.status(400).json("Invalid Request");
    } else {
      req.body.data = decode._id;
      next();
    }
  });
});

app.use("/", userRoutes);
app.use("/courses", courseRoutes);

mongoose.set("strictQuery", "false");

mongoose.connect(
  process.env.MONGOURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server is up and running at http://localhost:${PORT}`);
    });
  }
);
