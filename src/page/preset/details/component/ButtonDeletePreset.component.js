import React, { useEffect, useState } from "react";
import { Button, Popconfirm, message } from "antd";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDeletePresetAPI } from "../../api";
import { getCookies } from "../../../../Cache";

export const ButtonDeletePreset = ({ text }) => {
  const queryClient = useQueryClient();
  const { jwt } = getCookies();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const { mutate, isSuccess, isError } = useMutation({
    mutationKey: "deletePreset",
    mutationFn: fetchDeletePresetAPI,
    onSuccess: () => {
      setBtnDisabled(true);
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["getPreset"] });
      }, 500);
      return true;
    },
    onError: () => true,
  });

  const confirm = (e) => {
    const id = text.data.id;
    mutate({ id, jwt });
  };
  const cancel = (e) => {
    message.error("You cancelled action delete the preset !");
  };
  useEffect(() => {
    isSuccess &&
      setTimeout(() => {
        message.success(
          `Delete preset ${text.data.attributes.preset} successfully`
        );
      }, 500);
    isError && message.error(`Delete a new preset failed!`);
  }, [isSuccess]);
  return (
    <Popconfirm
      title={"Delete the preset " + text.data.preset}
      description="Are you sure to delete this preset?"
      icon={
        <QuestionCircleOutlined
          style={{
            color: "red",
          }}
        />
      }
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
      okButtonProps={{ className: "bg-[#1677ff]" }}
    >
      <Button danger icon={<DeleteOutlined />} loading={btnDisabled}>
        Delete
      </Button>
    </Popconfirm>
  );
};
