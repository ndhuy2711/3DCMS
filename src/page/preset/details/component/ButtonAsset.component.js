import { Button, Popover } from "antd";

export const ButtonAsset = ({ text }) => {
  return (
    <Popover
      content={
        <div>
          <p>
            Preset <b>{text.data.preset}</b> have{" "}
            <b>{text.data.assets.data.length}</b> asset
          </p>
        </div>
      }
      trigger="hover"
    >
      <Button>{text.data.assets.data.length}</Button>
    </Popover>
  );
};
