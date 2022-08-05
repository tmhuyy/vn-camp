const express = require("express");

const app = express();


// test
app.get("/", (req, res) => {
    res.send("TEST")
})
app.listen("8001", () => console.log("SERVER IS RUNNING"))