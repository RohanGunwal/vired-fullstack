const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    totalMarks: { type: String, required: true },
    skillTags: { type: String, required: true },
    subTopics: [{ type: String, required: true }],
    tagLevel: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("assignments", assignmentSchema);
