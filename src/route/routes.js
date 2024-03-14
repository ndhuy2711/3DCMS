import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Login } from "../page/auth";
import { Home } from "../page/home";
import { LayoutAdmin } from "../layout";
import {
  HomeOutlined,
  TeamOutlined,
  ProductOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { ListPreset } from "../page/preset";
export const Routes = [
  {
    key: "home",
    path: "/",
    element: (
      <LayoutAdmin>
        <Home />
      </LayoutAdmin>
    ),
    name: "Home",
    icon: <HomeOutlined />,
  },
  {
    path: "/business",
    children: [
      {
        key: "business",
        path: "",
        name: "Business",
        icon: <TeamOutlined />,
        element: <div>business</div>,
      },
      {
        key: "product",
        path: "product",
        name: "Product",
        icon: <ProductOutlined />,
        element: <div>product</div>,
      },
      {
        key: "preset",
        path: "preset",
        name: "Preset",
        icon: <ApartmentOutlined />,
        element: (
          <LayoutAdmin>
            <Home />
          </LayoutAdmin>
        ),
      },
      {
        key: "preset",
        path: ":id/preset",
        element: (
          <LayoutAdmin>
            <ListPreset />
          </LayoutAdmin>
        ),
      },
    ],
  },
  {
    key: 3,
    path: "/login",
    element: <Login />,
  },
  {
    key: 4,
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
export const router = createBrowserRouter(Routes);
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
