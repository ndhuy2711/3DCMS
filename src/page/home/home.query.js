import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCookies } from "../../Cache";
import { fetchAccessUserAPI } from "../../layout/api";
export const useUser = () => {
  const { id, jwt } = getCookies();
  const { isLoading, isSuccess, isError, data } = useQuery({
    queryKey: ["getUser"],
    queryFn: useCallback(() => fetchAccessUserAPI({ id, jwt }), [id, jwt]),
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
