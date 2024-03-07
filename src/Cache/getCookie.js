import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { COOKIE } from "./";
export const setCookies = () => {
  const getJWTCookies = Cookies.get(COOKIE);
  if (getJWTCookies) {
    const decodedJWT = jwtDecode(getJWTCookies);
    const getIdUserJWT = decodedJWT?.id || null;
    return { id: getIdUserJWT, jwt: getJWTCookies };
  } else {
    return null;
  }
};
