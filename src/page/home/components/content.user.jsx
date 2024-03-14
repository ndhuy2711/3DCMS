import React, { useState, memo } from "react";
import { useGetBussiness } from ".";
import { Skeleton, Descriptions, Button, Col, Row, Table, Image } from "antd";
import { CodepenOutlined } from "@ant-design/icons";
import { listDataBusiness } from "../scripts";
import avatar from "../../../assets/images/utils/avatar.jpg";
import { columns } from "./data";
import { GenerateCodeSnippet } from "./modals";

export const ContentUser = memo(({ user }) => {
  const businessId = user.data.businessId;
  const { isLoading, isSuccess, isError, data } = useGetBussiness(businessId);
  const business = data;
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

  const [isModalGenerateCodeSnippet, setIsModalGenerateCodeSnippet] =
    useState(false);
  return (
    <div>
      {isLoading && <Skeleton active />}
      {isError && <div>Error </div>}
      {isSuccess && (
        <div>
          <div>
            <Row>
              <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <div>
                  <Image
                    width={100}
                    className="rounded-full"
                    alt="avatar"
                    src={avatar}
                  />
                </div>
              </Col>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <div>
                  <Descriptions
                    items={[
                      {
                        key: "1",
                        label: "Username",
                        children: user.data.username,
                      },
                      {
                        key: "2",
                        label: "Email",
                        children: user.data.email,
                      },
                      {
                        key: "3",
                        label: "Role",
                        children: user.data.role.name,
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
                    onClick={() => setIsModalGenerateCodeSnippet(true)}
                  >
                    Generate code snippet
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Table
              columns={columns}
              dataSource={listDataBusiness(business)}
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
      {isModalGenerateCodeSnippet && (
        <GenerateCodeSnippet
          business={business}
          isModalGenerateCodeSnippet={isModalGenerateCodeSnippet}
          setIsModalGenerateCodeSnippet={setIsModalGenerateCodeSnippet}
        />
      )}
    </div>
  );
});
