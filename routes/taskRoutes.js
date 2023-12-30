const express = require("express");
const taskController = require("../contollers/taskController");

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.patch("/:id/complete", taskController.completeTask);
router.patch("/:id/cancel", taskController.cancelTask);

module.exports = router;
