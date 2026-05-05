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
        className="main-header" // ➕ ADD
      >
        {/* LOGO */}
        <div className="logo-block">
          <img
            src={`${import.meta.env.BASE_URL}logo/logo.png`}
            alt="Skorpio Importwagen"
          />

          <span>Skorpio Importwagen</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="desktop-menu" style={{ flex: 1 }}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="main-menu"
            style={{
              background: "transparent",
              borderBottom: "none",
            }}
          />
        </div>

        {/* CONTACTS */}
        <div className="desktop-contacts">
          <LanguageSwitcher />

          <div className="email">
            <MailOutlined />
            info@skorpio.es
          </div>

          <Button className="phone-btn" size="large">
            <PhoneOutlined />
            +34 678 123 456
          </Button>
        </div>

        {/* BURGER */}
        <Button
          className="mobile-burger"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />
      </Header>

      {/* DRAWER */}
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
          onClick={() => setOpen(false)}
        />

        <div style={{ padding: 20 }}>
          <LanguageSwitcher dark />

          <div className="drawer-contact">
            <PhoneOutlined /> +34 678 123 456
          </div>

          <div className="drawer-contact">
            <MailOutlined /> info@skorpio.es
          </div>

          <Button block size="large" className="drawer-btn">
            {t("header.consultation_request")}
          </Button>
        </div>
      </Drawer>

      {/* STYLES */}
      <style>
        {`
/* ================= HEADER ================= */

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: clamp(64px, 8vw, 90px);
  padding: 0 clamp(16px, 4vw, 40px);

  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

/* ================= LOGO  ================= */

.logo-block {
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
}

.logo-block img {
  height: clamp(70px, 6vw, 110px); 
  width: auto;
  object-fit: contain;
}

.logo-block span {
  font-weight: 700;
  font-size: clamp(16px, 1.8vw, 22px); 
}

/* ================= MENU ================= */

.main-menu {
  background: transparent !important;
  border-bottom: none !important;
}

/* ================= MENU STYLES ================= */

.main-menu .ant-menu-item::after { border-bottom: none !important; }
.main-menu .ant-menu-item:hover { background: transparent !important; }

.main-menu .ant-menu-item a {
  color: #000 !important;
}

.main-menu .ant-menu-item:hover a,
.main-menu .ant-menu-item-selected a {
  color: #ff1a1a !important;
}

.ant-menu-light .ant-menu-item-selected {
  background: transparent !important;
}

/* ================= CONTACTS ================= */

.desktop-contacts {
  display: flex;
  align-items: center;
  gap: 20px;
}

.email {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* ================= BUTTON ================= */

.phone-btn.ant-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #e5e5e5;
  border: none;
  font-weight: 600;
  transition: all 0.25s ease;
}

/* hover */
.phone-btn.ant-btn:hover {
  background: #dcdcdc;
  color: #000;
  border-color: transparent;
  box-shadow: none !important;
}

.phone-btn.ant-btn:focus,
.phone-btn.ant-btn:active,
.phone-btn.ant-btn:focus-visible {
  outline: none !important;
  box-shadow: 0 0 0 2px rgba(255, 26, 26, 0.35) !important;
  border-color: #ff1a1a !important;
}

.phone-btn.ant-btn:focus-visible {
  box-shadow: 0 0 0 2px rgba(255, 26, 26, 0.35) !important;
}

/* ================= BURGER ================= */

.mobile-burger {
  display: none;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 992px) {
  .desktop-menu,
  .desktop-contacts {
    display: none;
  }

  .mobile-burger {
    display: flex;
    margin-left: auto;
  }
}

@media (max-width: 480px) {
  .logo-block span {
    display: none;
  }
}

/* ================= DRAWER ================= */

.drawer-contact {
  display: flex;
  gap: 8px;
  margin: 10px 0;
}

.drawer-btn {
  background: #e5e5e5;
  border: none;
  font-weight: 600;
  height: 48px;
}
        `}
      </style>
    </>
  );
}
