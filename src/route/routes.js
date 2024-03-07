import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Login } from "../page/auth";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
  },
  {
    path: "/business",
    element: <div>business</div>,
    children: [{ path: "/business/product", element: <div>product</div> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
export const routerAuth = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);
