import { useMutation } from "@tanstack/react-query";
import { fetchLoginAPI } from "../api";
import { setCoookie, setLocalStorage } from "../cache";
export const useLogin = () => {
  const { mutate, isSuccess, isError } = useMutation({
    mutationKey: "login",
    mutationFn: fetchLoginAPI,
    onSuccess: (data) => {
      setCoookie(data);
      setLocalStorage(data);
      //Reload lại page
      window.location.replace("/");
      return true;
    },
    onError: () => true,
  });
  return {
    mutate,
    isSuccess,
    isError,
  };
};
