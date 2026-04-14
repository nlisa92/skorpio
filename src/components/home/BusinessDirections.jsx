import { Card, Row, Col, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

export default function BusinessDirections() {
  const items = [
    {
      title: "Importación y venta",
      text: "Vehículos listos en stock",
      btn: "Ver catálogo",
    },
    {
      title: "Importación por encargo",
      text: "Búsqueda personalizada para el cliente",
      btn: "Enviar solicitud",
    },
    {
      title: "Inversiones en automóviles",
      text: "¡Modelo rentable!",
      btn: "Más información",
    },
  ];

  return (
    <div style={{ padding: "80px 40px", background: "#f8f8f8" }}>
      <Title level={2} style={{ fontSize: 36 }}>Nuestras áreas de trabajo</Title>

      <Row gutter={40} style={{ marginTop: 40 }}>
        {items.map((item) => (
          <Col span={8} key={item.title}>
            <Card
              style={{
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Title level={4}>{item.title}</Title>
              <Paragraph>{item.text}</Paragraph>

              <Button
                size="large"
                style={{
                  background: "#ff1a1a",
                  border: "none",
                  color: "white",
                  marginTop: 20,
                }}
              >
                {item.btn}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
