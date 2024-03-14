import { Button, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ButtonPreset } from "../";
export const columns = [
  {
    title: "Name of business",
    dataIndex: "name",
    key: "name",
    fixed: "left",
    width: 250,
    align: "center",
    render: (text) => (
      <Button type="text">
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar size="large" src={text.image} icon={<UserOutlined />} />
            {text.name}
          </Space>
        </Space>
      </Button>
    ),
  },
  {
    title: "Client ID number",
    dataIndex: "idBusiness",
    key: "idBusiness",
    align: "center",
  },
  {
    title: "Person in charge",
    dataIndex: "person",
    key: "person",
    align: "center",
    width: 250,
    render: (text) => {
      return (
        <Button type="text">
          <Space direction="vertical" size={16}>
            <Space wrap size={16}>
              <Avatar size="large" src={text.image} icon={<UserOutlined />} />
              {text.name}
            </Space>
          </Space>
        </Button>
      );
    },
  },
  {
    title: "Preset",
    dataIndex: "preset",
    key: "preset",
    align: "center",
    render: (text) => {
      return <ButtonPreset text={text} />;
    },
  },
];
