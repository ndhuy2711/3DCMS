import { createContext } from "react";
import Cookies from "js-cookie";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const authToken = Cookies.get("dtvt");
  const isLoginFC = () => {
    if (authToken) {
      return true;
    } else {
      return false;
    }
  };
  const isLogin = isLoginFC();
  return (
    <AppContext.Provider value={{ isLogin }}>{children}</AppContext.Provider>
  );
};
