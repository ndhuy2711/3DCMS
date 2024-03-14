import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCookies } from "../../../Cache";
import { fetchGetBusinessAPI } from "../api";
export const useGetBusiness = (businessId) => {
  const { jwt } = getCookies();
  const {
    isLoading: isLoadingGetBusiness,
    isSuccess: isSuccessGetBusiness,
    isError: isErrorGetBusiness,
    data: dataGetBusiness,
  } = useQuery({
    queryKey: ["getBusiness"],
    queryFn: useCallback(
      () => fetchGetBusinessAPI({ businessId, jwt }),
      [businessId, jwt]
    ),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return {
    isLoadingGetBusiness,
    isSuccessGetBusiness,
    isErrorGetBusiness,
    dataGetBusiness,
  };
};
