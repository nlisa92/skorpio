import { Layout, Row, Col, Typography } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function FooterBar() {
  return (
    <>
      <Footer
        style={{
          background: "#f5f5f5",
          color: "#000",
          padding: "80px 40px",
          borderTop: "1px solid #ddd",
        }}
        className="footer" // ➕ ADD
      >
        <Row gutter={[40, 40]} className="footer-grid">
          {/* LOGO */}
          <Col xs={24} sm={12} md={6}>
            <div className="footer-logo">
              <img
                src={`${import.meta.env.BASE_URL}logo/logo.png`}
                alt="Skorpio Importwagen"
              />

              <Title level={3} className="footer-title">
                Skorpio Importwagen
              </Title>
            </div>

            <Paragraph className="footer-desc">
              Importación de vehículos desde la UE a España
            </Paragraph>
          </Col>

          {/* MENU */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="footer-title">
              Navegación
            </Title>

            <Paragraph>
              <a className="footer-link" href="/">
                Inicio
              </a>
            </Paragraph>
            <Paragraph>
              <a className="footer-link" href="/services">
                Servicios
              </a>
            </Paragraph>
            <Paragraph>
              <a className="footer-link" href="/catalog">
                Catálogo
              </a>
            </Paragraph>
            <Paragraph>
              <a className="footer-link" href="/about">
                Sobre nosotros
              </a>
            </Paragraph>
            <Paragraph>
              <a className="footer-link" href="/contacts">
                Contactos
              </a>
            </Paragraph>
          </Col>

          {/* CONTACTS */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="footer-title">
              Contactos
            </Title>

            <Paragraph className="footer-text">+34 678 123 456</Paragraph>
            <Paragraph className="footer-text">info@skorpio.es</Paragraph>
            <Paragraph className="footer-text">España, Málaga</Paragraph>
          </Col>

          {/* SOCIAL */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="footer-title">
              Redes sociales
            </Title>

            <div className="footer-socials">
              <FacebookFilled className="footer-icon" />
              <InstagramFilled className="footer-icon" />
              <TwitterCircleFilled className="footer-icon" />
              <WhatsAppOutlined className="footer-icon" />
            </div>
          </Col>
        </Row>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Skorpio Importwagen. Todos los derechos
          reservados.
        </div>
      </Footer>

      {/* ================= STYLES ================= */}
      <style>
        {`
/* ================= FOOTER BASE ================= */

.footer {
  padding: 80px 40px;
}

/* ➕ ADD: mobile padding fix */
@media (max-width: 768px) {
  .footer {
    padding: 40px 16px; /* ✅ FIX */
  }
}

/* ================= LOGO ================= */

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-logo img {
  height: 60px;
}

/* ➕ ADD: mobile logo fix */
@media (max-width: 768px) {
  .footer-logo {
    flex-direction: column; /* ✅ FIX */
    text-align: center;
    gap: 8px;
  }

  .footer-logo img {
    height: 48px; /* ➕ ADD */
  }
}

/* ================= TEXT ================= */

.footer-desc,
.footer-text {
  color: #444;
  font-size: 16px;
}

/* ➕ ADD: smaller text on mobile */
@media (max-width: 768px) {
  .footer-desc,
  .footer-text {
    font-size: 14px; /* ✅ FIX */
    text-align: center;
  }
}

/* ================= TITLES ================= */

.footer-title {
  color: #000;
  font-weight: 700;
}

/* ================= LINKS ================= */

.footer-link {
  color: #444;
  font-weight: 500;
  transition: 0.2s;
}

.footer-link:hover {
  color: #ff1a1a;
}

/* ================= SOCIALS ================= */

.footer-socials {
  font-size: 28px;
  color: #000;
}

/* ➕ ADD: mobile socials fix */
@media (max-width: 768px) {
  .footer-socials {
    display: flex;
    justify-content: center;
    font-size: 24px; /* ✅ FIX */
  }
}

/* ================= ICONS ================= */

.footer-icon {
  margin-right: 20px;
  cursor: pointer;
  transition: 0.2s;
}

.footer-icon:hover {
  color: #ff1a1a;
}

/* ================= BOTTOM ================= */

.footer-bottom {
  margin-top: 60px;
  text-align: center;
  color: #777;
  font-size: 14px;
}

/* ➕ ADD: spacing fix */
@media (max-width: 768px) {
  .footer-bottom {
    margin-top: 30px; /* ✅ FIX */
  }
}
        `}
      </style>
    </>
  );
}
