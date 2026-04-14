import { Typography, Form, Input, Button, Row, Col, Card } from "antd";

import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function ContactsPage() {
  return (
    <div style={{ padding: "60px 40px" }}>
      <Title style={{ fontSize: 42, marginBottom: 10 }}>Contactos</Title>
      <Paragraph style={{ fontSize: 18, maxWidth: 700, color: "#555" }}>
        Estamos a su disposición para cualquier consulta relacionada con
        importación, búsqueda personalizada o inversiones en automóviles.
      </Paragraph>

      <Row gutter={40} style={{ marginTop: 40 }}>
        {/* Información de contacto */}
        <Col xs={24} md={10}>
          <Card
            bordered={false}
            style={{
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Title level={4} style={{ color: "#ff1a1a" }}>
              Póngase en contacto con nosotros
            </Title>

            <Paragraph>
              <PhoneOutlined style={{ color: "#ff1a1a", marginRight: 8 }} />
              <b>Teléfono:</b> +34 600 000 000
            </Paragraph>

            <Paragraph>
              <MailOutlined style={{ color: "#ff1a1a", marginRight: 8 }} />
              <b>Email:</b> info@skorpio.es
            </Paragraph>

            <Paragraph>
              <EnvironmentOutlined
                style={{ color: "#ff1a1a", marginRight: 8 }}
              />
              <b>Dirección:</b> C/ Cuarteles 39, 29002 Málaga, España
            </Paragraph>
          </Card>

          <Card
            bordered={false}
            style={{
              marginTop: 20,
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Title level={4} style={{ color: "#ff1a1a" }}>
              Datos legales
            </Title>
            <Paragraph>
              <b>Razón social:</b> SKORPIO SAMICA SL <br />
              <b>NIF:</b> B01712199 <br />
              <b>Registro:</b> Registro Mercantil de Málaga
            </Paragraph>
          </Card>

          <Card
            bordered={false}
            style={{
              marginTop: 20,
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Title level={4} style={{ color: "#ff1a1a" }}>
              Mensajería
            </Title>
            <Paragraph>WhatsApp disponible para consultas rápidas.</Paragraph>
            <Paragraph>Telegram — en desarrollo.</Paragraph>
          </Card>
        </Col>

        {/* Formulario */}
        <Col xs={24} md={14}>
          <Card
            bordered={false}
            style={{
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Title level={4} style={{ color: "#ff1a1a" }}>
              Escríbanos
            </Title>

            <Form layout="vertical" style={{ marginTop: 20 }}>
              <Form.Item label="Nombre" required>
                <Input size="large" />
              </Form.Item>

              <Form.Item label="Email" required>
                <Input size="large" />
              </Form.Item>

              <Form.Item label="Mensaje" required>
                <Input.TextArea rows={5} />
              </Form.Item>

              <Button
                size="large"
                block
                style={{
                  background: "#444",
                  border: "none",
                  color: "#fff",
                  height: 48,
                  fontWeight: 600,
                }}
              >
                Enviar mensaje
              </Button>
            </Form>
          </Card>

          {/* Мапа */}
          <Card
            bordered={false}
            style={{
              marginTop: 20,
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Title level={4} style={{ color: "#ff1a1a" }}>
              Ubicación
            </Title>
            <div
              style={{
                height: 260,
                background: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                color: "#777",
                fontSize: 16,
              }}
            >
              Google Maps (Málaga)
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
