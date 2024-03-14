import { API } from "../../../Axios";

export const fetchGetBussinessAPI = async ({ businessId, jwt }) => {
  return await API.get(
    `businesses?populate[presets][populate]=*&populate[avatar][populate]=*&populate[azure_credential][populate]=*&filters[businessId][$eq]=${businessId}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};
