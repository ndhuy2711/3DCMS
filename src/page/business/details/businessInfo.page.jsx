import React, { useState, useEffect, useCallback } from "react";
import { Skeleton, Button, Col, Row, Table } from "antd";
import { useGetBussiness } from "../../home";
import { useParams } from "react-router-dom";

export const BusinessInfomation = () => {
  const { id } = useParams();
  const {
    isLoading: isLoadingGetBusiness,
    isSuccess: isSuccessGetBusiness,
    isError: isErrorGetBusiness,
    data: dataGetBusiness,
    refetch: refetchGetBusiness,
  } = useGetBussiness(id);

  useEffect(() => {
    refetchGetBusiness();
  }, []);

  return (
    <div>
      {isLoadingGetBusiness && <Skeleton active />}
      {isErrorGetBusiness && <div>isErrorGetBusiness </div>}
      {
        isSuccessGetBusiness && (
            <div>abc</div>
        )
      }
    </div>
  );
};
