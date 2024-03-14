import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAddPresetAPI } from "../../";

export const useAddPreset = () => {
  const queryClient = useQueryClient();
  const { mutate, isSuccess, isError, data } = useMutation({
    mutationKey: "addPreset",
    mutationFn: fetchAddPresetAPI,
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["getPreset"] });
      }, 500);
      return true;
    },
    onError: () => true,
  });
  return {
    mutate,
    isSuccess,
    isError,
    data,
  };
};
