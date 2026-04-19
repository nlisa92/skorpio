import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderBar from "./Header";
import FooterBar from "./Footer";

const { Header, Content, Footer } = Layout;

export default function MainLayout() {
  return (
    <Layout
      style={{
        minHeight: "100dvh", // ✅ FIX: вместо 100vh (лучше для мобилок)
        display: "flex", // ➕ ADD
        flexDirection: "column", // ➕ ADD
      }}
    >
      {/* ================= HEADER ================= */}
      <Header
        style={{
          padding: 0,
          background: "transparent",
        }}
      >
        <HeaderBar />
      </Header>

      {/* ================= CONTENT ================= */}
      <Content
        style={{
          background: "#fff",
          flex: 1, // ➕ ADD: чтобы футер прижимался вниз
          padding: "0 16px", // ➕ ADD: базовый отступ для мобилки
        }}
      >
        {/* ➕ ADD: контейнер для ограничения ширины */}
        <div
          style={{
            maxWidth: "1200px", // ➕ ADD
            margin: "0 auto", // ➕ ADD
            width: "100%", // ➕ ADD
          }}
        >
          <Outlet />
        </div>
      </Content>

      {/* ================= FOOTER ================= */}
      <Footer
        style={{
          padding: 0,
          background: "transparent",
        }}
      >
        <FooterBar />
      </Footer>
    </Layout>
  );
}