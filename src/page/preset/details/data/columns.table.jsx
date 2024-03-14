import { ButtonAsset, ButtonDeletePreset, ButtonEditPreset } from "../";
export const columns = [
  {
    title: "Name of preset",
    dataIndex: "name",
    key: "name",
    fixed: "left",
    width: 250,
    align: "center",
  },
  {
    title: "Asset",
    dataIndex: "asset",
    key: "asset",
    align: "center",
    width: 250,
    render: (text) => {
      return <ButtonAsset text={text} />;
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    align: "center",
    width: 250,
    render: (text) => {
      return (
        <div>
          <ButtonEditPreset text={text} />
          <ButtonDeletePreset text={text} />
        </div>
      );
    },
  },
];
