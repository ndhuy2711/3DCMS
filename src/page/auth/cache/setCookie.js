import Cookies from "js-cookie";
import { COOKIE } from "./";
export const setCoookie = ({data}) => {
  return Cookies.set(COOKIE, data.jwt, {
    expires: 30,
  });
};
