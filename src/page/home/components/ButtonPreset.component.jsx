import { useNavigate } from "react-router-dom";
import { Button, Popover } from "antd";

export const ButtonPreset = ({ text }) => {
  const navigator = useNavigate();
  const businessId = text.attributes.businessId;

  return (
    <Popover
      content={
        <div>
          <p>
            Business <b>{text.attributes.Name}</b> have{" "}
            <b>{text.attributes.presets.data.length}</b> preset
          </p>
        </div>
      }
      trigger="hover"
    >
      <Button
        onClick={() => {
          navigator(`business/${businessId}/preset`);
        }}
      >
        {text.attributes.presets.data.length}
      </Button>
    </Popover>
  );
};
