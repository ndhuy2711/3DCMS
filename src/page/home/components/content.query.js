import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCookies } from "../../../Cache";
import { fetchGetBussinessAPI } from "../api";
export const useGetBussiness = (businessId) => {
  const { jwt } = getCookies();
  const { isLoading, isSuccess, isError, data } = useQuery({
    queryKey: ["getBusiness"],
    queryFn: useCallback(
      () => fetchGetBussinessAPI({ businessId, jwt }),
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
