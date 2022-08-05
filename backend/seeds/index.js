const mongoose = require("mongoose");
const { places, descriptors } = require("./namePlace");
const cities = require("./cities");

const Camp = require("../models/camp");

mongoose
  .connect("mongodb://localhost:27017/vn-camp")
  .then(() => console.log("MONGODB CONNECTION"))
  .catch((err) => console.log(err));

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Camp.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const price = Math.floor(Math.random() * 20) + 10;
    const random610 = Math.floor(Math.random() * 610);
    const camp = new Camp({
      location: `${cities[random610].city}, ${cities[random610].admin_name}`,
      geometry: {
        type: "Point",
        coordinates: [cities[random610].longitude, cities[random610].latitude],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dby7m9lwp/image/upload/v1659664870/VNCamp/5m-ultimate-bell-tent_1600x_wtr1dg.jpg",
          filename: "VNCamp/5m-ultimate-bell-tent_1600x_wtr1dg",
        },
        {
          url: "https://res.cloudinary.com/dby7m9lwp/image/upload/v1659664870/VNCamp/5m-ultimate-bell-tent_1600x_wtr1dg.jpg",
          filename: "VNCamp/5m-ultimate-bell-tent_1600x_wtr1dg",
        },
      ],
      title: `${sample(descriptors)} ${sample(places)}`,
      price,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cumque, rerum deserunt voluptatibus harum corrupti eveniet nihil minus porro nobis inventore fugit repellat officia et maiores adipisci libero consequuntur doloribus!",
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
console.log(cities.length);
