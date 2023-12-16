import {
  MdDeleteOutline,
  MdOutlineModeEdit,
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

import { color_done } from "../data";

import "./task.css";

function Task({ task, Edit, DoneUndone, DeleteTask }) {
  let done = task.completed;
  let color = done ? color_done : task.color;

  const StartEdir = () => {
    Edit(task);
  };

  const DoneUndone_click = () => {
    DoneUndone(task);
  };

  const Delete_click = () => {
    DeleteTask(task);
  };

  return (
    <h1 className="task" style={{ backgroundColor: color }}>
      <div className="title_container">
        {task.completed ? (
          <MdOutlineCheckBox className="checkbox" onClick={DoneUndone_click} />
        ) : (
          <MdOutlineCheckBoxOutlineBlank
            className="checkbox"
            onClick={DoneUndone_click}
          />
        )}

        <span className={done ? "line-through" : ""}>{task.title}</span>
      </div>
      <div className="icons">
        <MdOutlineModeEdit className="edit icon" onClick={StartEdir} />
        <MdDeleteOutline className="delete icon" onClick={Delete_click} />
      </div>
    </h1>
  );
}

export default Task;
