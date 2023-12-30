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

    async updateTask(req, res) {
        const taskId = req.params.id;
        const updatedTaskData = req.body;
        try {
            const updatedTask = await taskService.updateTask(
                taskId,
                updatedTaskData
            );
            res.json(updatedTask);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteTask(req, res) {
        const taskId = req.params.id;
        try {
            const deletedTask = await taskService.deleteTask(taskId);
            res.json(deletedTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async completeTask(req, res) {
        const taskId = req.params.id;
        try {
            const completedTask = await taskService.completeTask(taskId);
            res.json(completedTask);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async cancelTask(req, res) {
        const taskId = req.params.id;
        try {
            const canceledTask = await taskService.cancelTask(taskId);
            res.json(canceledTask);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new TaskController();
