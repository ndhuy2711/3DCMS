import { LOCAL_STORAGE } from "./";

export const setLocalStorage = ({data}) => {
  //Lưu thông tin user vào localStorage
  const saveInfoUser = {
    id: data.user.id,
    businessId: data.user.businessId,
    email: data.user.email,
    username: data.user.username,
  };
  return localStorage.setItem(LOCAL_STORAGE, JSON.stringify(saveInfoUser));
};
