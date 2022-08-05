const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
mongoose
  .connect("mongodb://localhost:27017/vn-camp", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("CONNECTION MONGODB"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test
app.get("/", (req, res) => {
  res.send("TEST");
});

app.listen(process.env.PORT || "5000", () => console.log("SERVER IS RUNNING"));
