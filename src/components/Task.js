import React from "react";
import "./Task.css";

const Task = (props) => {
  return (
    <div className="task">
      <img
        className="task-icon bin-icon"
        src="icons/Bin.svg"
        alt=""
        onClick={() => props.deleteTask(props.id)}
      />
      <img
        className="task-icon checkBox-icon"
        src={
          props.completed ? "icons/Checkbox_On.svg" : "icons/Checkbox_Off.svg"
        }
        alt=""
        onClick={() => props.completeTask(props.id)}
      />
      <p className={props.completed ? "label-barrato" : "label"}>
        {props.taskName}
      </p>
    </div>
  );
};

export default Task;
