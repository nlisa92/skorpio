import { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../layout/LanguageSwitcher";

const { Header } = Layout;

export default function HeaderBar() {
  const location = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { key: "/", label: <Link to="/">{t("menu.home")}</Link> },
    {
      key: "/services",
      label: <Link to="/services">{t("menu.services")}</Link>,
    },
    { key: "/catalog", label: <Link to="/catalog">{t("menu.catalog")}</Link> },
    { key: "/about", label: <Link to="/about">{t("menu.about")}</Link> },
    {
      key: "/contacts",
      label: <Link to="/contacts">{t("menu.contacts")}</Link>,
    },
  ];

  return (
    <>
      <Header
        style={{
          background: "#f5f5f5",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          height: 80,
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginRight: 40,
            whiteSpace: "nowrap",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo/logo.png`}
            alt="Skorpio Importwagen"
            style={{
              height: 64,
              width: "auto",
              objectFit: "contain",
            }}
          />

          <span
            style={{
              color: "#000",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            Skorpio Importwagen
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="desktop-menu" style={{ flex: 1 }}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{
              background: "transparent",
              borderBottom: "none",
              color: "#000",
            }}
            theme="light"
            className="main-menu"
          />
        </div>

        {/* CONTACTS + LANGUAGE */}
        <div
          className="desktop-contacts"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <LanguageSwitcher />

          <div
            style={{
              color: "#333",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <MailOutlined style={{ color: "#ff1a1a" }} />
            info@skorpio.es
          </div>

          <Button
            size="large"
            style={{
              background: "#e5e5e5",
              border: "none",
              color: "#000",
              fontWeight: 600,
              padding: "0 20px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <PhoneOutlined style={{ color: "#ff1a1a" }} />
            +34 678 123 456
          </Button>
        </div>

        {/* MOBILE BURGER */}
        <Button
          className="mobile-burger"
          type="text"
          icon={<MenuOutlined style={{ color: "#000", fontSize: 26 }} />}
          onClick={() => setOpen(true)}
          style={{ display: "none" }}
        />
      </Header>

      {/* MOBILE MENU */}
      <Drawer
        title="Menú"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ borderRight: "none" }}
          onClick={() => setOpen(false)}
        />

        <div style={{ padding: 20 }}>
          <LanguageSwitcher dark />

          <div
            style={{ marginTop: 20, marginBottom: 10, display: "flex", gap: 8 }}
          >
            <PhoneOutlined style={{ color: "#ff1a1a" }} /> +34 678 123 456
          </div>

          <div style={{ marginBottom: 20, display: "flex", gap: 8 }}>
            <MailOutlined style={{ color: "#ff1a1a" }} /> info@skorpio.es
          </div>

          <Button
            block
            size="large"
            style={{
              background: "#e5e5e5",
              border: "none",
              color: "#000",
              fontWeight: 600,
              height: 48,
            }}
          >
            {t("header.consultation_request")}
          </Button>
        </div>
      </Drawer>

      {/* STYLES */}
      <style>
        {`
          .main-menu .ant-menu-item::after { border-bottom: none !important; }
          .main-menu .ant-menu-item:hover::after { border-bottom: none !important; }
          .main-menu .ant-menu-item:hover { background: transparent !important; }

        /* 🔥 Красная подсветка пунктов меню */
          .main-menu .ant-menu-item a {
          color: #000 !important;
          transition: 0.2s;
        }

          .main-menu .ant-menu-item:hover a {
            color: #ff1a1a !important;
          }

          .main-menu .ant-menu-item-selected a {
            color: #ff1a1a !important;
          }

        /* Убираем синий фон Ant Design */
          .ant-menu-light .ant-menu-item-selected {
            background: transparent !important;
          }
          .mobile-burger {
            display: none;
            height: 80px; /* как высота Header */
            align-items: center;
            justify-content: center;
            padding: 0 12px !important;
          }

          @media (max-width: 992px) {
            .desktop-menu { display: none; }
            .desktop-contacts { display: none; }

          .mobile-burger {
            display: flex !important;
            margin-left: auto;
            }
          }

        `}
      </style>
    </>
  );
}
