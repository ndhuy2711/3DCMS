import { API } from "../../../Axios";

export const fetchLoginAPI = async ({ email, password }) => {
  return await API.post("auth/local", {
    identifier: email,
    password: password,
  });
};
