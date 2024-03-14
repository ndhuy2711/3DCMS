import { API } from "../../../Axios";

export const fetchEditPresetAPI = ({ id, data, jwt }) => {
  const {
    assets,
    business,
    businessId,
    positions,
    preset,
    presetPosition,
    presetRotation,
    rotations,
    scales,
  } = data;
  API.put(
    `presets/${id}`,
    {
      data: {
        assets,
        business,
        businessId,
        positions,
        preset,
        presetPosition,
        presetRotation,
        rotations,
        scales,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};
