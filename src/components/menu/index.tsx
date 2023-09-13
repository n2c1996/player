import { Menu as MenuDefault } from "antd";
import { NAME_PAGE, PATH } from "../../constants/path";
import {
  AmazonOutlined,
  AppleOutlined,
  CodeSandboxOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MenuDefault
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[NAME_PAGE["PAGE-1"]]}
      items={[
        {
          key: NAME_PAGE["PAGE-1"],
          icon: <AppleOutlined />,
          label: NAME_PAGE["PAGE-1"],
          onClick: () => navigate(PATH["PAGE-1"]),
        },
        {
          key: NAME_PAGE["PAGE-2"],
          icon: <WindowsOutlined />,
          label: NAME_PAGE["PAGE-2"],
          onClick: () => navigate(PATH["PAGE-2"]),
        },
        {
          key: NAME_PAGE["PAGE-3"],
          icon: <AmazonOutlined />,
          label: NAME_PAGE["PAGE-3"],
          onClick: () => navigate(PATH["PAGE-3"]),
        },
        {
          key: NAME_PAGE["PAGE-4"],
          icon: <CodeSandboxOutlined />,
          label: NAME_PAGE["PAGE-4"],
          onClick: () => navigate(PATH["PAGE-4"]),
        },
      ]}
    />
  );
};
