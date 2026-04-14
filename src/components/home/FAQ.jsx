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
      key: 1,
      label: (
        <span style={{ fontSize: 18 }}>
          <ClockCircleOutlined style={{ marginRight: 10, color: "#ff1a1a" }} />
          Plazos de entrega
        </span>
      ),
      children: (
        <Paragraph style={{ fontSize: 16, color: "#555" }}>
          Normalmente entre <strong>7 y 14 días</strong>, dependiendo del país de origen y la disponibilidad del vehículo.
        </Paragraph>
      ),
    },
    {
      key: 2,
      label: (
        <span style={{ fontSize: 18 }}>
          <SafetyCertificateOutlined style={{ marginRight: 10, color: "#ff1a1a" }} />
          ¿Qué garantías ofrecen?
        </span>
      ),
      children: (
        <Paragraph style={{ fontSize: 16, color: "#555" }}>
          Ofrecemos <strong>transparencia total</strong>, informes completos del vehículo y seguridad jurídica en toda la operación.
        </Paragraph>
      ),
    },
  ];

  const itemsRight = [
    {
      key: 3,
      label: (
        <span style={{ fontSize: 18 }}>
          <DollarOutlined style={{ marginRight: 10, color: "#ff1a1a" }} />
          Comisión
        </span>
      ),
      children: (
        <Paragraph style={{ fontSize: 16, color: "#555" }}>
          Trabajamos con una <strong>comisión fija</strong> que cubre todo el proceso de importación y entrega en España.
        </Paragraph>
      ),
    },
    {
      key: 4,
      label: (
        <span style={{ fontSize: 18 }}>
          <WarningOutlined style={{ marginRight: 10, color: "#ff1a1a" }} />
          Riesgos de inversión
        </span>
      ),
      children: (
        <Paragraph style={{ fontSize: 16, color: "#555" }}>
          Los riesgos son <strong>mínimos</strong> gracias a una selección adecuada del vehículo y un análisis previo del mercado.
        </Paragraph>
      ),
    },
  ];

  return (
    <div style={{ padding: "80px 40px", background: "#fff" }}>
      <Title level={2} style={{ fontSize: 36, textAlign: "center" }}>
        Preguntas frecuentes
      </Title>

      <Paragraph style={{ textAlign: "center", color: "#666", marginTop: 10 }}>
        Resolvemos las dudas más comunes sobre importación, garantías e inversión.
      </Paragraph>

      {/* Две колонки */}
      <Row gutter={40} style={{ marginTop: 40 }}>
        <Col xs={24} md={12}>
          <div
            style={{
              borderRadius: 16,
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              padding: 20,
              background: "white",
              marginBottom: 20,
            }}
          >
            <Collapse items={itemsLeft} expandIconPosition="end" />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div
            style={{
              borderRadius: 16,
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
              padding: 20,
              background: "white",
              marginBottom: 20,
            }}
          >
            <Collapse items={itemsRight} expandIconPosition="end" />
          </div>
        </Col>
      </Row>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Title level={4} style={{ marginBottom: 10 }}>
          ¿Tienes más preguntas?
        </Title>
        <Paragraph style={{ color: "#666", marginBottom: 20 }}>
          Estamos aquí para ayudarte con cualquier duda sobre importación o inversión.
        </Paragraph>

        <Button
          type="primary"
          size="large"
          style={{
            background: "#ff1a1a",
            border: "none",
            padding: "0 40px",
            height: 50,
            fontSize: 18,
          }}
          href="/contactos"
        >
          Contáctanos
        </Button>
      </div>
    </div>
  );
}
