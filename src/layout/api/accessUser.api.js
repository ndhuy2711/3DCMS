import { API } from "../../Axios";

export const fetchAccessUserAPI = async ({ id, jwt }) => {
  return await API.get(`/users/${id}?populate=*`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

