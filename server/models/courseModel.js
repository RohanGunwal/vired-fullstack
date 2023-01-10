const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, requried: true, unique: true },
  topics: [{ type: String, requried: true }],
  pptLink: {
    type: String,
    required: true,
  },
  readingMaterial: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = new mongoose.model("courses", courseSchema);
