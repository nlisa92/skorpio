import { Collapse, Typography, Row, Col, Button } from "antd";
import {
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  WarningOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function FAQ() {
  const itemsLeft = [
    {
      key: "1",
      label: (
        <span className="faq-label">
          <ClockCircleOutlined className="faq-icon" />
          Plazos de entrega
        </span>
      ),
      children: (
        <Paragraph className="faq-text">
          Normalmente entre <strong>7 y 14 días</strong>, dependiendo del país
          de origen y la disponibilidad del vehículo.
        </Paragraph>
      ),
    },
    {
      key: "2",
      label: (
        <span className="faq-label">
          <SafetyCertificateOutlined className="faq-icon" />
          ¿Qué garantías ofrecen?
        </span>
      ),
      children: (
        <Paragraph className="faq-text">
          Ofrecemos <strong>transparencia total</strong>, informes completos del
          vehículo y seguridad jurídica en toda la operación.
        </Paragraph>
      ),
    },
  ];

  const itemsRight = [
    {
      key: "3",
      label: (
        <span className="faq-label">
          <DollarOutlined className="faq-icon" />
          Comisión
        </span>
      ),
      children: (
        <Paragraph className="faq-text">
          Trabajamos con una <strong>comisión fija</strong> que cubre todo el
          proceso de importación y entrega en España.
        </Paragraph>
      ),
    },
    {
      key: "4",
      label: (
        <span className="faq-label">
          <WarningOutlined className="faq-icon" />
          Riesgos de inversión
        </span>
      ),
      children: (
        <Paragraph className="faq-text">
          Los riesgos son <strong>mínimos</strong> gracias a una selección
          adecuada del vehículo y un análisis previo del mercado.
        </Paragraph>
      ),
    },
  ];

  return (
    <div className="faq-section">
      <Title level={2} className="faq-title">
        Preguntas frecuentes
      </Title>

      <Paragraph className="faq-subtitle">
        Resolvemos las dudas más comunes sobre importación, garantías e
        inversión.
      </Paragraph>

      <Row gutter={[20, 20]} className="faq-row">
        <Col xs={24} md={12}>
          <div className="faq-box">
            <Collapse items={itemsLeft} expandIconPosition="end" />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="faq-box">
            <Collapse items={itemsRight} expandIconPosition="end" />
          </div>
        </Col>
      </Row>

      {/* CTA */}
      <div className="faq-cta">
        <Title level={4}>¿Tienes más preguntas?</Title>

        <Paragraph>
          Estamos aquí para ayudarte con cualquier duda sobre importación o
          inversión.
        </Paragraph>

        <Button className="faq-btn" href="/contactos">
          Contáctanos
        </Button>
      </div>

      {/* ================= STYLES ================= */}
      <style>
        {`
/* ================= SECTION ================= */

.faq-section {
  padding: 80px 40px;
  background: #fff;
}

/* ➕ ADD mobile padding */
@media (max-width: 768px) {
  .faq-section {
    padding: 40px 16px; /* ✅ FIX */
  }
}

/* ================= TITLE ================= */

.faq-title {
  font-size: 36px !important;
  text-align: center;
}

/* ➕ ADD */
@media (max-width: 768px) {
  .faq-title {
    font-size: 24px !important; /* ✅ FIX */
  }
}

.faq-subtitle {
  text-align: center;
  color: #666;
}

/* ================= BOX ================= */

.faq-box {
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  padding: 20px;
  background: #fff;
  height: 100%;
}

/* ================= LABEL ================= */

.faq-label {
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* ➕ ADD mobile fix */
@media (max-width: 768px) {
  .faq-label {
    font-size: 15px; /* ✅ FIX */
  }
}

/* ================= ICON ================= */

.faq-icon {
  color: #ff1a1a;
}

/* ================= TEXT ================= */

.faq-text {
  font-size: 16px;
  color: #555;
}

/* ➕ ADD */
@media (max-width: 768px) {
  .faq-text {
    font-size: 14px; /* ✅ FIX */
  }
}

/* ================= CTA ================= */

.faq-cta {
  text-align: center;
  margin-top: 50px;
}

.faq-btn {
  background: #ff1a1a !important;
  border: none !important;
  color: #fff !important;
  height: 50px;
  padding: 0 40px;
  font-size: 16px;
}

/* ➕ ADD mobile button */
@media (max-width: 768px) {
  .faq-btn {
    width: 100%; /* ✅ FIX */
  }
}
        `}
      </style>
    </div>
  );
}
