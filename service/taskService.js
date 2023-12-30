const Task = require("../models/Task");

class TaskService {
    async getAllTasks() {
        try {
            const tasks = await Task.find();
            return tasks;
        } catch (error) {
            throw error;
        }
    }

    async createTask(taskData) {
        try {
            const task = new Task(taskData);
            const newTask = await task.save();
            return newTask;
        } catch (error) {
            throw error;
        }
    }

    async updateTask(taskId, updatedTaskData) {
        try {
            const updatedTask = await Task.findByIdAndUpdate(
                taskId,
                updatedTaskData,
                { new: true }
            );
            return updatedTask;
        } catch (error) {
            throw error;
        }
    }

    async deleteTask(taskId) {
        try {
            const deletedTask = await Task.findByIdAndDelete(taskId);
            return deletedTask;
        } catch (error) {
            throw error;
        }
    }

    async completeTask(taskId) {
        try {
            const updatedTask = await Task.findByIdAndUpdate(
                taskId,
                { status: "completed" },
                { new: true }
            );
            return updatedTask;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new TaskService();
