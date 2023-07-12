import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Builder from "../pages/Builder";
import Guide from "../pages/Guide";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "montagem", element: <Builder /> },
      { path: "guia", element: <Guide /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ]
  }
]);
export default router;