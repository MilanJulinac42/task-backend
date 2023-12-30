const taskService = require("../services/taskService");

class TaskController {
    async getAllTasks(req, res) {
        try {
            const tasks = await taskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createTask(req, res) {
        const taskData = req.body;
        try {
            const newTask = await taskService.createTask(taskData);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new TaskController();
