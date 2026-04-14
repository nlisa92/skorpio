import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderBar from "./Header";
import FooterBar from "./Footer";

const { Header, Content, Footer } = Layout;

export default function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      
      <Header style={{ padding: 0, background: "transparent" }}>
        <HeaderBar />
      </Header>

      <Content style={{ background: "#fff" }}>
        <Outlet />
      </Content>

      <Footer style={{ padding: 0, background: "transparent" }}>
        <FooterBar />
      </Footer>

    </Layout>
  );
}
