import React from "react";
import "./Modal.css";
import "@fontsource/inter";

const Modal = (props) => {
  const onTermSubmit = (e) => {
    if (props.newTask !== "") {
      props.addTask();
      props.setShowModal(false);
      props.setNewTask("");
    }
  };

  return (
    <div className="modal">
      <textarea
        className="txt-area"
        placeholder="Inserisci voce"
        value={props.newTask}
        onChange={(e) => {
          props.setNewTask(e.target.value);
        }}
        cols="30"
        rows="10"
      ></textarea>
      <button className="save-button label-medium" onClick={onTermSubmit}>
        Salva
      </button>
    </div>
  );
};

export default Modal;
