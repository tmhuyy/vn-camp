const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const options = {
//   timestamps: {
//     createdAt: "created",
//     updatedAt: "updated",
//   },
  discriminatorKey: "personType",
  toJSON: {
    virtuals: true,
  },
};

const PersonSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
}, options);

// Person.plugin(passportLocalMongoose);

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
