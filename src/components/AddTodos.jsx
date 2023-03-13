import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate} from "react-router-dom";

import { useState } from "react";
import { addDoc} from "firebase/firestore";
export default function AddTodos() {
  const { todosCollectionRef, getTodosList, currentUser } = useAuth();
  const [newTodos, setNewTodos] = useState("");
  const [newCompleted, setNewCompleted] = useState(false);
  const navigate = useNavigate();

  const onSubmitTodos = async (e) => {
    e.preventDefault();
    try {
      await addDoc(todosCollectionRef, {
        info: newTodos,
        completed: newCompleted,
        userId: currentUser?.uid
      });
      getTodosList();
      navigate("/account")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="close">
        <button>
          <Link to="/account">X</Link>
        </button>
      </div>
      <form className="addTodos" onSubmit={onSubmitTodos}>
        <h2>Add Todo</h2>

        <div>
          <label>To-do</label>
          <input
            className="check "
            type="text"
            placeholder="What needs to be done ?"
            onChange={(e) => {
              setNewTodos(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Set reminder</label>
          <input
            type="checkbox"
            checked={newCompleted}
            onChange={(e) => setNewCompleted(e.target.checked)}
          />
        </div>
        <button>Done</button>
      </form>
    </div>
  );
}
