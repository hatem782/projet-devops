import React, { useEffect } from "react";
import {
  DoneUndoneTask,
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../services/services";

function useTasks() {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    GetAllTasks();
  }, []);

  const GetAllTasks = () => {
    getTasks(setTasks);
  };

  const AddTask = (task) => {
    addTask(task, GetAllTasks);
  };

  const DeleteTask = (task) => {
    deleteTask(task, GetAllTasks);
  };

  const UpdateTask = (task, callback) => {
    updateTask(task, () => {
      GetAllTasks();
      callback();
    });
  };

  const DoneUndone = (task) => {
    DoneUndoneTask(task, GetAllTasks);
  };

  return {
    tasks,
    GetAllTasks,
    AddTask,
    DeleteTask,
    UpdateTask,
    DoneUndone,
  };
}

export default useTasks;
