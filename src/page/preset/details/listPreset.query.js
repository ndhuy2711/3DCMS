import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCookies } from "../../../Cache";
import { fetchGetPresetAPI } from "../api";
export const useGetPreset = (businessId) => {
  const { jwt } = getCookies();
  const { isLoading, isSuccess, isError, data } = useQuery({
    queryKey: ["getPreset"],
    queryFn: useCallback(
      () => fetchGetPresetAPI({ businessId, jwt }),
      [businessId, jwt]
    ),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    isSuccess,
    isError,
    data,
  };
};
