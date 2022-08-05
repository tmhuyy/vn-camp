const mongoose = require("mongoose");
const Person = require("./person");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    bookedCamps: [
    {
      type: Schema.Types.ObjectId,
      ref: "Camp",
    },
  ],
});

// UserSchema.plugin(passportLocalMongoose);
const User = Person.discriminator("User", UserSchema);

module.exports = User;
