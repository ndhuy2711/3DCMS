import { API } from "../../../Axios";

export const fetchAddPresetAPI = ({ data, jwt }) => {
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
  API.post(
    `presets`,
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
