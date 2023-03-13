import React from "react";

import { useAuth } from "../context/AuthContext";

export default function Todos({ todosList }) {
  const {
    delTodos,
    setTodosList,
    editTodos,
    setNewInfo,
    newInfo,
    currentUser,
  } = useAuth();

  function complete(id) {
    setTodosList(
      filter.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const handleChange = (e) => {
    e.preventDefault();
    filter.map((todo) => {
      if (todo.complete === true) {
        setNewInfo(todo.info);
      } else {
        todo.info = "" ? newInfo : todo.info;
      }
    });
  };

  const filter = todosList.filter((todo) => todo.userId === currentUser?.uid);

  return (
    <div>
      <ul className="todos">
        {filter.map((todo) => (
          <li
            className={`todos-list ${todo.completed ? "complete" : ""}`}
            key={todo.id}
            onDoubleClick={() => complete(todo.id)}
          >
            <input type="text" value={todo.info === "" ? newInfo : todo.info} />
            <img src="./images.png"
            onClick={handleChange}/>
            <img src="./download (1).png" onClick={() => delTodos(todo.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
