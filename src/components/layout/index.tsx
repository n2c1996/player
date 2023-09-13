import React, { ReactNode } from "react";
import { Layout as Container } from "antd";
import { Menu } from "../menu";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <Container style={{ height: "90vh", padding: 16, background: "#ffffff" }}>
      <Container.Sider breakpoint="lg" collapsedWidth="0">
        <Menu />
      </Container.Sider>
      <Container.Content style={{ background: "#f5f5f5", padding: 16 }}>
        {props.children}
      </Container.Content>
    </Container>
  );
};
