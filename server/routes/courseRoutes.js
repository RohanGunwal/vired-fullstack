const router = require("express").Router();
const courseController = require("../controllers/courseController");
const assignmentController = require("../controllers/assignmentController");

router.get("/", courseController.getCourses);
router.get("/assignments", assignmentController.getAllAssignments);

module.exports = router;
