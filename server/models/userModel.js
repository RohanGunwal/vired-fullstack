const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("users", userSchema);
