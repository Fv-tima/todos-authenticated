import React from "react";

import { useAuth } from "../context/AuthContext";

export default function Todos() {
  const {
    delTodos,
    setTodosList,
    editTodos,
    setNewInfo,
    newInfo,
    currentUser,
    todosList
  } = useAuth();

  function complete(id) {
    setTodosList(
      todosList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }





  return (
    <div>
      <ul className="todos">
        {todosList.map((todo) => (
          <li
            className={`todos-list ${todo.completed ? "complete" : ""}`}
            key={todo.id}
            onDoubleClick={() => complete(todo.id)}
          >
            <input type="text" value={todo.info} />
            <img src="./download (1).png" onClick={() => delTodos(todo.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
