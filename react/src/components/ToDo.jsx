import { useState } from "react";
import Task from "./Task/Task";
import { data, colors } from "./data";
import PopupEdit from "./PopupEdit/PopupEdit";
import useTasks from "../hooks/useTasks";

function ToDo() {
  const [task, setTask] = useState("");
  const { tasks, AddTask, DoneUndone, UpdateTask, DeleteTask } = useTasks();
  const [currentColor, setCurCol] = useState("#593bab");
  const [update_task_Popup, set_update_task_Popup] = useState(null);

  function textChanged(event) {
    setTask(event.target.value);
  }

  function Add() {
    let new_task = {
      title: task,
      color: currentColor,
    };
    AddTask(new_task);
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
              DoneUndone={DoneUndone}
              DeleteTask={DeleteTask}
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
