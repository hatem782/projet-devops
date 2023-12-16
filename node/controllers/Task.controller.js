const TaskModel = require("../models/Task.module");

module.exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    return res.status(200).json({
      data: tasks,
      success: true,
      message: "Successfully retrieved all tasks.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.createTask = async (req, res) => {
  try {
    const { title, color } = req.body;
    if (!title || !color) {
      return res.status(400).json({
        success: false,
        message: "Please provide a title and color.",
      });
    }
    const task = await TaskModel.create({ title, color, completed: false });
    return res.status(201).json({
      data: task,
      success: true,
      message: "Successfully created a task.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateTask = async (req, res) => {
  try {
    const { title, color } = req.body;
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide an id.",
      });
    }
    if (!title || !color) {
      return res.status(400).json({
        success: false,
        message: "Please provide a title and color.",
      });
    }

    const updated_task = await TaskModel.findByIdAndUpdate(
      id,
      { title, color },
      { new: true }
    );

    if (!updated_task) {
      return res.status(500).json({
        success: false,
        message: "cannot update task",
      });
    }

    return res.status(200).json({
      data: updated_task,
      success: true,
      message: "Successfully updated task.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.doneUndoneTask = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide an id.",
      });
    }
    const task = await TaskModel.findOne({ _id: id });
    if (!task) {
      return res.status(500).json({
        success: false,
        message: "cannot find task",
      });
    }
    let new_completed = !task.completed;

    const updated_task = await TaskModel.findByIdAndUpdate(
      id,
      { completed: new_completed },
      { new: true }
    );

    if (!updated_task) {
      return res.status(500).json({
        success: false,
        message: "cannot update task",
      });
    }

    return res.status(200).json({
      data: updated_task,
      success: true,
      message: "Successfully updated task.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide an id.",
      });
    }
    const deleted_task = await TaskModel.findByIdAndDelete(id);
    if (!deleted_task) {
      return res.status(500).json({
        success: false,
        message: "cannot delete task",
      });
    }
    return res.status(200).json({
      data: deleted_task,
      success: true,
      message: "Successfully deleted task.",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
