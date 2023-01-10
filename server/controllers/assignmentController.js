const assignmentModel = require("../models/assignmentModel");

const getAllAssignments = async (req, res) => {
  try {
    const assignments = await assignmentModel.find({});
    res.status(200).json(assignments);
  } catch (err) {
    console.log("Error");
    res.status(400).json(err.message);
  }
};

module.exports = { getAllAssignments };
