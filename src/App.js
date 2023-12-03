import "./App.scss";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
