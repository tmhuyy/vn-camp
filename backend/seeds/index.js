const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/vn-camp')
    .then(() => console.log("MONGODB CONNECTION"))
    .catch(err => console.log(err));


