import { useContext } from "react";
import { AppContext } from "../Context";
import { HandleRoute, NavigateLogin } from "./";

export const ProtectedRoutes = () => {
  const { isLogin } = useContext(AppContext);
  return isLogin ? <HandleRoute /> : <NavigateLogin />;
};
