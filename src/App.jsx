import {
  createBrowserRouter ,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import TodosAcct from "./components/TodosAcct";
import AddTodos from "./components/AddTodos";
import Header from "./components/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    { path: "/account", element: <TodosAcct /> },
    { path: "/add", element: <AddTodos /> }
  ]);

  return (
    <div className="container">
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
