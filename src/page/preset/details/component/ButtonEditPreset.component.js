import React, { useState } from "react";
import { Button, Popover } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { EditPreset } from "../";

export const ButtonEditPreset = ({ text }) => {
  const [openDrawerEditPreset, setOpenDrawerEditPreset] = useState(false);
  return (
    <div>
      <Popover
        content={
          <div>
            <p>Edit preset {text.data.attributes.preset}</p>
          </div>
        }
        trigger="hover"
      >
        <Button
          danger
          icon={<EditOutlined />}
          onClick={() => {
            setOpenDrawerEditPreset(true);
          }}
        >
          Edit
        </Button>
      </Popover>
      {openDrawerEditPreset && (
        <EditPreset
          openDrawerEditPreset={openDrawerEditPreset}
          setOpenDrawerEditPreset={setOpenDrawerEditPreset}
          preset={text}
        />
      )}
    </div>
  );
};
