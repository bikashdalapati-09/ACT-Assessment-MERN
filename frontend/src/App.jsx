import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <>
      <div>
        
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
