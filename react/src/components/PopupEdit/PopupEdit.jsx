import React, { useEffect, useState } from "react";
import "./popup.css";
import { Colors } from "../ToDo";

function PopupEdit({ handle_close, task_up, UpdateTask }) {
  const [task, setTask] = useState("");
  const [currentColor, setCurCol] = useState("#593bab");

  function textChanged(event) {
    setTask(event.target.value);
  }

  useEffect(() => {
    setTask(task_up.title);
    setCurCol(task_up.color);
  }, [task_up]);

  function Update() {
    UpdateTask({ ...task_up, title: task, color: currentColor }, handle_close);
  }

  return (
    <div className="popup">
      <div className="popup-body">
        <h2>You are edtiting the task : "{task_up.title}"</h2>
        <br />
        <Colors currentColor={currentColor} setCurCol={setCurCol} />
        <div className="form">
          <input
            onChange={textChanged}
            value={task}
            style={{ borderColor: currentColor }}
          />
          <br />
          <div className="buttons">
            <button
              className="cancel"
              onClick={handle_close}
              style={{
                borderColor: currentColor,
                color: currentColor,
              }}
            >
              Cancel
            </button>

            <button
              onClick={Update}
              style={{
                backgroundColor: currentColor,
                borderColor: currentColor,
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupEdit;
