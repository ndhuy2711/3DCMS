import { API } from "../../../Axios";

export const fetchGetPresetAPI = async ({ businessId, jwt }) => {
  return await API.get(
    `presets?filters[business][businessId][$eq]=${businessId}&populate[business][populate]=*&populate[assets][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};
