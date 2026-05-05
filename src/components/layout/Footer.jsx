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
      <Footer className="footer">
        <Row gutter={[32, 32]} className="footer-grid">
          {/* LOGO */}
          <Col xs={24} md={6}>
            <div className="footer-logo-block">
              <img
                src={`${import.meta.env.BASE_URL}logo/logo.png`}
                alt="Skorpio Importwagen"
              />
              <span className="footer-logo-text">Skorpio Importwagen</span>
            </div>

            <Paragraph className="footer-desc">
              Importación de vehículos desde la UE a España
            </Paragraph>
          </Col>

          {/* MENU */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="footer-title">Navegación</Title>

            <Paragraph><a className="footer-link" href="/">Inicio</a></Paragraph>
            <Paragraph><a className="footer-link" href="/services">Servicios</a></Paragraph>
            <Paragraph><a className="footer-link" href="/catalog">Catálogo</a></Paragraph>
            <Paragraph><a className="footer-link" href="/about">Sobre nosotros</a></Paragraph>
            <Paragraph><a className="footer-link" href="/contacts">Contactos</a></Paragraph>
          </Col>

          {/* CONTACTS */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="footer-title">Contactos</Title>

            <Paragraph className="footer-text">+34 678 123 456</Paragraph>
            <Paragraph className="footer-text">info@skorpio.es</Paragraph>
            <Paragraph className="footer-text">España, Málaga</Paragraph>
          </Col>

          {/* SOCIAL */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="footer-title">Redes sociales</Title>

            <div className="footer-socials">
              <FacebookFilled className="footer-icon" />
              <InstagramFilled className="footer-icon" />
              <TwitterCircleFilled className="footer-icon" />
              <WhatsAppOutlined className="footer-icon" />
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Skorpio Importwagen. Todos los derechos reservados.
        </div>
      </Footer>

      <style>{`
.footer {
  background: #f5f5f5;
  padding: 80px 40px;
  border-top: 1px solid #ddd;
}

/* ================= LOGO ================= */

.footer-logo-block {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.footer-logo-block img {
  height: clamp(80px, 6vw, 110px);
  width: auto;
  object-fit: contain;
}

.footer-logo-text {
  font-size: clamp(16px, 1.8vw, 22px);
  font-weight: 700;
  color: #000;
  line-height: 1;
  margin: 0;
}

/* ================= TEXT ================= */

.footer-desc,
.footer-text {
  color: #444;
  font-size: 16px;
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
  display: flex;
  gap: 18px;
}

.footer-icon {
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

/* ================= MOBILE: EVERYTHING CENTER ================= */

@media (max-width: 768px) {

  .footer {
    padding: 40px 16px;
  }

  .footer-logo-block,
  .footer-desc,
  .footer-text,
  .footer-title,
  .footer-link,
  .footer-grid {
    text-align: center !important;
    justify-content: center !important;
  }

  /* логотип вертикально */
  .footer-logo-block {
    flex-direction: column;
    align-items: center;
  }

  .footer-logo-text {
    font-size: 18px;
  }

  /* соцсети строго по центру */
  .footer-socials {
    justify-content: center;
  }

  /* центрируем колонки Ant Design */
  .footer-grid .ant-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-bottom {
    margin-top: 30px;
    text-align: center;
  }
}
      `}</style>
    </>
  );
}