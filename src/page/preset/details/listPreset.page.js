import React, { memo, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton, Descriptions, Button, Col, Row, Image, Table } from "antd";
import avatar from "../../../assets/images/utils/avatar.jpg";
import { presetConstants } from "../";
import { CodepenOutlined } from "@ant-design/icons";
import {
  useGetPreset,
  useGetBusiness,
  columns,
  listDataPreset,
  AddPreset,
} from ".";

export const ListPreset = memo(() => {
  const { id } = useParams();
  const { isLoading, isSuccess, isError, data } = useGetPreset(id);
  const {
    isLoadingGetBusiness,
    isSuccessGetBusiness,
    isErrorGetBusiness,
    dataGetBusiness,
  } = useGetBusiness(id);
  const preset = data;
  // Xử lí phân trang
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });
  // Xử lí phân trang (thay đổi table )
  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
  };
  const [openDrawerAddPreset, setOpenDrawerAddPreset] = useState(false);
  return (
    <div>
      {isLoading && isLoadingGetBusiness && <Skeleton active />}
      {isError && <div>Error </div>}
      {isErrorGetBusiness && <div>isErrorGetBusiness </div>}
      {isSuccess && isSuccessGetBusiness && (
        <div>
          <div>
            <Row>
              <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <div>
                  <Image
                    width={100}
                    className="rounded-full"
                    alt="avatar"
                    src={
                      `${presetConstants.URL_STRAPI}/${dataGetBusiness.data.data[0].attributes.avatar.data.attributes?.url}` ||
                      avatar
                    }
                  />
                </div>
              </Col>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <div>
                  <Descriptions
                    items={[
                      {
                        key: "1",
                        label: "Business id",
                        children:
                          dataGetBusiness.data.data[0].attributes.businessId,
                      },
                      {
                        key: "2",
                        label: "Name of business",
                        children: dataGetBusiness.data.data[0].attributes.Name,
                      },

                      {
                        key: "3",
                        label: "Number of preset",
                        children:
                          dataGetBusiness.data.data[0].attributes.presets.data
                            .length,
                      },
                    ]}
                  />
                </div>
              </Col>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <div>
                  <Button
                    type="primary"
                    icon={<CodepenOutlined />}
                    className="bg-[#1677ff]"
                    onClick={() => {
                      setOpenDrawerAddPreset(true);
                    }}
                  >
                    Add new preset
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Table
              columns={columns}
              dataSource={listDataPreset(preset)}
              bordered
              scroll={{
                x: 1300,
              }}
              pagination={tableParams.pagination} //Xử lí phân trang
              onChange={handleTableChange} //Xử lí phân trang
            />
          </div>
        </div>
      )}
      {openDrawerAddPreset && (
        <AddPreset
          openDrawerAddPreset={openDrawerAddPreset}
          setOpenDrawerAddPreset={setOpenDrawerAddPreset}
          preset={preset}
          dataGetBusiness={dataGetBusiness}
        />
      )}
    </div>
  );
});
