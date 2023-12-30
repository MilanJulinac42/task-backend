const Task = require("../models/Task");

class TaskService {
    async getAllTasks() {
        try {
            const tasks = await Task.find();
            return tasks;
        } catch (error) {
            console.error("Error fetching tasks:", error.message);
            throw new Error("Error fetching tasks");
        }
    }

    async createTask(taskData) {
        try {
            const task = new Task(taskData);
            const newTask = await task.save();
            return newTask;
        } catch (error) {
            console.error("Error creating task:", error.message);
            throw new Error("Error creating task");
        }
    }

    async updateTask(taskId, updatedTaskData) {
        try {
            const updatedTask = await Task.findByIdAndUpdate(
                taskId,
                updatedTaskData,
                { new: true }
            );
            if (!updatedTask) {
                throw new Error("Task not found");
            }
            return updatedTask;
        } catch (error) {
            console.error("Error updating task:", error.message);
            throw new Error("Error updating task");
        }
    }

    async deleteTask(taskId) {
        try {
            const deletedTask = await Task.findByIdAndDelete(taskId);
            if (!deletedTask) {
                throw new Error("Task not found");
            }
            return deletedTask;
        } catch (error) {
            console.error("Error deleting task:", error.message);
            throw new Error("Error deleting task");
        }
    }

    async completeTask(taskId) {
        try {
            const updatedTask = await Task.findByIdAndUpdate(
                taskId,
                { status: "completed" },
                { new: true }
            );
            if (!updatedTask) {
                throw new Error("Task not found");
            }
            return updatedTask;
        } catch (error) {
            console.error("Error completing task:", error.message);
            throw new Error("Error completing task");
        }
    }

    async cancelTask(taskId) {
        try {
            const updatedTask = await Task.findByIdAndUpdate(
                taskId,
                { status: "canceled" },
                { new: true }
            );
            if (!updatedTask) {
                throw new Error("Task not found");
            }
            return updatedTask;
        } catch (error) {
            console.error("Error canceling task:", error.message);
            throw new Error("Error canceling task");
        }
    }
}

module.exports = new TaskService();
