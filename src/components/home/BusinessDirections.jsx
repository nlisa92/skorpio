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
    <div className="business-section">
      <Title level={2} className="business-title">
        Nuestras áreas de trabajo
      </Title>

      <Row gutter={[20, 20]} className="business-row">
        {items.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.title}>
            <Card className="business-card">
              <Title level={4} className="business-card-title">
                {item.title}
              </Title>

              <Paragraph className="business-card-text">{item.text}</Paragraph>

              <Button className="business-btn">{item.btn}</Button>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ================= STYLES ================= */}
      <style>
        {`
/* ================= SECTION ================= */

.business-section {
  padding: 80px 40px;
  background: #f8f8f8;
}

/* ➕ ADD: mobile padding fix */
@media (max-width: 768px) {
  .business-section {
    padding: 40px 16px; /* ✅ FIX */
  }
}

/* ================= TITLE ================= */

.business-title {
  font-size: 36px !important;
}

/* ➕ ADD */
@media (max-width: 768px) {
  .business-title {
    font-size: 24px !important; /* ✅ FIX */
    text-align: center;
  }
}

/* ================= CARD ================= */

.business-card {
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  height: 100%;
}

/* ================= CARD TEXT ================= */

.business-card-title {
  margin-bottom: 10px !important;
}

.business-card-text {
  color: #555;
}

/* ================= BUTTON ================= */

.business-btn {
  background: #ff1a1a !important;
  border: none !important;
  color: #fff !important;
  margin-top: 20px;
  height: 44px;
}

/* ➕ ADD: mobile improvements */
@media (max-width: 768px) {
  .business-btn {
    width: 100%; /* ✅ FIX */
  }

  .business-card {
    text-align: center;
  }
}
        `}
      </style>
    </div>
  );
}
