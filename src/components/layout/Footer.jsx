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
      >
        <Row gutter={[40, 40]} className="footer-grid">
          {/* LOGOTIPO */}
          <Col xs={24} sm={12} md={6}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/logo/logo.png"
                alt="Skorpio Importwagen"
                style={{
                  height: 60,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <Title
                level={3}
                style={{
                  color: "#000",
                  marginBottom: 0,
                  fontWeight: 800,
                  letterSpacing: 0.5,
                }}
                className="footer-title"
              >
                Skorpio Importwagen
              </Title>
            </div>

            <Paragraph style={{ color: "#444", fontSize: 16, marginTop: 20 }}>
              Importación de vehículos desde la UE a España
            </Paragraph>
          </Col>

          {/* MENÚ */}
          <Col xs={24} sm={12} md={6}>
            <Title
              level={4}
              style={{ color: "#000", fontWeight: 700 }}
              className="footer-title"
            >
              Navegación
            </Title>

            <Paragraph>
              <a className="footer-link" href="/">Inicio</a>
            </Paragraph>
            <Paragraph>
              <a className="footer-link" href="/services">Nuestros servicios</a>
            </Paragraph>
            <Paragraph>
              <a className="footer-link" href="/catalog">Catálogo de coches</a>
            </Paragraph>
            <Paragraph>
              <a className="footer-link" href="/about">Sobre nosotros</a>
            </Paragraph>
            <Paragraph>
              <a className="footer-link" href="/contacts">Contactos</a>
            </Paragraph>
          </Col>

          {/* CONTACTOS */}
          <Col xs={24} sm={12} md={6}>
            <Title
              level={4}
              style={{ color: "#000", fontWeight: 700 }}
              className="footer-title"
            >
              Contactos
            </Title>

            <Paragraph style={{ color: "#444" }}>+34 678 123 456</Paragraph>
            <Paragraph style={{ color: "#444" }}>info@skorpio.es</Paragraph>
            <Paragraph style={{ color: "#444" }}>España, Málaga</Paragraph>
          </Col>

          {/* REDES SOCIALES */}
          <Col xs={24} sm={12} md={6} style={{ textAlign: "left" }}>
            <Title
              level={4}
              style={{ color: "#000", fontWeight: 700 }}
              className="footer-title"
            >
              Estamos en redes sociales
            </Title>

            <div
              style={{ fontSize: 28, color: "#000" }}
              className="footer-socials"
            >
              <FacebookFilled className="footer-icon" />
              <InstagramFilled className="footer-icon" />
              <TwitterCircleFilled className="footer-icon" />
              <WhatsAppOutlined className="footer-icon" />
            </div>
          </Col>
        </Row>

        {/* LÍNEA INFERIOR */}
        <div
          style={{
            marginTop: 60,
            textAlign: "center",
            color: "#777",
            fontSize: 14,
          }}
        >
          © {new Date().getFullYear()} Skorpio Importwagen. Todos los derechos reservados.
        </div>
      </Footer>

      {/* ESTILOS */}
      <style>
        {`
          .footer-link {
            color: #444;
            font-weight: 500;
            transition: 0.2s;
          }
          .footer-link:hover {
            color: #ff1a1a;
          }

          .footer-icon {
            margin-right: 20px;
            cursor: pointer;
            transition: 0.2s;
          }
          .footer-icon:hover {
            color: #ff1a1a;
          }

          @media (max-width: 768px) {
            .footer-title {
              text-align: center !important;
            }
            .footer-grid {
              text-align: center;
            }
            .footer-socials {
              justify-content: center;
              display: flex;
            }
          }
        `}
      </style>
    </>
  );
}
