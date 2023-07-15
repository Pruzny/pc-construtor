import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Builder from "../pages/Builder";
import Guide from "../pages/Guide";
import Register from "../pages/Register";
import ErrorPage from "../pages/Error";
import Catalog from "../pages/Catalog";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "montagem/:tipo", element: <Builder /> },
      { path: "guia", element: <Guide /> },
      { path: "login", element: <Login /> },
      { path: "registrar", element: <Register /> },
      { path: "catalogo", element: <Catalog />},
      { path: "perfil", element: <Profile />},
    ]
  }
]);
export default router;