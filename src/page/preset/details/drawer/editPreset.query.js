import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchEditPresetAPI } from "../../";

export const useEditPreset = () => {
  const queryClient = useQueryClient();
  const { mutate, isSuccess, isError } = useMutation({
    mutationKey: "editPreset",
    mutationFn: fetchEditPresetAPI,
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
  };
};
