const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
