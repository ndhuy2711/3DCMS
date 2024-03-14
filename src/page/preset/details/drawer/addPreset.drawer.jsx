import React, { useEffect, useState } from "react";
import { Button, Drawer, Form, Input, Select, message } from "antd";
import { useAddPreset } from ".";
import { getCookies } from "../../../../Cache";
export const AddPreset = ({
  dataGetBusiness,
  preset,
  openDrawerAddPreset,
  setOpenDrawerAddPreset,
}) => {
  const [form] = Form.useForm();
  const { mutate, isSuccess, isError } = useAddPreset();
  const { jwt } = getCookies();
  const handleAddPreset = (data) => {
    !isSuccess && setFormDisabled(true);
    mutate({ data, jwt });
  };

  const [formDisabled, setFormDisabled] = useState(false);
  useEffect(() => {
    isSuccess &&
      setTimeout(() => {
        setOpenDrawerAddPreset(false);
        setFormDisabled(false);
        message.success(`Created preset successfully`);
      }, 500);
    isError && message.error(`Creating a new preset failed!`);
  }, [isSuccess]);
  return (
    <div>
      <Drawer
        title="Create New Preset"
        placement="right"
        closable={false}
        width="50%"
        onClose={() => {
          setOpenDrawerAddPreset(false);
        }}
        open={openDrawerAddPreset}
      >
        <Form
          id="projectForm"
          layout="vertical"
          form={form}
          disabled={formDisabled}
          initialValues={{
            business: dataGetBusiness.data.data[0].id,
            assets: null,
            positions: null,
            rotations: null,
            scales: null,
            presetRotation: null,
            presetPosition: null,
            businessId:
            dataGetBusiness.data.data[0].attributes
                .businessId,
          }}
          onFinish={handleAddPreset}
        >
          {/* name preset */}
          <Form.Item
            label="Name Of Preset"
            name="preset"
            rules={[
              {
                required: true,
                message: "Please input name of preset!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* business  */}
          <Form.Item label="Id Business" name="business" className="hidden">
            <Input />
          </Form.Item>
          {/* assets  */}
          <Form.Item label="Assets" name="assets" className="hidden">
            <Select
              mode="multiple"
              style={{
                width: "100%",
              }}
              placeholder="Select one or more assets"
            />
          </Form.Item>
          {/* positions  */}
          <Form.Item label="Position" name="positions" className="hidden">
            <Input />
          </Form.Item>
          {/* rotations  */}
          <Form.Item label="Rotations" name="rotations" className="hidden">
            <Input />
          </Form.Item>
          {/* scales  */}
          <Form.Item label="Scales" name="scales" className="hidden">
            <Input />
          </Form.Item>
          {/* presetRotation  */}
          <Form.Item
            label="Preset rotation"
            name="presetRotation"
            className="hidden"
          >
            <Input />
          </Form.Item>
          {/* presetPosition  */}
          <Form.Item
            label="Preset position"
            name="presetPosition"
            className="hidden"
          >
            <Input />
          </Form.Item>
          {/* businessId  */}
          <Form.Item label="Business id" name="businessId" className="hidden">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#1677ff]"
              // loading={isLoading}
            >
              Submit
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#00000046]"
              onClick={() => {
                setOpenDrawerAddPreset(false);
              }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};
