import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

export const BreadcrumbComponent = ({ routeArr }) => {
  const { pathname } = useLocation();
  const items = [
    {
      title: <Link to="/"> Home </Link>,
    },
  ];
  return <Breadcrumb items={items} />;
};
