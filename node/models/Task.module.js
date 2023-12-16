const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    title: String,
    completed: {
      type: Boolean,
      default: false,
    },
    color: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", TaskSchema);
