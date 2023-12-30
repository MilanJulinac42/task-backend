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
}

module.exports = new TaskService();
