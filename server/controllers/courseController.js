const courseModel = require("../models/courseModel");

const getCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({});
    res.status(200).json(courses);
  } catch (err) {
    res.status(401).json(err.message);
  }
};

module.exports = {
  getCourses,
};
