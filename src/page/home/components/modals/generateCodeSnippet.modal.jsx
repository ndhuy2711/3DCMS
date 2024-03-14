import { Modal, Button, Input, Popover, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

export const GenerateCodeSnippet = ({
  business,
  isModalGenerateCodeSnippet,
  setIsModalGenerateCodeSnippet,
}) => {
  const { TextArea } = Input;
  function handleCopy(text) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);
    message.success(`Copied success !`);
  }
  return (
    <Modal
      open={isModalGenerateCodeSnippet}
      onCancel={() => setIsModalGenerateCodeSnippet(false)}
      centered
      width="50%"
      footer={[
        <Button key="back" onClick={() => setIsModalGenerateCodeSnippet(false)}>
          Cancel
        </Button>,
      ]}
    >
      <div className="mb-6">
        <p className="text-2xl">Install Google Tag Manager</p>
      </div>
      <div>
        <p>Copy the code below and paste it onto every page of your website</p>
        <p>
          Paste this code as high in the <b>&lt;head&gt;</b> of the page as
          possible:
        </p>
      </div>
      <div className="relative">
        <TextArea
          rows={4}
          value={business.data.data[0].attributes.codeIntegrationHead}
          disabled
          className="pr-10"
        />
        <Popover
          content="Copy"
          trigger="hover"
          className="absolute top-0 right-0 mt-3 mr-2"
        >
          <CopyOutlined
            className="text-2xl"
            onClick={() =>
              handleCopy(business.data.data[0].attributes.codeIntegrationHead)
            }
          />
        </Popover>
      </div>
      <div className="mt-5">
        <p>
          Additionally, paste this code immediately after the opening
          <b>&lt;body&gt;</b> tag:
        </p>
      </div>
      <div className="relative">
        <TextArea
          rows={4}
          value={business.data.data[0].attributes.codeIntegrationBody}
          disabled
          className="pr-10"
        />
        <Popover
          content="Copy"
          trigger="hover"
          className="absolute top-0 right-0 mt-3 mr-2"
        >
          <CopyOutlined
            className="text-2xl"
            onClick={() =>
              handleCopy(business.data.data[0].attributes.codeIntegrationBody)
            }
          />
        </Popover>
      </div>
    </Modal>
  );
};
