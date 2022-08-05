const express = require("express");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test
app.get("/", (req, res) => {
    res.send("TEST")
});

app.listen(process.env.PORT || "5000", () => console.log("SERVER IS RUNNING"))