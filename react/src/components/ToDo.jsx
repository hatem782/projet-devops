import { useEffect, useState } from "react";
import Task from "./Task/Task";
import { colors } from "./data";
import PopupEdit from "./PopupEdit/PopupEdit";
import { useSelector, useDispatch } from "react-redux";
import {
  CreateTask,
  DoneUndoneTask,
  GetAllTasks,
  UpdateTask,
  deleteTask,
} from "../redux/Tasks.reducer";

function ToDo() {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.TasksReducers.tasks);
  const [currentColor, setCurCol] = useState("#593bab");
  const [update_task_Popup, set_update_task_Popup] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllTasks());
  }, []);

  function textChanged(event) {
    setTask(event.target.value);
  }

  function Add() {
    let new_task = {
      title: task,
      color: currentColor,
    };
    dispatch(CreateTask(new_task));
    setTask("");
  }

  //#################### POPUP  EDIT ####################

  const Edit = (task) => {
    set_update_task_Popup(task);
  };

  const close = () => {
    set_update_task_Popup(null);
  };

  return (
    <div className="todo">
      <h1 className="version">
        Todo App Version : {process.env.REACT_APP_VERSION}
      </h1>
      <Colors currentColor={currentColor} setCurCol={setCurCol} />
      {update_task_Popup && (
        <PopupEdit
          task_up={update_task_Popup}
          handle_close={close}
          UpdateTask={UpdateTask}
        />
      )}
      <div className="form">
        <input
          onChange={textChanged}
          value={task}
          style={{ borderColor: currentColor }}
          role="textbox"
        />
        <button
          onClick={Add}
          style={{ backgroundColor: currentColor, borderColor: currentColor }}
        >
          Add
        </button>
      </div>

      <div className="taskes">
        {tasks.map((task) => {
          return (
            <Task
              key={task._id}
              task={task}
              Edit={Edit}
              DoneUndone={DoneUndoneTask}
              DeleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export const Colors = ({ setCurCol, currentColor }) => {
  return (
    <div className="colors" data-testid="todo-1">
      {colors.map((color, indice) => {
        return (
          <span
            key={indice}
            onClick={() => {
              setCurCol(color);
              console.log(color);
            }}
            className={`color ${currentColor === color ? "current" : false}`}
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
};

export default ToDo;
