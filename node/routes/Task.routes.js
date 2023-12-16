const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/Task.controller");

router.get("/get-all-tasks", TaskController.getAllTasks);
router.post("/create", TaskController.createTask);
router.put("/update/:id", TaskController.updateTask);
router.put("/done-undone-task/:id", TaskController.doneUndoneTask);
router.delete("/delete/:id", TaskController.deleteTask);

module.exports = router;
