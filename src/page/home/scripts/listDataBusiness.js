export const listDataBusiness = ({ data }) => {
  let dataListBusiness = [];
  data.data.forEach((element) => {
    return (dataListBusiness = [
      ...dataListBusiness,
      {
        key: element.id,
        name: {
          businessId: element.attributes.businessId,
          name: element.attributes.Name,
          image: element.attributes.avatar.data.attributes.url,
        },
        idBusiness: element.attributes.businessId,
        person: {
          name: element.attributes.Manager,
          image: element.attributes.ManagerImage,
        },
        preset: element,
      },
    ]);
  });
  return dataListBusiness;
};
