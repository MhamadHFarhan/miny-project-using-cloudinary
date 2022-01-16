const mongoose = require("mongoose");

const cloudinarySchema = new mongoose.Schema({
  title: { type: String },
  images: { type: Array },
});
module.exports = mongoose.model("Cloudinary", cloudinarySchema);
