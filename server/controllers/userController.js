const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: "1h",
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error("All fields are required");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error(`Email doesn't exists`);
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error("Incorrect Password");
    }

    const token = `Bearer ${createToken(user._id)}`;

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const signUp = async (req, res) => {
  const { name, email, age, gender, password } = req.body;
  try {
    if (!email || !name || !age || !gender || !password) {
      throw new Error("All fields are required");
    }

    if (!validator.isEmail(email)) {
      throw new Error("Email is not valid");
    }

    if (!validator.isAlphanumeric(name)) {
      throw new Error("Username is not valid");
    }

    if (!validator.isStrongPassword(password)) {
      throw new Error(
        "Password must contain atleast 1 capital and 1 small letter, 1 special character and has min length of 8"
      );
    }

    if (!validator.isNumeric(age)) {
      throw new Error("Age is not valid");
    }

    const exists = await User.findOne({ email });

    if (exists) {
      throw new Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      age,
      gender,
      password: hash,
    });

    const token = `Bearer ${createToken(user._id)}`;

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  login,
  signUp,
};
