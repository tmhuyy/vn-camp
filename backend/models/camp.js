const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String,
});

const CampSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title must be entered"]
    },
    price: {
        type: Number,
        required: [true, "Price must be entered"],
        min: [0, "Price must be greater than or equal to 0"]
    },
    location: {
        type: String,
        required: [true, "Location must be entered"]
    },
    description: {
        type: String,
        required: [true, "Description must be entered"]
    },
    images: [ImageSchema],
    geometry: {
        coordinates: {
            type: [Number],
            required: true
        },
        type: {
            type: String,
            enum: ["Point"],
            required: true
        }
    }
});

const Camp = mongoose.model("Camp", CampSchema)

module.exports = Camp;