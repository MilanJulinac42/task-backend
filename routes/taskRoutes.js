const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.patch("/:id/complete", taskController.completeTask);

module.exports = router;
