const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
const loggingMiddleware = require("./middleware/loggingMiddleware");

const app = express();
const PORT = process.env.PORT || 3002;

mongoose.connect("mongodb://localhost:27017/tasktracker", {});

app.use(express.json());
app.use(loggingMiddleware);

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Task Tracker API");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
