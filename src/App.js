import React from "react";
import { useState } from "react";

import Task from "./components/Task";
import Modal from "./components/Modal";

import "@fontsource/inter";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hashKey, setHashKey] = useState(0);

  const addTask = () => {
    const task = {
      //id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, issue with keys when deleting task
      id: todoList.length === 0 ? 1 : hashKey + 1,
      taskName: newTask,
      completed: false,
    };
    setHashKey(hashKey + 1);
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    const array = todoList;
    //index of element to move to the end of the array
    const index = array.findIndex((i) => i.id === id);

    const element = array.splice(index, 1)[0];
    element.completed = !element.completed;

    if (element.completed === true) {
      array.splice(array.length, 0, element);
    } else if (element.completed === false) {
      const i = array.findLastIndex((i) => i.completed === false);
      if (i !== -1) {
        array.splice(i + 1, 0, element);
      } else {
        array.splice(array.length, 0, element);
      }
    }

    setTodoList([...array]);

    /*
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );*/
  };

  const closeModal = () => {
    if (showModal) {
      setShowModal(false);
    }
  };

  return (
    <div className="main">
      <div className="list">
        <h1 className="title">TODO</h1>

        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              key={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>

      {showModal && (
        <React.Fragment>
          <div
            className={showModal ? "modal-background" : ""}
            onClick={closeModal}
          ></div>
          <Modal
            setShowModal={setShowModal}
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        </React.Fragment>
      )}

      <div>
        <button
          className="add-button label-medium"
          onClick={() => setShowModal(true)}
        >
          {" "}
          <img src="icons/Adds.svg" alt="" />
          Nuova voce
        </button>
      </div>
    </div>
  );
};

export default App;
