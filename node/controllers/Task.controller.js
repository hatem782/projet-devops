const TaskModel = require("../models/Task.module");
const logger = require("../configs/Logger");

module.exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    logger.info("user retrieved all tasks");
    return res.status(200).json({
      data: tasks,
      success: true,
      message: "Successfully retrieved all tasks.",
    });
  } catch (err) {
    logger.error(
      "user failed to retrieve all tasks , error :" + json.stringify(err)
    );
    res.status(500).json(err);
  }
};

module.exports.createTask = async (req, res) => {
  try {
    const { title, color } = req.body;
    if (!title || !color) {
      logger.error("user failed to create a task , error : missing fields");
      return res.status(400).json({
        success: false,
        message: "Please provide a title and color.",
      });
    }
    const task = await TaskModel.create({ title, color, completed: false });
    logger.info("user created a task");
    return res.status(201).json({
      data: task,
      success: true,
      message: "Successfully created a task.",
    });
  } catch (err) {
    logger.error(
      "user failed to create a task , error :" + json.stringify(err)
    );
    res.status(500).json(err);
  }
};

module.exports.updateTask = async (req, res) => {
  try {
    const { title, color } = req.body;
    let id = req.params.id;
    if (!id) {
      logger.error("user failed to update a task , error : missing id");
      return res.status(400).json({
        success: false,
        message: "Please provide an id.",
      });
    }
    if (!title || !color) {
      logger.error("user failed to update a task , error : missing fields");
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
      logger.error("user failed to update a task , error : cannot update task");
      return res.status(500).json({
        success: false,
        message: "cannot update task",
      });
    }
    logger.info("user updated a task");
    return res.status(200).json({
      data: updated_task,
      success: true,
      message: "Successfully updated task.",
    });
  } catch (err) {
    logger.error(
      "user failed to update a task , error :" + json.stringify(err)
    );
    res.status(500).json(err);
  }
};

module.exports.doneUndoneTask = async (req, res) => {
  try {
    let id = req.params.id;
    if (!id) {
      logger.error("user failed to update a task , error : missing id");
      return res.status(400).json({
        success: false,
        message: "Please provide an id.",
      });
    }
    const task = await TaskModel.findOne({ _id: id });
    if (!task) {
      logger.error("user failed to update a task , error : cannot find task");
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
      logger.error("user failed to update a task , error : cannot update task");
      return res.status(500).json({
        success: false,
        message: "cannot update task",
      });
    }
    logger.info("user updated a task");
    return res.status(200).json({
      data: updated_task,
      success: true,
      message: "Successfully updated task.",
    });
  } catch (err) {
    logger.error(
      "user failed to update a task , error :" + json.stringify(err)
    );
    res.status(500).json(err);
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      logger.error("user failed to delete a task , error : missing id");
      return res.status(400).json({
        success: false,
        message: "Please provide an id.",
      });
    }
    const deleted_task = await TaskModel.findByIdAndDelete(id);
    if (!deleted_task) {
      logger.error("user failed to delete a task , error : cannot delete task");
      return res.status(500).json({
        success: false,
        message: "cannot delete task",
      });
    }
    logger.info("user deleted a task");
    return res.status(200).json({
      data: deleted_task,
      success: true,
      message: "Successfully deleted task.",
    });
  } catch (err) {
    logger.error(
      "user failed to delete a task , error :" + json.stringify(err)
    );
    res.status(500).json(err);
  }
};
