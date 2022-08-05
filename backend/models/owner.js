const mongoose = require("mongoose");
const Person = require("./person");
const Schema = mongoose.Schema;

const OwnerSchema = new Schema({
  camps: [
    {
      type: Schema.Types.ObjectId,
      ref: "Camp",
    },
  ],
});

// OwnerSchema.plugin(passportLocalMongoose);
const Owner = Person.discriminator("Owner", OwnerSchema);

module.exports = Owner;
