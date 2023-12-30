const taskService = require("../service/taskService");

class TaskController {
    async getAllTasks(req, res) {
        try {
            const tasks = await taskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            console.error("Error in getAllTasks:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async createTask(req, res) {
        const taskData = req.body;
        try {
            const newTask = await taskService.createTask(taskData);
            res.status(201).json(newTask);
        } catch (error) {
            console.error("Error in createTask:", error.message);
            res.status(400).json({ error: "Bad Request" });
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
            console.error("Error in updateTask:", error.message);
            res.status(400).json({ error: "Bad Request" });
        }
    }

    async deleteTask(req, res) {
        const taskId = req.params.id;
        try {
            const deletedTask = await taskService.deleteTask(taskId);
            res.json(deletedTask);
        } catch (error) {
            console.error("Error in deleteTask:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async completeTask(req, res) {
        const taskId = req.params.id;
        try {
            const completedTask = await taskService.completeTask(taskId);
            res.json(completedTask);
        } catch (error) {
            console.error("Error in completeTask:", error.message);
            res.status(400).json({ error: "Bad Request" });
        }
    }

    async cancelTask(req, res) {
        const taskId = req.params.id;
        try {
            const canceledTask = await taskService.cancelTask(taskId);
            res.json(canceledTask);
        } catch (error) {
            console.error("Error in cancelTask:", error.message);
            res.status(400).json({ error: "Bad Request" });
        }
    }
}

module.exports = new TaskController();
