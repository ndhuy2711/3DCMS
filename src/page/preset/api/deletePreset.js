import { API } from "../../../Axios";

export const fetchDeletePresetAPI = ({ id, jwt }) => {
  API.delete(`presets/${id}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};
