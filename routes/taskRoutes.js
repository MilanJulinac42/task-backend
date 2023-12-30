const express = require("express");
const { body } = require("express-validator");
const taskController = require("../contollers/taskController");
const { validate } = require("../middleware/validationMiddleware");

const router = express.Router();

router.get("/", taskController.getAllTasks);

router.post(
    "/",
    [
        body("title").notEmpty().withMessage("Title is required"),
        body("description").optional(),
        body("dueDate")
            .optional()
            .isISO8601()
            .toDate()
            .withMessage("Invalid date format"),
    ],
    validate,
    taskController.createTask
);

router.patch(
    "/:id",
    [
        body("title").optional(),
        body("description").optional(),
        body("dueDate")
            .optional()
            .isISO8601()
            .toDate()
            .withMessage("Invalid date format"),
    ],
    validate,
    taskController.updateTask
);

router.delete(
    "/:id",
    [param("id").notEmpty().withMessage("Task ID is required")],
    validate,
    taskController.deleteTask
);

router.patch(
    "/:id/complete",
    [param("id").notEmpty().withMessage("Task ID is required")],
    validate,
    taskController.completeTask
);

router.patch(
    "/:id/cancel",
    [param("id").notEmpty().withMessage("Task ID is required")],
    validate,
    taskController.cancelTask
);

module.exports = router;
