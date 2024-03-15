import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Login } from "../page/auth";
import { Home } from "../page/home";
import { LayoutAdmin } from "../layout";
import { BusinessInfomation } from "../page/business";
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
        element: (
          <LayoutAdmin>
            <div>List business to handle fc with business</div>
          </LayoutAdmin>
        ),
      },
      {
        key: "business",
        path: ":id",
        element: (
          <LayoutAdmin>
            <BusinessInfomation />
          </LayoutAdmin>
        ),
      },
      {
        key: "product",
        path: "product",
        name: "Product",
        icon: <ProductOutlined />,
        element: (
          <LayoutAdmin>
            <div>List business to handle fc with product</div>
          </LayoutAdmin>
        ),
      },
      {
        key: "preset",
        path: "preset",
        name: "Preset",
        icon: <ApartmentOutlined />,
        element: (
          <LayoutAdmin>
            <div>List business to show preset</div>
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
