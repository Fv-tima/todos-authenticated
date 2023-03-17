import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import EmptyTodos from "./EmptyTodos";
import Todos from "./Todos";

export default function TodosAcct() {
  

  const { currentUser, signout, todosList, setTodosList } = useAuth();
  const navigate = useNavigate();
  async function logOut() {
    await signout();
    navigate("/");
  }
  return (
    <div className="acct">
      <div className="todos-nav">
        <h5>{currentUser?.email}</h5>
        <button onClick={logOut}>Logout</button>
      </div>
      <div className="todosContainer">
        {todosList.length === 0 ? (
          <EmptyTodos />
        ) :(
          <Todos todosList={todosList}
            setTodosList={setTodosList} />
        ) }
      </div>
      <div className="add">
        <button>
          <Link to="/add">+ </Link>
        </button>
      </div>
    </div>
  );
}
