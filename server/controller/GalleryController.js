const { Task } = require("../model/TaskModel");
const { missingReqBody } = require("../utils/MissingBody");

const getAllImages = async (req, res) => {
    try {
        const allTasks = await Task.find().select("task_id task completed");
        return res.status(200).json(allTasks);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};
const addTask = async (req, res) => {
    try {
        const { task_id, task, completed } = req.body.currentTodo;
        console.log(req.body);
        const requiredFields = ["task_id", "task", "completed"];
        missingReqBody(requiredFields, req.body.currentTodo, res);
        const Newtask = {
            task_id,
            task,
            completed,
        };
        const NewTaskResponse = await Task.create(Newtask);
        console.log(NewTaskResponse);
        return res.status(200).json({ message: "successfully added task" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllImages,
    uploadImage,
};