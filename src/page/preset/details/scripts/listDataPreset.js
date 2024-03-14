export const listDataPreset = ({ data }) => {
  let dataListPreset = [];
  data.data.forEach((element) => {
    return (dataListPreset = [
      ...dataListPreset,
      {
        key: element.id,
        name: element.attributes.preset,
        asset: {
          data: element.attributes,
        },
        action: {
          data: element,
        },
      },
    ]);
  });
  return dataListPreset;
};
