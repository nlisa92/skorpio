import { Typography, Form, Input, Button, Row, Col, Card } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function ContactsPage() {
  return (
    <div className="contacts-page">
      {/* HERO */}
      <Title className="contacts-title">Contactos</Title>

      <Paragraph className="contacts-subtitle">
        Estamos a su disposición para cualquier consulta relacionada con
        importación, búsqueda personalizada o inversiones en automóviles.
      </Paragraph>

      <Row gutter={[24, 24]} className="contacts-grid">
        {/* LEFT SIDE */}
        <Col xs={24} md={10}>
          <Card className="contact-card">
            <Title level={4} className="accent-title">
              Póngase en contacto
            </Title>

            <Paragraph>
              <PhoneOutlined className="icon" />
              <b>Teléfono:</b> +34 600 000 000
            </Paragraph>

            <Paragraph>
              <MailOutlined className="icon" />
              <b>Email:</b> info@skorpio.es
            </Paragraph>

            <Paragraph>
              <EnvironmentOutlined className="icon" />
              <b>Dirección:</b> Málaga, España
            </Paragraph>
          </Card>

          <Card className="contact-card">
            <Title level={4} className="accent-title">
              Datos legales
            </Title>

            <Paragraph>
              SKORPIO SAMICA SL <br />
              B01712199 <br />
              Registro Mercantil de Málaga
            </Paragraph>
          </Card>

          <Card className="contact-card">
            <Title level={4} className="accent-title">
              Mensajería
            </Title>

            <Paragraph>WhatsApp disponible para consultas rápidas.</Paragraph>
            <Paragraph>Telegram — en desarrollo.</Paragraph>
          </Card>
        </Col>

        {/* RIGHT SIDE */}
        <Col xs={24} md={14}>
          {/* FORM */}
          <Card className="contact-card">
            <Title level={4} className="accent-title">
              Escríbanos
            </Title>

            <Form layout="vertical" className="contact-form">
              <Form.Item label="Nombre" required>
                <Input size="large" />
              </Form.Item>

              <Form.Item label="Email" required>
                <Input size="large" />
              </Form.Item>

              <Form.Item label="Mensaje" required>
                <Input.TextArea rows={5} />
              </Form.Item>

              <Button className="submit-btn" block size="large">
                Enviar mensaje
              </Button>
            </Form>
          </Card>

          {/* MAP */}
          <Card className="contact-card map-card">
            <Title level={4} className="accent-title">
              Ubicación
            </Title>

            <div className="map-placeholder">Google Maps (Málaga)</div>
          </Card>
        </Col>
      </Row>

      {/* ================= STYLES ================= */}
      <style>
        {`
.contacts-page {
  padding: 60px 40px;
}

/* MOBILE */
@media (max-width: 768px) {
  .contacts-page {
    padding: 30px 16px; /* FIX */
  }
}

/* ================= TITLE ================= */

.contacts-title {
  font-size: 42px !important;
  margin-bottom: 10px;
}

.contacts-subtitle {
  font-size: 18px;
  max-width: 700px;
  color: #555;
}

/* MOBILE */
@media (max-width: 768px) {
  .contacts-title {
    font-size: 26px !important;
  }

  .contacts-subtitle {
    font-size: 15px;
  }
}

/* ================= CARD ================= */

.contact-card {
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  margin-bottom: 20px;
}

/* ================= ACCENT ================= */

.accent-title {
  color: #ff1a1a !important;
}

/* ================= ICON ================= */

.icon {
  color: #ff1a1a;
  margin-right: 8px;
}

/* ================= FORM ================= */

.contact-form {
  margin-top: 20px;
}

/* ================= BUTTON ================= */

.submit-btn {
  background: #444 !important;
  color: #fff !important;
  border: none !important;
  height: 48px;
  font-weight: 600;
}

/* ================= MAP ================= */

.map-placeholder {
  height: 260px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: #777;
  font-size: 16px;
}

/* MOBILE MAP */
@media (max-width: 768px) {
  .map-placeholder {
    height: 200px;
  }
}
        `}
      </style>
    </div>
  );
}
