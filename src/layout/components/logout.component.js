import Cookies from "js-cookie";
import { COOKIE, LOCAL_STORAGE } from "../";

export function logout() {
  Cookies.remove(COOKIE);
  localStorage.removeItem(LOCAL_STORAGE);
  window.location.reload();
}
