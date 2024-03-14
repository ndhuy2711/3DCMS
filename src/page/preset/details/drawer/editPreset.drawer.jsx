import React, { useEffect, useState } from "react";
import { Button, Drawer, Form, Input, Select, message } from "antd";
import { useEditPreset } from ".";
import { getCookies } from "../../../../Cache";
export const EditPreset = ({
  preset,
  openDrawerEditPreset,
  setOpenDrawerEditPreset,
}) => {
  const [form] = Form.useForm();
  const { mutate, isSuccess, isError } = useEditPreset();
  const { jwt } = getCookies();
  const handleEditPreset = (data) => {
    const { id } = preset.data;
    !isSuccess && setFormDisabled(true);
    mutate({ id, data, jwt });
  };

  const [formDisabled, setFormDisabled] = useState(false);
  useEffect(() => {
    isSuccess &&
      setTimeout(() => {
        setOpenDrawerEditPreset(false);
        setFormDisabled(false);
        message.success(`Edit preset successfully`);
      }, 500);
    isError && message.error(`Edit preset failed!`);
  }, [isSuccess]);
  return (
    <div>
      <Drawer
        title={`Edit preset ${preset.data.attributes.preset}`}
        placement="right"
        closable={false}
        width="50%"
        onClose={() => {
          setOpenDrawerEditPreset(false);
        }}
        open={openDrawerEditPreset}
      >
        <Form
          id="projectForm"
          layout="vertical"
          form={form}
          disabled={formDisabled}
          initialValues={{
            id: preset.data.id,
            preset: preset.data.attributes.preset,
            business: preset.data.attributes.business.data.id,
            assets: preset.data.attributes.assets.data,
            positions: preset.data.attributes.positions,
            rotations: preset.data.attributes.rotations,
            scales: preset.data.attributes.scales,
            presetRotation: preset.data.attributes.presetRotation,
            presetPosition: preset.data.attributes.presetPosition,
            businessId:
              preset.data.attributes.business.data.attributes.businessId,
          }}
          onFinish={handleEditPreset}
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
          {/* id  */}
          <Form.Item label="Id Preset" name="id" className="hidden">
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
            >
              Submit
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-[#00000046]"
              onClick={() => {
                setOpenDrawerEditPreset(false);
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
